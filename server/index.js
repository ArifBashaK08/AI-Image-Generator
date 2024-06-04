import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import { connectDB } from "./dbConnection.js"
import {postRouter} from "./routes/postRoutes.js"
import {router} from "./routes/pixelsRoutes.js"

//Allows us to pull our env variables
dotenv.config();

const app = express()
const port = 8080 
const url = process.env.MONGODB_URL

app.use(cors())
app.use(express.json({ limit: "50mb" }))

connectDB(url)

app.use("/api/v1/post", postRouter)
app.use("/api/v1/pixels", router)

app.get("/", async (req, res) => {
    res.send(`<h1>Hello</h1>`)
})

app.listen(port, () => console.log(`Server is running on port: ${port}`))
