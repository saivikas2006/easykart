import express from "express";

import {
  getProducts,
  getProduct,
  getProductById,
  getFeaturedProducts,
  getProductsByCategory,
  searchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// =====================================
// Public Routes
// =====================================

// Get all products
router.get("/", getProducts);

// Get featured products
router.get("/featured", getFeaturedProducts);

// Search products
router.get("/search", searchProducts);

// Get products by category
router.get("/category/:category", getProductsByCategory);

// Get product by MongoDB ID (Must be before /:slug)
router.get("/id/:id", getProductById);

// Get single product by slug
router.get("/:slug", getProduct);

// =====================================
// Admin Routes
// =====================================

// Create product
router.post("/", createProduct);

// Update product
router.put("/:id", updateProduct);

// Delete product
router.delete("/:id", deleteProduct);

export default router;