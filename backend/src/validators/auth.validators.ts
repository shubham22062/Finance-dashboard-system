import {z} from "zod"

export const registerSchema = z.object({
    name:z.string().min(3, "Name must be atleast 3 character"),
    email:z.string().email("Invalid email format"),
    password:z.string().min(6, "password must be atleast 6 character")
})

export const loginSchema = z.object({
    email:z.string().email("invalid email"),
    password:z.string().min(6, "password is required")
});