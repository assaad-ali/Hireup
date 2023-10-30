import express from 'express';
import connectDB from "./config/db.js";

connectDB();

const app = express();

app.use(express.json());
app.listen(5000, ()=>{
    console.log("server is running on port 5000....")
})