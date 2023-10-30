import mongoose, { Schema } from 'mongoose'; 

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "Enter your username"],
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Enter your email"],
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Enter your password"]
    },
});


export const User = mongoose.model('User', userSchema);
