import express from "express";

import {
  placeOrder,
  getUserOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";
const router = express.Router();

// Test Route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Orders API Working ✅",
  });
});



router.post("/", placeOrder);

router.get("/admin/all", getAllOrders);

router.put("/admin/:id", updateOrderStatus);

router.delete("/admin/:id", deleteOrder);

router.get("/user/:userId", getUserOrders);

router.get("/:id", getOrderById);


export default router;