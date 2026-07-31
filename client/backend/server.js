import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import settingRoutes from "./routes/settingRoutes.js";
dotenv.config();

const app = express();

// =====================================
// Connect MongoDB
// =====================================
connectDB();

// =====================================
// Middlewares
// =====================================
const allowedOrigins = [
  "http://localhost:5173",
  "https://easykart.vercel.app",
];

if (process.env.CLIENT_URL) {
  allowedOrigins.push(
    ...process.env.CLIENT_URL
      .split(",")
      .map((url) => url.trim())
      .filter(Boolean)
  );
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, curl, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// =====================================
// Home Route
// =====================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 EasyKart Backend is Running Successfully",
  });
});

// =====================================
// API Routes
// =====================================
app.use("/api/auth", authRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/settings", settingRoutes);
// =====================================
// 404 Route
// =====================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// =====================================
// Global Error Handler
// =====================================
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// =====================================
// Start Server
// =====================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});