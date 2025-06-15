// Main entry file - delivery boy service startup and server configuration
import express from 'express';
import dotenv from 'dotenv';
import deliveryBoyRoutes from './routes/deliveryBoy.route';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', deliveryBoyRoutes);


export default app;