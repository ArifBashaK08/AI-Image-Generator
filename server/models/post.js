import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
})

export const PostSchema = mongoose.model("Posts", Post)