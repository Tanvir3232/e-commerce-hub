
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
export const ProductSevices = {
    addProductIntoDB,
    getAllProductsFromDB,
}