import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

import toast from "react-hot-toast";

import { useAuth } from "./AuthContext";

import {
  getCart,
  addToCart as addToCartApi,
  removeFromCart as removeFromCartApi,
} from "../api/cartApi";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const { user } = useAuth();

  /* ---------------- CART ---------------- */

  const [cartItems, setCartItems] = useState([]);

  /* ---------------- CHECKOUT ---------------- */

  const [shippingAddress, setShippingAddress] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [coupon, setCoupon] = useState(null);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("easykart-orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  /* ---------------- LOAD CART ---------------- */

  useEffect(() => {

    const loadCart = async () => {

      if (!user || user.guest) {
        setCartItems([]);
        return;
      }

      try {

        const cart = await getCart(user.id);

        setCartItems(cart);

      } catch (err) {

        console.log(err);

      }

    };

    loadCart();

  }, [user]);

  /* ---------------- LOCAL STORAGE ---------------- */

  useEffect(() => {

    localStorage.setItem(
      "easykart-orders",
      JSON.stringify(orders)
    );

  }, [orders]);

  /* ---------------- CART FUNCTIONS ---------------- */

  const addToCart = async (product) => {

    if (!user || user.guest) {

      toast.error("Please login first");

      return;

    }

    try {

      await addToCartApi({

        userId: user.id,

        productId: product._id,

        quantity: 1,

      });

      const cart = await getCart(user.id);

      setCartItems(cart);

      toast.success(`${product.name} added to cart`);

    } catch (err) {

      console.log(err);

      toast.error("Failed to add to cart");

    }

  };

  const removeFromCart = async (cartId) => {

    try {

      await removeFromCartApi(cartId);

      const cart = await getCart(user.id);

      setCartItems(cart);

      toast.success("Removed from cart");

    } catch (err) {

      console.log(err);

      toast.error("Failed");

    }

  };
const increaseQuantity = async (cartId) => {
  try {
    const item = cartItems.find(
      (cart) => cart._id === cartId
    );

    if (!item) return;

    await addToCartApi({
      userId: user.id,
      productId: item.product._id,
      quantity: 1,
    });

    const cart = await getCart(user.id);

    setCartItems(cart);

  } catch (error) {
    console.log(error);
  }
};

const decreaseQuantity = async (cartId) => {

  try {

    const item = cartItems.find(
      (cart) => cart._id === cartId
    );

    if (!item) return;

    if (item.quantity <= 1) {

      await removeFromCartApi(cartId);

    } else {

      await fetch(
        `http://localhost:5000/api/cart/${cartId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: item.quantity - 1,
          }),
        }
      );

    }

    const cart = await getCart(user.id);

    setCartItems(cart);

  } catch (error) {

    console.log(error);

  }

};

const clearCart = async () => {

  try {

    for (const item of cartItems) {

      await removeFromCartApi(item._id);

    }

    setCartItems([]);

    toast.success("Cart Cleared");

  } catch (error) {

    console.log(error);

  }

};

  /* ---------------- PRICE CALCULATIONS ---------------- */

 const subtotal = useMemo(() => {

  return cartItems.reduce(

    (total, item) =>

      total +

      (item.product?.price || 0) *

      item.quantity,

    0

  );

}, [cartItems]);

  const itemCount = useMemo(() => {

  return cartItems.reduce(

    (count, item) =>

      count + item.quantity,

    0

  );

}, [cartItems]);

  const shipping =
    subtotal >= 999 || subtotal === 0
      ? 0
      : 99;

  const gst = Math.round(subtotal * 0.18);

  const discount = coupon?.amount || 0;

  const total =
    subtotal +
    shipping +
    gst -
    discount;

  /* ---------------- ORDER ---------------- */

  const placeOrder = () => {
    toast.success("Proceeding to Checkout");

    if (cartItems.length === 0) {
      return {
        success: false,
        message: "Your cart is empty.",
      };
    }

    const order = {
      id: `EK${Date.now()}`,
      items: cartItems,
      subtotal,
      shipping,
      gst,
      discount,
      total,
      paymentMethod,
      coupon,
      shippingAddress,
      status: "Pending",
      orderedAt: new Date().toISOString(),
    };

    setOrders((prev) => [order, ...prev]);

    setCartItems([]);

    setCoupon(null);

    toast.success("Order placed successfully!");

    return {
      success: true,
      order,
    };
  };

  /* ---------------- CONTEXT ---------------- */

const value = {
  cartItems,

  addToCart,
  removeFromCart,

  increaseQuantity,
  decreaseQuantity,

  clearCart,

  subtotal,
  shipping,
  gst,
  discount,
  total,
  itemCount,

  shippingAddress,
  setShippingAddress,

  paymentMethod,
  setPaymentMethod,

  coupon,
  setCoupon,

  orders,

  placeOrder,
};

 return (
  <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);