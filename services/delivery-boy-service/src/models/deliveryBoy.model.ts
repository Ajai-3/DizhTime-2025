//=================================================================================================================
// DATABASE CONFIGURATION FOR THE DELIVERY BOY MODEL
//=================================================================================================================
// This file contains database connection settings for delivery boy schema and database operations
//=================================================================================================================
import mongoose from 'mongoose';

const deliveryBoySchema = new mongoose.Schema({
    deliveryBoyId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    assignedArea: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'busy', 'offline'],
        default: 'available'
    }
    }, {
    timestamps: true

})

export const DeliveryBoy = mongoose.model('DeliveryBoy', deliveryBoySchema);

// deliveryBoyId, name, contact, assignedArea, status