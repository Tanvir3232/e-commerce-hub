
import express from "express";
import { OrderControllers } from "./order.controller";


const router = express.Router();

router.post("/", OrderControllers.addOrder);

export const OrderRoutes = router;
