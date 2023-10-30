
import {Router} from "express";
import {signup} from "../controllers/authController.js"

export const authRouter = Router();

console.log(signup)
authRouter.post('/signup', signup);


