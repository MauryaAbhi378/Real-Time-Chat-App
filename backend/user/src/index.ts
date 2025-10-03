import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import { Redis } from "@upstash/redis";

dotenv.config();

connectDB();

export const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

(async () => {
  try {
    const pong = await redisClient.ping();
    console.log("Connected to Redis:", pong);
  } catch (err) {
    console.error("Redis connection error:", err);
  }
})();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
