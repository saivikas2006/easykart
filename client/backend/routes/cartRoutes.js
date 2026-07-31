import express from "express";

import {
  addToCart,
  getCart,
  removeCartItem,
} from "../controllers/cartController.js";

const router = express.Router();


router.post("/", addToCart);

router.get("/:userId", getCart);

router.delete("/:id", removeCartItem);

export default router;