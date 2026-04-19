import mongoose, { Document,Schema } from "mongoose";

export enum RecordType{
    INCOME = "income",
    EXPENSE = "expense"
}

 export interface IRecord extends Document{
    amount:number;
    type:RecordType;
    category:string;
    date:Date;
    note?:string;
    createdBy:mongoose.Types.ObjectId;
    isDeleted:boolean;
    createdAt:Date;
    updatedAt:Date;

}


const recordSchema = new Schema({
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:Object.values(RecordType),
        required:true

    },
    category:{
        type:String,
        required:true,

    },
    date:{
        type:Date,
        required:true
    },
    note:{
        type:String
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true});


const Record = mongoose.model<IRecord>("Record", recordSchema);

export default Record;