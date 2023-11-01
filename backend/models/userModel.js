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

userSchema.pre("save", async function(next){
    try{
        // console.log("hashing password");
        if(!this.isModified("password")){
            next();
        }
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }catch(err){
        console.log(err);
        next(err);
    }
})

userSchema.methods.checkPassword = async function(
    candidatePassword
){
    return await bcrypt.compare(candidatePassword, this.password);
}

export const User = mongoose.model('User', userSchema);
