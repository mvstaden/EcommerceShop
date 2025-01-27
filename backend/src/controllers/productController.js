import asyncHanlder from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc Fetch All products
//@route Get /api/products
//@access Public
export const getProducts = asyncHanlder(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

//@desc Fetch a products
//@route Get /api/products/:id
//@access Public
export const getProductsById = asyncHanlder(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json(product);
});
