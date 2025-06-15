//=================================================================================================================
// DELIVERY BOY ROUTES
//=================================================================================================================
// This file handles the routes for delivery assignment and management endpoints
//=================================================================================================================



import express from 'express';
import { deliveryBoyController } from '../controllers/deliveryBoy.controller';

const router = express.Router();

// Route to create a new delivery boy
router.post('/create', deliveryBoyController.createDeliveryBoy);


export default router;