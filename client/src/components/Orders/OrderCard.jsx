import {
  CalendarDays,
  CreditCard,
  Package,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Confirmed: "bg-indigo-100 text-indigo-700",
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

const OrderCard = ({ order }) => {
  const { addToCart } = useCart();

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const buyAgain = () => {
    order.items.forEach((item) => {
      addToCart(item.product, item.quantity);
    });
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Order #{order._id.slice(-8).toUpperCase()}
          </h2>

          <div className="mt-2 flex flex-wrap gap-5 text-sm text-slate-600">

            <span className="flex items-center gap-2">
              <CalendarDays size={16} />
              {formatDate(order.createdAt)}
            </span>

            <span className="flex items-center gap-2">
              <CreditCard size={16} />
              {order.paymentMethod}
            </span>

          </div>
        </div>

        <span
          className={`rounded-full px-5 py-2 text-sm font-semibold ${
            statusStyles[order.orderStatus] ||
            "bg-slate-100 text-slate-700"
          }`}
        >
          {order.orderStatus}
        </span>
      </div>

      {/* Products */}
      <div className="divide-y">
        {order.items.map((item, index) => (
          <div
            key={item._id || index}
            className="flex items-center gap-5 p-6"
          >
            <img
              src={item.product?.images?.[0]}
              alt={item.product?.name}
              className="h-24 w-24 rounded-2xl border object-cover"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                {item.product?.name}
              </h3>

              <p className="mt-1 text-slate-500">
                Quantity: {item.quantity}
              </p>

              <p className="mt-2 font-bold text-blue-600">
                ₹{item.product?.price.toLocaleString()}
              </p>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold">
                ₹
                {(
                  item.product?.price * item.quantity
                ).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t bg-slate-50 p-6">

        <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">

          <div>
            <p>
              Subtotal : ₹
              {order.subtotal.toLocaleString()}
            </p>

            <p>
              Shipping : ₹
              {order.shippingCharge.toLocaleString()}
            </p>

            <p>
              GST : ₹
              {order.gst.toLocaleString()}
            </p>

            <p className="text-green-600">
              Discount : -₹
              {order.discount.toLocaleString()}
            </p>
          </div>

          <div className="text-right">
            <p className="text-3xl font-bold">
              ₹{order.totalAmount.toLocaleString()}
            </p>
          </div>

        </div>

        <div className="mt-6 flex flex-wrap gap-4">

          <Link
            to={`/orders/${order._id}`}
            className="flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
          >
            <Package size={18} />
            View Details
          </Link>

          <button
            onClick={buyAgain}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <RotateCcw size={18} />
            Buy Again
          </button>

        </div>
      </div>
    </div>
  );
};

export default OrderCard;