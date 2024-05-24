import { Request, Response } from "express";
import { ZodError } from "zod";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const addOrder = async (req: Request, res: Response) => {
    try {

        const order = req.body;
        const validateOrderData = orderValidationSchema.parse(order);
        if (!validateOrderData.email || !validateOrderData.productId || !validateOrderData.price || !validateOrderData.quantity) {
            throw new Error("All fields are required");
        }
        const result = await OrderServices.addOrderIntoDB(validateOrderData);
        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: (err instanceof ZodError ? err.errors[0].message : err.message) || "Something went wrong",
            error: err
        });
    }
}

export const OrderControllers = {
    addOrder
}