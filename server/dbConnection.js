import mongoose from "mongoose";

export const connectDB = (url) => {
    // For search functionality
    mongoose.set("strictQuery", true)

    mongoose.connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.error("MongoDB refused to connect\n", err))
}