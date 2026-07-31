import Cart from "../models/Cart.js";
import Order from "../models/Order.js";

export const checkout = async (req, res) => {
  try {
    const {
      userId,
      user,
      shippingAddress,
      paymentMethod,
      coupon,
      discount = 0,
      totalAmount,
    } = req.body;

    // Support both userId and user
    const currentUserId = userId || user;

    if (!currentUserId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const cartItems = await Cart.find({
      user: currentUserId,
    }).populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    const items = cartItems.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
    }));

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const shippingCharge = subtotal >= 999 ? 0 : 99;
    const gst = Math.round(subtotal * 0.18);

    const finalDiscount = Number(discount) || 0;

    const finalTotal =
      totalAmount ??
      subtotal + shippingCharge + gst - finalDiscount;

    const orderNumber =
      "EK" + Date.now().toString().slice(-8);

    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(
      estimatedDelivery.getDate() + 5
    );

    const order = await Order.create({
      orderNumber,
      user: currentUserId,
      items,
      shippingAddress,
      paymentMethod,
      subtotal,
      shippingCharge,
      gst,
      discount: finalDiscount,
      totalAmount: finalTotal,
      coupon,
      estimatedDelivery,
    });

    await Cart.deleteMany({
      user: currentUserId,
    });

    res.status(201).json({
      success: true,
      message: "Checkout Successful",
      order,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};