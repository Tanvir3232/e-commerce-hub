
import IProduct from "./product.interface";
import ProductModel from "./product.model";

const addProductIntoDB = async (product: IProduct) => {
    const result = await ProductModel.create(product);
    return result;
}
export const ProductSevices = {
    addProductIntoDB,
}