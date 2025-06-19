// ===============================================================================
// Admin Service Server - Main Entry Point
// ===============================================================================
// Purpose: Server startup and configuration for admin service
// Author: DizhTime Team <dizhtime@gmail.com>
// Lead: Ajai
// ===============================================================================

import http from "http";
import app from "./app";
import { connectDB } from "./config/database.config";

const PORT = process.env.PORT;
const server = http.createServer(app)

connectDB();
server.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
})