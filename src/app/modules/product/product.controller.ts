import { Request, Response } from "express";
import { ZodError } from "zod";
import { ProductSevices } from "./product.service";
import productValidationSchema from "./product.validation";
const addProduct = async (req: Request, res: Response) => {
    try {

        const product = req.body;
        const validateProductData = productValidationSchema.parse(product);
        const result = await ProductSevices.addProductIntoDB(validateProductData);
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
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductSevices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        })
    }
}
export const ProductControllers = {
    addProduct,
    getAllProducts,
}