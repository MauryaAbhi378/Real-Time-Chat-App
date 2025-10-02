import express from "express"
import dotenv from"dotenv"
import connectDB from "./config/connectDB.js"

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})