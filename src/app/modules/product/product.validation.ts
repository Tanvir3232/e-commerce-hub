import { z } from "zod";

//Custom function to capitalize each word
const capitalizeWords = (str: string) => {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

const productVariantValidationSchema = z.object({
    type: z.string().nonempty("Type is required"),
    value: z.string().nonempty("Value is required"),
});

const productInventoryValidationSchema = z.object({
    quantity: z.number().min(0, "Quantity must be a non-negative number"),
    inStock: z.boolean(),
});

const productValidationSchema = z.object({
    name: z.string()
        .nonempty("Name is required")
        .trim()
        .min(6, 'Name must be at least 6 characters')
        .max(20, 'Name must be at most 20 characters')
        .transform(capitalizeWords),
    description: z.string().nonempty("Description is required"),
    price: z.number().positive("Price must be a positive number"),
    category: z.string().nonempty("Category is required"),
    tags: z.array(z.string()).nonempty("Tags are required"),
    variants: z.array(productVariantValidationSchema).nonempty("Variants are required"),
    inventory: productInventoryValidationSchema
})
export default productValidationSchema;
