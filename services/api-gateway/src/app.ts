//=================================================================================================================
// API GATEWAY APPLICATION
//=================================================================================================================
// This is the main API Gateway application that routes requests to microservices
//=================================================================================================================

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API Gateway is running",
    timestamp: new Date().toISOString(),
    service: "api-gateway",
  });
});

// Routes
app.get("/", (_req, res) => {
  res.json({
    message: "DizhTime API Gateway",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      users: "/api/users",
      restaurants: "/api/restaurants",
      orders: "/api/orders",
      delivery: "/api/delivery",
      admin: "/api/admin",
    },
  });
});

// TODO: Add proxy routes to microservices
// app.use('/api/users', userServiceProxy);
// app.use('/api/restaurants', restaurantServiceProxy);
// app.use('/api/orders', orderServiceProxy);
// app.use('/api/delivery', deliveryServiceProxy);
// app.use('/api/admin', adminServiceProxy);

export default app;
