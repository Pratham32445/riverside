import {z} from "zod";

export const userSignUpSchema = z.object({
    name : z.string().optional(),
    email : z.string().email(),
    password : z.string().min(6,"password should be greater than 6 length").optional(),
})

export const createMeeting = z.object({
    
})