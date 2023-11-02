import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("mongodb connected!")
    }catch(err){
        console.error(err)
        process.exit(1);
    }
}

export default connectDB;