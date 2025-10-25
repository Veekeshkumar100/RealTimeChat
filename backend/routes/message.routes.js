import express from 'express';

import { jwtVerify } from '../middleware/auth.middleware.js';
import { getMessages, sendMessage } from '../controller/message.controller.js';

const messageRouter =express.Router();

messageRouter.post("/sendMessage/:receiverId",jwtVerify,sendMessage)
messageRouter.get("/get-message/:otherPartisipentId",jwtVerify,getMessages)


 export default messageRouter;