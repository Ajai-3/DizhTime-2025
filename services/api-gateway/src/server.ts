//=================================================================================================================
// API GATEWAY SERVER
//=================================================================================================================
// This is the main server entry point for the API Gateway
//=================================================================================================================

import app from "./app";
import http from "http"

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
  console.log(`🌐 Gateway URL: http://localhost:${PORT}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || "development"}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 API Gateway shutting down gracefully...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 API Gateway shutting down gracefully...");
  process.exit(0);
});
