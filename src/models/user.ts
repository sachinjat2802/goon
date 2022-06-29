 import mongoose, { Schema,Document } from "mongoose";

export interface User {
	 name: string;
    email: string;
    role: string;
}

export interface UserModel extends User, Document { }
const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
        date: { type: Date },

    },
    {
        versionKey: false
    }
);

export default mongoose.model<UserModel>("user", UserSchema);

