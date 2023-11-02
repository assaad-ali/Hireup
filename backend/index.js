import express from 'express';
import connectDB from "./config/db.js";
import {authRouter} from "./routes/authRoutes.js"

connectDB();

const app = express();

app.use(express.json());
app.use('/api/v1/auth', authRouter)

app.listen(3000, ()=>{
    console.log("server is running on port 3000....")
})