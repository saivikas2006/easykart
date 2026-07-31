import Wishlist from "../models/Wishlist.js";

// Add to Wishlist
export const addToWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const existing = await Wishlist.findOne({
      user: userId,
      product: productId,
    });

    if (existing) {
      return res.json({
        success: true,
        message: "Already in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user: userId,
      product: productId,
    });

    res.status(201).json({
      success: true,
      message: "Added to Wishlist",
      wishlist,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get Wishlist
export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({
      user: req.params.userId,
    }).populate("product");

    res.json({
      success: true,
      wishlist,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Remove Wishlist Item
export const removeWishlist = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Removed from Wishlist",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};