import mongoose from "mongoose";
import Record from "../models/record.models.js";
export const createRecord = async (req, res) => {
    try {
        const record = await Record.create({
            ...req.body,
            createdBy: new mongoose.Types.ObjectId(req.user.id),
        });
        res.status(201).json(record);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating record" });
    }
};
export const getRecords = async (req, res) => {
    try {
        const { type, category, startDate, endDate, page = 1, limit = 10 } = req.query;
        const filter = {
            createdBy: new mongoose.Types.ObjectId(req.user.id),
            isDeleted: false,
        };
        if (type)
            filter.type = type;
        if (category)
            filter.category = category;
        if (startDate || endDate) {
            filter.date = {};
            if (startDate)
                filter.date.$gte = new Date(startDate);
            if (endDate)
                filter.date.$lte = new Date(endDate); // FIXED
        }
        const records = await Record.find(filter)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .sort({ date: -1 });
        const total = await Record.countDocuments(filter);
        res.json({
            total,
            page: Number(page),
            records,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error while fetching records" });
    }
};
export const getRecordById = async (req, res) => {
    try {
        const id = req.params.id;
        const record = await Record.findOne({
            _id: new mongoose.Types.ObjectId(id),
            createdBy: new mongoose.Types.ObjectId(req.user.id),
            isDeleted: false,
        });
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        res.json(record);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching record" });
    }
};
export const updateRecord = async (req, res) => {
    try {
        const id = req.params.id;
        const record = await Record.findOneAndUpdate({
            _id: new mongoose.Types.ObjectId(id),
            createdBy: new mongoose.Types.ObjectId(req.user.id),
            isDeleted: false
        }, req.body, { new: true });
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        res.json(record);
    }
    catch (error) {
        res.status(500).json({ message: "Error updationg record!!" });
    }
};
export const deleteRecord = async (req, res) => {
    try {
        const id = req.params.id;
        const record = await Record.findOneAndUpdate({
            _id: new mongoose.Types.ObjectId(id),
            createdBy: new mongoose.Types.ObjectId(req.user.id),
        }, { isDeleted: true }, { new: true });
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        res.json({ message: "Record deleted sucessfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error While deleting the Record" });
    }
};
//# sourceMappingURL=record.controllers.js.map