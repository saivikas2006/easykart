import { ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { subtotal } = useCart();

  const shipping = subtotal >= 999 ? 0 : 99;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + gst;

  return (
    <aside className="sticky top-24 h-fit rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-800">
        Order Summary
      </h2>

      {/* Price Details */}
      <div className="mt-6 space-y-4">

        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>

          <span>
            {shipping === 0 ? (
              <span className="font-semibold text-green-600">
                FREE
              </span>
            ) : (
              `₹${shipping}`
            )}
          </span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>GST (18%)</span>
          <span>₹{gst.toLocaleString()}</span>
        </div>

      </div>

      <hr className="my-6" />

      {/* Total */}
      <div className="flex justify-between text-2xl font-bold text-slate-900">
        <span>Total</span>
        <span>₹{total.toLocaleString()}</span>
      </div>

      {/* Checkout Button */}
      <Link
        to="/checkout"
        className="mt-8 block rounded-2xl bg-blue-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Proceed to Checkout
      </Link>

      {/* Benefits */}
      <div className="mt-8 space-y-4 rounded-2xl bg-slate-50 p-5">

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-green-600" />
          <span className="text-sm">
            100% Secure Payments
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Truck className="text-blue-600" />
          <span className="text-sm">
            Easy Returns within 7 Days
          </span>
        </div>

      </div>

      {/* Free Delivery Progress */}
      {shipping !== 0 && (
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-4">

          <p className="text-sm text-slate-700">
            Add
            <span className="font-bold text-blue-700">
              {" "}₹{(999 - subtotal).toLocaleString()}{" "}
            </span>
            more to get
            <span className="font-bold text-green-600">
              {" "}FREE Delivery 🚚
            </span>
          </p>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${Math.min((subtotal / 999) * 100, 100)}%`,
              }}
            />
          </div>

        </div>
      )}

    </aside>
  );
};

export default CartSummary;