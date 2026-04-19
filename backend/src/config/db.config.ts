import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export const connectDB = async():Promise<void> =>{
    try {
        const db =  process.env.DATABASE_URI as string;
    
        if(!db){
            throw new Error("Database uri is not defined")
        }
    
        mongoose.connect(db)
        console.log("Database connected succesfully")
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1);
    }

}