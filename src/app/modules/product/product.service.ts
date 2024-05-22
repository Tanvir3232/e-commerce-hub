import ProductModel from "../product.model";
import IProduct from "./product.interface";

const addProductIntoDB = async (product: IProduct) => {
    const result = await ProductModel.create(product);
    return result;
}
export const ProductSevices = {
    addProductIntoDB,
}