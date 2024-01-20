import express from 'express';
import connectDB from "./config/db.js";
import {authRouter} from "./routes/authRoutes.js"
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}....`)
})