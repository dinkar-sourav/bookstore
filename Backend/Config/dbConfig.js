import mongoose from 'mongoose';

const dbString= process.env.dbUrl;
const dbConnect= ()=>{
    mongoose.connect(dbString);
    console.log("db connected");
}

export default dbConnect;