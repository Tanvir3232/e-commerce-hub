import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { OrderRoutes } from './app/modules/order/order.route';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();
//Parsers
app.use(express.json())
app.use(cors())

//Application routes
app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRoutes)
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to ecommerce products hub");
})

// Handle invalid paths
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Route not found. Please check the URL and try again."
    });
});

export default app;