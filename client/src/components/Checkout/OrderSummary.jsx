import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useCart } from "../../context/CartContext";

const OrderSummary = () => {
  const {
  cartItems,
  subtotal,
  shipping,
  gst,
  discount,
  total,
  coupon,
  itemCount,
  shippingAddress,
  paymentMethod,
  clearCart,
  setCoupon,
} = useCart();

  const navigate = useNavigate();

const handlePlaceOrder = async () => {
  if (!shippingAddress) {
    toast.error("Please save your address first");
    return;
  }

  if (!paymentMethod) {
    toast.error("Please select a payment method");
    return;
  }

  if (cartItems.length === 0) {
    toast.error("Cart is empty");
    return;
  }

  const user = JSON.parse(localStorage.getItem("easykart-user"));

  if (!user) {
    toast.error("Please login first");
    return;
  }

  try {
    const orderData = {
      user: user._id || user.id,

      items: cartItems.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      })),

      shippingAddress,
      paymentMethod,

      subtotal,
      shipping,
      gst,

      coupon,
      discount,

      totalAmount: total,
    };

    const { data } = await axios.post(
      "https://easykart-slu7.onrender.com/api/checkout",
      orderData
    );

    toast.success(data.message || "Order Placed Successfully");

    await clearCart();

    setCoupon(null);

    navigate("/order-success", {
      state: {
        order: data.order,
      },
    });

  } catch (error) {
    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Checkout Failed"
    );
  }
};

  return (
    <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Order Summary
        </h2>

        <p className="mt-2 text-slate-500">
          {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {/* Products */}
      <div className="max-h-80 space-y-4 overflow-y-auto">
        {cartItems.map((item) => {
          const product = item.product;

          return (
            <div
              key={item._id}
              className="flex items-center gap-4 border-b border-slate-100 pb-4"
            >
              <img
                src={product?.images?.[0]}
                alt={product?.name}
                className="h-16 w-16 rounded-xl border object-cover"
              />

              <div className="flex-1">
                <h4 className="line-clamp-2 font-semibold text-slate-800">
                  {product?.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <span className="font-bold text-slate-900">
                ₹
                {(
                  Number(product?.price || 0) *
                  item.quantity
                ).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Price Details */}
      <div className="mt-8 space-y-4 border-t border-dashed pt-6">

        <div className="flex justify-between">
          <span className="text-slate-600">
            Subtotal
          </span>

          <span className="font-semibold">
            ₹{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">
            Shipping
          </span>

          <span
            className={
              shipping === 0
                ? "font-semibold text-green-600"
                : "font-semibold"
            }
          >
            {shipping === 0 ? "FREE" : `₹${shipping}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">
            GST (18%)
          </span>

          <span className="font-semibold">
            ₹{gst.toLocaleString()}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>

            <span>
              -₹{discount.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-5 text-white">
        <span className="text-lg font-semibold">
          Total
        </span>

        <span className="text-3xl font-bold">
          ₹{Math.max(0, total).toLocaleString()}
        </span>
      </div>

      {/* Trust Badges */}
      <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-4">

        <div className="flex items-center gap-3">
          <Truck
            size={20}
            className="text-blue-600"
          />

          <span className="text-sm text-slate-700">
            Free delivery on eligible orders
          </span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck
            size={20}
            className="text-green-600"
          />

          <span className="text-sm text-slate-700">
            Secure SSL encrypted payment
          </span>
        </div>

      </div>

      {/* Button */}
      <button
        onClick={handlePlaceOrder}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
      >
        Place Order
        <ArrowRight size={22} />
      </button>

      <Link
        to="/cart"
        className="mt-4 block text-center text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to Cart
      </Link>

    </div>
  );
};

export default OrderSummary;