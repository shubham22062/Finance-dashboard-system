import mongoose, { Document } from "mongoose";
export declare enum RecordType {
    INCOME = "income",
    EXPENSE = "expense"
}
export interface IRecord extends Document {
    amount: number;
    type: RecordType;
    category: string;
    date: Date;
    note?: string;
    createdBy: mongoose.Types.ObjectId;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
declare const Record: mongoose.Model<IRecord, {}, {}, {}, mongoose.Document<unknown, {}, IRecord, {}, mongoose.DefaultSchemaOptions> & IRecord & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IRecord>;
export default Record;
//# sourceMappingURL=record.models.d.ts.map