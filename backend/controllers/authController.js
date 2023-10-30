import {User} from "../models/userModel.js";

export const signup = async(req, res)=>{
    try{
        const existingUser = await User.findOne (
            {$or:[{username: req.body.username}, {email: req.body.email}]}
        )
        if(existingUser){
            return res.status(409).json({message: "Username already exist"});
        }
        if(req.body.password !== req.body.confirmPassword){
            return res.status(400).json({message: "Passwords do not match"})
        }
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        let message = `Dear ${req.body.username} your account was created successfully`
        return res.status(201).json({message: message, status: "sucesss"})

    }catch(err){
        console.log(err);
        return res.status(500).json({message: err.message})
    }
}