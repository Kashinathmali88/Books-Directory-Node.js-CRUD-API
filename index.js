import express from "express";
import dbConnet from "./utils/connectDB.js";
import dotenv from "dotenv";
dotenv.config();

// import all routes 

import bookRoutes from "./routes/book.route.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = process.env.PORT || 4000;

// db connect
dbConnet();

app.use("/api/book/",bookRoutes);



app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
    
});