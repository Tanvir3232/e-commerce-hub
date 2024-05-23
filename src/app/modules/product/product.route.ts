import express from "express";
import { ProductControllers } from "./product.controller";
const router = express.Router();
router.post("/", ProductControllers.addProduct)
router.get("/", ProductControllers.getAllProducts)
router.get("/:productId", ProductControllers.getSingleProduct)
export const ProductRoutes = router;