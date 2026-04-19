import jwt, {} from "jsonwebtoken";
import { decode } from "node:punycode";
export const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Not authorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decoded.id,
            role: decoded.role,
        }; // now properly typed
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
//# sourceMappingURL=auth.middleware.js.map