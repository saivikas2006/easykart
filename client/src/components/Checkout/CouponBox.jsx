import { useState } from "react";
import { TicketPercent, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";

const coupons = {
  EASY100: 100,
  SAVE10: 10,
  WELCOME200: 200,

  // Developer testing coupon
  FREE100: "FULL",
};

const CouponBox = () => {
  const { subtotal, shipping, gst, setCoupon, coupon: appliedCoupon } =
    useCart();

  const [couponCode, setCouponCode] = useState("");

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      toast.error("Please enter a coupon code");
      return;
    }

    if (!coupons[code]) {
      toast.error("Invalid coupon code");
      return;
    }

    // 100% Discount
    if (coupons[code] === "FULL") {
      const fullDiscount = subtotal + shipping + gst;

      setCoupon({
        code,
        amount: fullDiscount,
      });

      toast.success("🎉 100% Discount Applied!");
      return;
    }

    // Percentage Discount
    if (code === "SAVE10") {
      const amount = Math.round(subtotal * 0.1);

      setCoupon({
        code,
        amount,
      });

      toast.success("10% Discount Applied");
      return;
    }

    // Flat Discount
    setCoupon({
      code,
      amount: coupons[code],
    });

    toast.success(`${code} Applied Successfully`);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-blue-100 p-3">
          <TicketPercent className="text-blue-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Coupons & Offers
          </h2>

          <p className="text-slate-500">
            Apply a coupon to save more.
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
        />

        <button
          onClick={applyCoupon}
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          Apply
        </button>
      </div>

      {/* Applied Coupon */}
      {appliedCoupon && (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">
          <CheckCircle2 className="text-green-600" />

          <div>
            <p className="font-semibold text-green-700">
              {appliedCoupon.code} Applied Successfully
            </p>

            <p className="text-sm text-green-600">
              You saved ₹{appliedCoupon.amount}
            </p>
          </div>
        </div>
      )}

      {/* Available Coupons */}
      <div className="mt-8 rounded-2xl bg-slate-50 p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          Available Coupons
        </h3>

        <div className="space-y-3">
          <div className="rounded-xl border border-dashed border-blue-300 bg-white p-4">
            <p className="font-bold text-blue-700">EASY100</p>
            <p className="text-sm text-slate-500">
              Flat ₹100 off on orders above ₹999
            </p>
          </div>

          <div className="rounded-xl border border-dashed border-green-300 bg-white p-4">
            <p className="font-bold text-green-700">SAVE10</p>
            <p className="text-sm text-slate-500">
              10% off on your order
            </p>
          </div>

          <div className="rounded-xl border border-dashed border-orange-300 bg-white p-4">
            <p className="font-bold text-orange-600">WELCOME200</p>
            <p className="text-sm text-slate-500">
              ₹200 off for first-time customers
            </p>
          </div>

          <div className="rounded-xl border border-dashed border-purple-300 bg-white p-4">
            <p className="font-bold text-purple-700">FREE100</p>
            <p className="text-sm text-slate-500">
              🎁 Developer Testing Coupon (100% Discount)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponBox;