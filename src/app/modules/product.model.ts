import { Schema, model } from 'mongoose';
import IProduct, { ProductInventory, ProductVariant } from './product/product.interface';
const productVarientSchema = new Schema<ProductVariant>(
    {
        type: { type: String, required: true },
        value: { type: String, required: true },
    },
    { _id: false }
)
const productInventorySchema = new Schema<ProductInventory>(
    {
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: true }
    },
    { _id: false }
)
const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [productVarientSchema], required: true },
    inventory: { type: productInventorySchema, required: true }
})
const ProductModel = model<IProduct>('products', productSchema);
export default ProductModel;