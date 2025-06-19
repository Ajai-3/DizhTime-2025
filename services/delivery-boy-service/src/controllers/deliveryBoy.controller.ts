//=================================================================================================================
// DELIVERY CONTROLLER
//=================================================================================================================
// This file handles delivery assignment and management operations
//=================================================================================================================

import { Request, Response } from 'express';
import { DeliveryBoy } from '../models/deliveryBoy.model';
import { HttpStatusCode, ResponseHandler } from '../utils/httpStatus';
import { z } from 'zod'; 

// Define validation schema
const deliveryBoySchema = z.object({
    deliveryBoyId: z.string(),
    orderId: z.string(),
    name: z.string(),
    contact: z.string(),
    assignedArea: z.string(),
    status: z.enum(['available', 'busy', 'offline', 'assigned', 'picked', 'on-the-way', 'delivered', 'cancelled']).optional(),
    remarks: z.string().optional(),
    pickupTime: z.date().optional(),
    deliveredTime: z.date().optional(),
    liveLocation: z.object({
        type: z.literal('Point'),
        coordinates: z.array(z.number()).length(2)
    }).optional()
});

const createDeliveryBoy = async (req: Request, res: Response) => {
    try {
      
        const validatedData = deliveryBoySchema.parse(req.body);

     
        const existingDeliveryBoy = await DeliveryBoy.findOne({ 
            deliveryBoyId: validatedData.deliveryBoyId 
        });

        if (existingDeliveryBoy) {
            return res.status(HttpStatusCode.CONFLICT).json(
                ResponseHandler.error(
                    HttpStatusCode.CONFLICT,
                    'Delivery boy with this ID already exists'
                )
            );
        }

      
        const deliveryBoy = new DeliveryBoy(validatedData);
        await deliveryBoy.save();

        
        return res.status(HttpStatusCode.CREATED).json(
            ResponseHandler.success(
                deliveryBoy,
                'Delivery boy created successfully'
            )
        );

    } catch (error) {
        if (error instanceof z.ZodError) {

            return res.status(HttpStatusCode.BAD_REQUEST).json(
                ResponseHandler.error(
                    HttpStatusCode.BAD_REQUEST,
                    'Invalid input data',
                    error.errors
                )
            );
        }

  
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
            ResponseHandler.error(
                HttpStatusCode.INTERNAL_SERVER_ERROR,
                'Failed to create delivery boy',
                error instanceof Error ? error.message : 'Unknown error'
            )
        );
    }
};

export const deliveryBoyController= {
    createDeliveryBoy
}