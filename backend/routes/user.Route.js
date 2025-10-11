import express from 'express';
import { loginUser, registerUser } from '../controller/user.controller.js';

const userRouter =express.Router();

// Define user-related routes here
 userRouter.post('/register', registerUser);
 userRouter.post('/login', loginUser);
 export default userRouter;