import mongoose, { Document, Schema } from "mongoose";
export var Role;
(function (Role) {
    Role["VIEWER"] = "viewer";
    Role["ANALYST"] = "analyst";
    Role["ADMMIN"] = "admin";
})(Role || (Role = {}));
;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.VIEWER
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=user.models.js.map