import User from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudnary } from "../utils/cloudnary.js";

const generateToken = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error("User not found");
  }
      const  AccessToken= user.generateAccessToken();

      return AccessToken;
};

const registerUser = asyncHandler(async (req, res, next) => {
  const { fullName, userName, password, gender } = req.body;
  //  Here, you would typically add logic to save the user to your database
  if (!fullName || !userName || !password) {
    return next(new ApiError(400, "All fields are required"));
  }

  const avatarLocalPath = req.file?.path;

  const avatar = await uploadOnCloudnary(avatarLocalPath);

  if (!avatar) {
    return next(new ApiError(400, "image is not get"));
  }
  const user = await User.findOne({ userName });
  if (user) {
    return next(new ApiError(400, "User already exists"));
  }

  if (password.length < 6) {
    return next(new ApiError(400, "Password must be at least 6 characters"));
  }

  const newUser = new User({
    fullName,
    userName,
    password,
    gender,
    avatar: avatar.url,
  });
  const userCreated = await newUser.save();

  const token = await generateToken(userCreated._id);


  return res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    })
    .status(201)
    .json({
      message: "User registered successfully",
      user: userCreated,
      token,
    });
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { userName, password } = req.body;
  console.log("Login attempt:", { userName, password });

  if (!userName || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await User.findOne({ userName });
  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = await generateToken(user._id);

  return res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    })
    .status(200)
    .json({ message: "Login successful", token });
});
 const getUserProfile=asyncHandler(async(req,res,next)=>{
  const user=await User.findById(req.user.id).select("-password");
 
  if(!user){
   return next( new ApiError(400,"user doesnt found"))

  }
  res.status(200).json({user});
 })


export const getOtherUser=asyncHandler(async(req,res,next)=>{
   const getOtherUser= await User.find({_id:{$ne:req.user._id}});
  
   if(!getOtherUser){
     return next( new ApiError(400,"users doesn't found"))
   }

   res.status(200).json({message:"users found",getOtherUser});
 })

export { registerUser, loginUser,getUserProfile };
