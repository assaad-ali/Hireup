import {User} from "../models/userModel.js";
import validator from "validator";
import  jwt from 'jsonwebtoken';
import { promisify } from "util";


const signToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRETE, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}

const createSendToken = (user, statusCode, message, res) => {
    const token = signToken(user.id);
    res.status(statusCode).json({
        status: "Sucess",
        token,
        message: message,
        data:{
            user,
        },
    });
}

export const signup = async(req, res)=>{
    try{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword

        if(!(validator.isEmail(email))){
            return res.status(404).json({message: "Invalid credentials case1"})
        }
        const existingUser = await User.findOne (
            {$or:[{username: username}, {email: email}]}
        )
        if(existingUser){
            return res.status(409).json({message: "User already exist"});
        }
        if(password !== confirmPassword){
            return res.status(400).json({message: "Passwords do not match"})
        }
        const newUser = await User.create({
            username: username,
            email: email,
            password: password
        })

        let message = `Dear ${username} your account was created successfully`

        createSendToken(newUser, 201, message, res)

    }catch(err){
        // console.log(err);
        return res.status(500).json({message: err.message})
    }
}

export const login = async(req, res) =>{
    try{
        // console.log(req.body)
        const email = req.body.email;
        const password = req.body.password;

        if(!(validator.isEmail(email))){
            return res.status(404).json({message: "Invalid credentials case1"})
        }

        const user = await User.findOne({email: email});

        
        if(!user){
            console.log("user :", user);
            return res.status(404).json({message: "Invalid credentials case2"});
        }
        
        if(!(await user.checkPassword(password))){
            return res.status(408).json({message: "Invalid Credentials case3"});
        }
        req.user = user;
        // console.log("req user = ", req.user);
        // console.log("user = ", user);
        let message = `Dear ${user.username} you are logged in`;
        createSendToken(user, 200, message, res)
    }catch(err){
        // console.log(err);
        return res.status(500).json({message: err.message})
        
    };
}