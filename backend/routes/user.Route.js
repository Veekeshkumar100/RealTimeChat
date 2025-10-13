import express from 'express';
import { getOtherUser, getUserProfile, loginUser, registerUser } from '../controller/user.controller.js';
import { upload } from '../middleware/multer.middleware.js';
import { jwtVerify } from '../middleware/auth.middleware.js';

const userRouter =express.Router();

// Define user-related routes here
 userRouter.post('/register',upload.single('avatar'),registerUser);
 userRouter.post('/login', loginUser);
 userRouter.get('/profile',jwtVerify, getUserProfile);
 userRouter.get('/get-otherUser',jwtVerify, getOtherUser);
 export default userRouter;