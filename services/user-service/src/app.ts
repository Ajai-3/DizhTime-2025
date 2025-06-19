// Main entry file - application startup and server configuration

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.send('Hello world');
    console.log('User server is running...');
})

export default app;
