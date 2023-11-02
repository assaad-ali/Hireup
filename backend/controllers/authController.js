import {User} from "../models/userModel.js";

export const signup = async(req, res)=>{
    try{
        const existingUser = await User.findOne (
            {$or:[{username: req.body.username}, {email: req.body.email}]}
        )
        if(existingUser){
            return res.status(409).json({message: "User already exist"});
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
        // console.log(err);
        return res.status(500).json({message: err.message})
    }
}

export const login = async(req, res) =>{
    try{
        // console.log(req.body)
        const email = req.body.email;
        const password = req.body.password;

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
        return res.status(200).json({message: `Dear ${user.username} you are logged in`, status: "Success"})

    }catch(err){
        // console.log(err);
        return res.status(500).json({message: err.message})
        
    };
}