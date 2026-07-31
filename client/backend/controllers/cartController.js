import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// =======================================
// Add to Cart
// =======================================
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const existing = await Cart.findOne({
      user: userId,
      product: productId,
    });

    if (existing) {
      existing.quantity += quantity || 1;
      await existing.save();

      return res.json({
        success: true,
        message: "Cart Updated",
        cart: existing,
      });
    }

    const cart = await Cart.create({
      user: userId,
      product: productId,
      quantity: quantity || 1,
    });

    res.status(201).json({
      success: true,
      message: "Added to Cart",
      cart,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================================
// Get Cart
// =======================================
export const getCart = async (req, res) => {
  try {

    const cart = await Cart.find({
      user: req.params.userId,
    }).populate("product");

    res.json({
      success: true,
      cart,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================================
// Update Quantity
// =======================================
export const updateCartQuantity = async (req, res) => {
  try {

    const { quantity } = req.body;

    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    cart.quantity = quantity;

    await cart.save();

    res.json({
      success: true,
      message: "Quantity Updated",
      cart,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================================
// Remove Item
// =======================================
export const removeCartItem = async (req, res) => {
  try {

    const cart = await Cart.findByIdAndDelete(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.json({
      success: true,
      message: "Item Removed",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};