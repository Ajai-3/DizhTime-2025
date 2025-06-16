// Main entry file - application startup and server configuration

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.config";
// import healthRouter from "./routes/health";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// app.use("/health", healthRouter);

export default app;
