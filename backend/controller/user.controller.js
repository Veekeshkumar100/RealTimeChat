import User from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponce } from "../utils/apiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

  const registerUser = asyncHandler( async (req, res,next) => {

    console.log("data",req.body);

       const {fullName,userName, password } = req.body;
         // Here, you would typically add logic to save the user to your database
         if(!fullName || !userName || !password){
            return next(new ApiError(400,"All fields are required"));
         }

         const user= await User.findOne({userName});
         if(user){
            return next(new ApiError(400,"User already exists"));
         }  
         
         if(password.length < 6){
            return next(new ApiError(400,"Password must be at least 6 characters"));
         }



         const newUser = new User({ fullName, userName, password });
         const userCreated = await newUser.save();
         console.log("userCreated",userCreated);
       return  res.status(201).json({message:"User registered successfully",user:userCreated});


     });

    const loginUser = asyncHandler( async (req, res,next) => {
      const {userName,password}=req.body;

      if(!userName || !password){
        return res.status(400).json({message:"All fields are required"});
      }
      const user = await User.findOne({userName});
      if(!user){
   return res.status(400).json({message:"user not found"});
      }
      const isMatch = await user.matchPassword(password);
      if(!isMatch){
        return res.status(400).json({message:"Invalid credentials"});
      }

      return res.status(200).json({message:"Login successful"});
       
     });

 
     export {registerUser,loginUser};