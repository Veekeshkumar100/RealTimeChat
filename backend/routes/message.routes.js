import express from 'express';

import { jwtVerify } from '../middleware/auth.middleware.js';

const messageRouter =express.Router();

messageRouter.post("/send",jwtVerify,sendMessage)


 export default messageRouter;