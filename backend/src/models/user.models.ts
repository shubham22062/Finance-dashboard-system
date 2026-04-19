import mongoose, { Document,  Schema } from "mongoose";


export enum Role {
    VIEWER = "viewer",
    ANALYST= "analyst",
    ADMMIN ="admin"
}

interface IUser extends Document{
    name : string,
    email:string,
    password:string,
    role:Role;
    isActive:boolean;
    createdAt:Date;
    updatedAt:Date;
};

const userSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:Object.values(Role),
        default:Role.VIEWER
    },
    isActive:{
        type:Boolean,
        default:true,
    }
},{timestamps:true});

const User = mongoose.model<IUser>("User" , userSchema)

export default User;