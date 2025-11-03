
import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server =http.createServer(app);
console.log( process.env.FRONTEND_URL)
const io = new Server(server,
    {
        cors: {
            origin: process.env.FRONTEND_URL ,
        }
    }
);
  
const onlineUserIdmap={
    //userId= socketId;
}

io.on("connection",(socket)=>{
   console.log("user connected")
    const userId = socket.handshake.query.userId;
    console.log(userId);
    onlineUserIdmap[userId]=socket;
    console.log(Object.keys(onlineUserIdmap));
    io.emit("onlineuser",Object.keys(onlineUserIdmap));
    socket.on("disconnect",()=>{
     delete onlineUserIdmap[userId];
      io.emit("onlineuser",Object.keys(onlineUserIdmap));
    })
})

const getRecieverSocketId=(userId)=>{
  return onlineUserIdmap[userId];
}




export {app,io,server,getRecieverSocketId}
