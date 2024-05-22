export type ProductVariant = {
    type: string;
    value: string;
};

export type ProductInventory = {
    quantity: number;
    inStock: boolean;
};

export type IProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: ProductVariant[];
    inventory: ProductInventory;
};

export default IProduct;
