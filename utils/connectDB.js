import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

function dbConnet(){
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connect to DB");
        })
        .catch((err)=>{
            console.log("Faild to connect",err);
        })
}

export default dbConnet;

