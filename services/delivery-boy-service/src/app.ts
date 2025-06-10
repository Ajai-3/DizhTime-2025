// Main entry file - delivery boy service startup and server configuration
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
export default app;