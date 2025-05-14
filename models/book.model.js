import mongoose from "mongoose";

const bookSchma = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:String,
    genre:String,
    publishedYear:Number
})

const Book = mongoose.model("Book",bookSchma);

export default Book;