import { CheckCircle, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const { state } = useLocation();

  const order = state?.order;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-2xl">

        <CheckCircle
          size={90}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-slate-600">
          Thank you for shopping with EasyKart.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-left">

          <div className="flex justify-between py-2">
            <span className="font-medium">
              Order ID
            </span>

            <span className="font-bold">
              {order?._id}
            </span>
          </div>

          <div className="flex justify-between py-2">
            <span className="font-medium">
              Payment
            </span>

            <span>
              {order?.paymentMethod}
            </span>
          </div>

          <div className="flex justify-between py-2">
            <span className="font-medium">
              Total
            </span>

            <span className="font-bold">
              ₹{order?.totalAmount?.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between py-2">
            <span className="font-medium">
              Status
            </span>

            <span className="text-blue-600 font-semibold">
              {order?.orderStatus}
            </span>
          </div>

        </div>

        <div className="mt-8 flex gap-4">

          <Link
            to="/shop"
            className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 font-semibold transition hover:bg-slate-100"
          >
            <ShoppingBag size={18} />

            My Orders
          </Link>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;