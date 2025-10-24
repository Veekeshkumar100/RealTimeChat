import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import cookieParser from "cookie-parser"
dotenv.config();

const app =express();
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from './routes/user.Route.js';
import { errorHandler } from './middleware/error.middleware.js';
import messageRouter from './routes/message.routes.js';

app.use('/api/v1/users/', userRouter);
app.use('/api/v1/message/', messageRouter);

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

connectDB().then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
}).catch((error)=>{
    console.error("Database connection error:", error);
    process.exit(1);
});
