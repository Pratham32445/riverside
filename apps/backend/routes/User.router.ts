import express from "express"
import { signIn, signUp } from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.post("/sign-up",signUp);
userRouter.post("/sign-in",signIn);

