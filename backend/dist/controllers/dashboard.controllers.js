import mongoose from "mongoose";
import Record from "../models/record.models.js";
export const getSummary = async (req, res) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = new mongoose.Types.ObjectId(req.user.id);
        const result = await Record.aggregate([
            {
                $match: {
                    createdBy: userId,
                    isDeleted: false
                }
            },
            {
                $group: {
                    _id: "$type",
                    total: { $sum: "$amount" }
                }
            }
        ]);
        let income = 0;
        let expense = 0;
        result.forEach((item) => {
            if (item._id === "income")
                income = item.total;
            if (item._id === "expense")
                expense = item.total;
        });
        res.json({
            totalIncome: income,
            totalExpense: expense,
            netBalance: income - expense
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching summary" });
    }
};
export const getCategoryStats = async (req, res) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = new mongoose.Types.ObjectId(req.user.id);
        const data = await Record.aggregate([
            {
                $match: {
                    createdBy: userId,
                    isDeleted: false
                }
            },
            {
                $group: {
                    _id: "$category",
                    total: { $sum: "$amount" }
                }
            },
            {
                $sort: { total: -1 }
            }
        ]);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching category stats" });
    }
};
export const getMonthlyTrends = async (req, res) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = new mongoose.Types.ObjectId(req.user.id);
        const data = await Record.aggregate([
            {
                $match: {
                    createdBy: userId,
                    isDeleted: false
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    },
                    total: { $sum: "$amount" }
                }
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 }
            }
        ]);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching trends" });
    }
};
export const getRecentRecords = async (req, res) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const records = await Record.find({
            createdBy: req.user.id,
            isDeleted: false
        })
            .sort({ createdAt: -1 })
            .limit(5);
        res.json(records);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching recent records" });
    }
};
//# sourceMappingURL=dashboard.controllers.js.map