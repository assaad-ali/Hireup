
import {Router} from "express";
import {signup, login} from "../controllers/authController.js"

export const authRouter = Router();

// console.log("sign up: ", signup)
authRouter.post('/signup', signup);

// console.log("log in: ", login);
authRouter.post('/login', login);


