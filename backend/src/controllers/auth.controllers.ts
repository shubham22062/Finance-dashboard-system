import type { Request, Response } from "express";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utlis/jwt.js";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import mongoose from "mongoose";

export const Register = async(req:Request , res:Response)=>{
  try {
    const {name , email , password,role} = req.body;
  
    const existingUser = await User.findOne({email});
  
    if(existingUser){
      return res.status(400).json({message:"User is already exists"});
    }
  
    const hashedPassword = await bcrypt.hash(password,10);
  
    const user = await User.create({
      name,
      email,
      password:hashedPassword,
      role
    });
  
    res.status(201).json({
      token:generateToken(user),
      user:{
          _id:user._id,
          name : user.name,
          email:user.email,
          role:user.role,
          isActive:user.isActive
      }
    });
  } catch (error) {
    res.status(500).json({message:"Server Error"});
  }

};

export const Login = async(req:Request, res:Response)=>{
    try {
        const {email , password} = req.body;
    
        const user = await User.findOne({email});
    
        if(!user){
            return res.status(400).json({message:"Invalid credentails"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password)
    
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
    
        res.json({
            token:generateToken(user),
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                isActive:user.isActive
            }
    
        });
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
}

export const getUsers = async(req:AuthRequest, res:Response)=>{
   try {
     const users =  await User.find().select("-password");
     res.json(users);
   } catch (error) {
     res.status(500).json({message:"Server Error"})
   }
};


export const deleteUsers = async (req: AuthRequest, res: Response) => {
  try {
    const userID = req.params.id;

    const user = await User.findByIdAndDelete(userID);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


