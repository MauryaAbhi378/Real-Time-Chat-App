import mongoose, { Document, Schema } from "mongoose";

export interface UserType extends Document {
    name: string;
    email: string
}

const userSchema: Schema<UserType> = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

export const User = mongoose.model<UserType>("User", userSchema)