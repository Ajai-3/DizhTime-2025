//=================================================================================================================
// DATABASE CONFIGURATION OF THE DELIVERY LOG
//=================================================================================================================
// This file contains database connection for the delivery log model.
//=================================================================================================================



import mongoose from 'mongoose';

const deliveryLogSchema = new mongoose.Schema({
  deliveryBoyId: { type: String, required: true },
  deliveryTime: { type: Date, default: Date.now },
  status: { type: String, enum: ['Pending', 'Completed'], required: true }
});

export const DeliveryLog = mongoose.model('DeliveryLog', deliveryLogSchema);