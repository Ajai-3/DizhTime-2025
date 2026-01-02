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
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
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
        enum: ['available', 'busy', 'offline', 'assigned', 'picked', 'on-the-way', 'delivered', 'cancelled'],
        default: 'available'
    },
    remarks: String, 
    pickupTime: Date,
    deliveredTime: Date,
    liveLocation: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], 
            default: [0, 0]
        }
    }
}, {
    timestamps: true
});

export const DeliveryBoy = mongoose.model('DeliveryBoy', deliveryBoySchema);


