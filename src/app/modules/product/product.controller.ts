import { Request, Response } from "express";
import { ProductSevices } from "./product.service";

const addProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const result = await ProductSevices.addProductIntoDB(product);
        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Some think went wrong!",
            error: error
        })
    }
}
export const ProductControllers = {
    addProduct
}