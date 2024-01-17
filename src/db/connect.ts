import mongoose from "mongoose";

// const mongo_uri = process.env.MONGO_DB_URI || "haaaa";
// console.log(mongo_uri);

export const connectToDb = async (mongo_uri: string) => {
    try {
        await mongoose.connect(mongo_uri);
        console.log("DB connected successfully");

    } catch (error) {
        console.log("Error while connecting", error);

    }
}