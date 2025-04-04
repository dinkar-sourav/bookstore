import express from 'express';
import mongoose from 'mongoose';
import "./Config/dotConfig.js"
import dbConnect from './Config/dbConfig.js';
import bookRouter from './Routes/bookRouter.js';
import userRouter from './Routes/userRouter.js'
import cors from "cors";

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port=process.env.port;
// define the routes\
app.use('/book',bookRouter);
app.use('/users',userRouter );

app.listen(port, ()=>{
    console.log(`server connected ${port}`);
    dbConnect();
})