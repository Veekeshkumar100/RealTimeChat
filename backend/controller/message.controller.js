
import Conversation from "../models/conversation.model.js";
import Message from "../models/mesaage.model.js";
import { ApiError } from "../utils/apiError.js";
import {getRecieverSocketId, io} from "../socket/socket.js"
import { asyncHandler } from "../utils/asyncHandler.js";


export const sendMessage=asyncHandler(async(req ,res,next)=>{
      
    const senderId=req.user._id;
    const receiverId=req.params.receiverId;
    const message=req.body.message;
    if(!senderId || !receiverId || !message ){
      return next(new ApiError(404,"All the field are required"));
    }

    const newmessage =  await Message.create({
        senderId,
        receiverId,
        message,
    })
    
    //socket io
    const socketId=getRecieverSocketId(receiverId);
    io.to(socketId).emit("newmessage",newmessage)


    
    let conversation= await Conversation.findOne({
      members:{$all:[senderId,receiverId]}      
    });
    if(!conversation){
       conversation= await  Conversation.create({
          members:[senderId,receiverId],
       })
    }
    conversation.message.push(newmessage._id);
    await conversation.save();

    res.status(201).json({message:"message send succesfully",newmessage})

}
)

export const getMessages= asyncHandler(async(req,res,next)=>{
    const senderId=req.user._id;
    const otherPartisipentId=req.params.otherPartisipentId;
  
  if (!senderId || !otherPartisipentId) {
    return next(new ApiError(400, "Both participant IDs are required"));
  }

  const conversation = await Conversation.findOne({
    members: { $all: [senderId, otherPartisipentId] }
  }).populate("message");

  if (!conversation) {
    return res.status(200).json({ status: "success", messages: [] });
  }

  res.status(200).json({ status: "success", messages: conversation.message || [] });

})