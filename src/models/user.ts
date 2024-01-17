import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user: {
        type: String
    }
})

export const user = mongoose.model("users", userSchema);