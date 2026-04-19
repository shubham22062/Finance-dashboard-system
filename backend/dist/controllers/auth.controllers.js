import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utlis/jwt.js";
export const Register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User is already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });
        res.status(201).json({
            token: generateToken(user),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentails" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.json({
            token: generateToken(user),
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
                isActive: user.isActive
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
//# sourceMappingURL=auth.controllers.js.map