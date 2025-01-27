import express from "express";
import "dotenv/config";
import products from "./data/products.js";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/mongoDB.js";
import productRoutes from "./routes/productRoutes.js";
const port = process.env.PORT || 5001;
const app = express();

app.use(cors());

app.use("/api", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  connectDB();
  console.log(`Server runnning on localhost:${port}`);
});
