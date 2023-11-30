import express from 'express'
import mongoose from "mongoose";
import {config} from "dotenv";
config()
import tickersRouter from "./routes/tickersRouter.js";
import quotesRouter from "./routes/quotesRouter.js";
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL

app.use(express.json())
app.use(cors());
app.use('/api', tickersRouter)
app.use('/api', quotesRouter)


async function start() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.error(e)
    }
}

start()

