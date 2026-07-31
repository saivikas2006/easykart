import express from "express";
import { checkout } from "../controllers/checkoutController.js";

const router = express.Router();

// Test Route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Checkout API Working ✅",
  });
});

// Checkout
router.post("/", checkout);

export default router;