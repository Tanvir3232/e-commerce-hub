
import { isValidObjectId } from "mongoose";
import IProduct from "./product.interface";
import ProductModel from "./product.model";

const addProductIntoDB = async (product: IProduct) => {
    const result = await ProductModel.create(product);
    return result;
}
const getAllProductsFromDB = async () => {
    const products = await ProductModel.find();
    return products;
}
const getSingleProductFromDB = async (id: string) => {
    if (!isValidObjectId(id)) {
        throw new Error("Invalid product ID");
    }
    const result = await ProductModel.findOne({ _id: id });
    return result;
}
export const ProductSevices = {
    addProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB
}