//=================================================================================================================
// DELIVERY CONTROLLER
//=================================================================================================================
// This file handles delivery assignment and management operations
//=================================================================================================================

import { Request, Response } from 'express';
import { DeliveryBoy } from '../models/deliveryBoy.model';



const createDeliveryBoy = async (req: Request, res: Response) => {
    try{
        const deliveryBoy = new DeliveryBoy(req.body);
        await deliveryBoy.save();
        res.status(201).json(deliveryBoy);
    }catch (error) {
        res.status(400).json({ error })
    }
};

export const deliveryBoyController= {
    createDeliveryBoy
}