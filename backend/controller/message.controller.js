
import Conversation from "../models/conversation.model.js";
import Message from "../models/mesaage.model.js";
impo
import { asyncHandler } from "../utils/asyncHandler";



export const sendMessage=asyncHandler(async(req ,res,next)=>{
    const senderId=req.user._id;
    const recieverId=req.params.recieverId;
    const message=req.body.message;

    if(!senderId || !recieverId || message ){
   return next(new ApiError(404,"All the field are required"));
    }

    let conversation= await Conversation.findOne({
      members:{$all:[senderId,recieverId]}      
    });

    if(!conversation){
       conversation= new  Conversation({
          members:[senderId,recieverId],
       })
    }



    const newmessage =  await Message.create({
        senderId,
        recieverId,
        message,
    })
    conversation.message.push(newmessage._id);
    await conversation.save();

    res.status(201).json({message:"message send succesfully",messageData})

}
)