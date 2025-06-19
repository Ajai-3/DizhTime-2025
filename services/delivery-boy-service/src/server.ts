import http from "http";
import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/database.config";

dotenv.config();

const PORT = process.env.PORT || 3003;
const server = http.createServer(app);

// Connect to database
connectDB();

server.listen(PORT, () => {
  console.log(`Delivery Boy Service running on port ${PORT}`);
});
