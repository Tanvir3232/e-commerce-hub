
import { isValidObjectId } from "mongoose";
import TProduct from "./product.interface";
import ProductModel from "./product.model";

const addProductIntoDB = async (product: TProduct) => {
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
const deleteProductFromDB = async (id: string) => {
    if (!isValidObjectId(id)) {
        throw new Error("Invalid product ID");
    }
    const result = await ProductModel.deleteOne({ _id: id });
    return result;
}
const updateProductIntoDB = async (productId: string, updatedProduct: TProduct) => {
    if (!isValidObjectId(productId)) {
        throw new Error("Invalid product ID");
    }
    const result = await ProductModel.findByIdAndUpdate(
        productId,
        { $set: updatedProduct },
        { new: true, runValidators: true }
    );
    return result;
};
const searchProducts = async (searchTerm: string): Promise<TProduct[]> => {
    const regex = new RegExp(searchTerm, 'i');
    const products = await ProductModel.find({
        $or: [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { category: { $regex: regex } },
        ]
    });
    return products;
};

export const ProductSevices = {
    addProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    deleteProductFromDB,
    updateProductIntoDB,
    searchProducts
}