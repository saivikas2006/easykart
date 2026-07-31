import express from "express";

import {
  addToWishlist,
  getWishlist,
  removeWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();

// Test Route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Wishlist API Working ✅",
  });
});

router.post("/", addToWishlist);

router.get("/:userId", getWishlist);

router.delete("/:id", removeWishlist);

export default router;