import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
dotenv.config();

const app =express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import userRouter from './routes/user.Route.js';
import { errorHandler } from './middleware/error.middleware.js';

app.use('/api/v1/users/', userRouter);

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
