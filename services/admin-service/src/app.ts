// Admin Service Application - Express app configuration and middleware setup
// src/app.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/health", (_req, res) => {
  res.status(200).send("Admin Service is running!");
});

export default app;
