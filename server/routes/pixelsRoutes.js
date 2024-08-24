import express from "express"
import * as dotenv from "dotenv"
import { OpenAI } from "openai";

// import { PostSchema } from "../models/post.js"

dotenv.config();

export const router = express.Router()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/')
.get((req, res) => {
    res.send("Hello from AI")
})

.post(async(req, res) => {
    try{
        const {prompt} = req.body

        const aiResponse = await openai.images.generate({
            prompt,
            n:1,
            size:"1024x1024",
            quality:"standard",
            response_format: "b64_json"
          })

          const image = aiResponse.data.data[0].b64_json;
          res.status(200).json({photo: image})
    }catch(err){
        console.error(`Error - ${err.message}\n${err}`)
        res.status(500).send(err?.message)
    }
})
