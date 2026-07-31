import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Calendar,
  CreditCard,
  Truck,
  Eye,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { getUserOrders } from "../../api/orderApi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

const fetchOrders = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("easykart-user"));

    if (!user) {
      setOrders([]);
      return;
    }

    const data = await getUserOrders(user._id || user.id);
    setOrders(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "Shipped":
        return "bg-indigo-100 text-indigo-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center">
          <h2 className="text-xl font-semibold">
            Loading Orders...
          </h2>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        {/* Hero */}

        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-14">

          <div className="mx-auto max-w-7xl px-6">

            <h1 className="text-4xl font-bold text-white">
              My Orders
            </h1>

            <p className="mt-3 text-blue-100">
              Track all your EasyKart purchases.
            </p>

          </div>

        </div>

        <div className="mx-auto max-w-7xl px-6 py-10">

                    {/* Empty Orders */}

          {orders.length === 0 ? (
            <div className="rounded-3xl bg-white p-16 text-center shadow-lg">
              <Package
                size={80}
                className="mx-auto text-slate-300"
              />

              <h2 className="mt-6 text-3xl font-bold text-slate-800">
                No Orders Yet
              </h2>

              <p className="mt-3 text-slate-500">
                Looks like you haven't placed any orders yet.
              </p>

              <Link
                to="/shop"
                className="mt-8 inline-block rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-8">

              {orders.map((order) => (

                <div
                  key={order._id}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:shadow-xl"
                >

                  {/* Header */}

                  <div className="flex flex-col gap-4 border-b bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">

                    <div>

                      <h2 className="text-lg font-bold text-slate-800">
                        Order #{order.orderNumber}
                      </h2>

                      <div className="mt-2 flex flex-wrap gap-6 text-sm text-slate-500">

                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {new Date(order.createdAt).toLocaleDateString()}
                        </div>

                        <div className="flex items-center gap-2">
                          <CreditCard size={16} />
                          {order.paymentMethod}
                        </div>

                      </div>

                    </div>

                    <span
                      className={`rounded-full px-5 py-2 text-sm font-semibold ${getStatusColor(
                        order.orderStatus
                      )}`}
                    >
                      {order.orderStatus}
                    </span>

                  </div>

                  {/* Products */}

                  <div className="space-y-5 p-6">

                    {order.items?.map((item) => (

                      <div
                        key={item.product?._id}
                        className="flex items-center gap-5"
                      >

                        <img
                          src={item.product?.images?.[0]}
                          alt={item.product?.name}
                          className="h-24 w-24 rounded-2xl border object-cover"
                        />

                        <div className="flex-1">

                          <h3 className="text-lg font-semibold text-slate-800">
                            {item.product?.name}
                          </h3>

                          <p className="mt-2 text-slate-500">
                            Qty : {item.quantity}
                          </p>

                          <p className="font-semibold text-blue-600">
                            ₹{item.price}
                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                  {/* Footer */}

                  <div className="flex flex-col gap-4 border-t bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        ₹{order.totalAmount}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Total Amount
                      </p>

                    </div>

                    <div className="flex gap-4">
                                          <button
                        className="flex items-center gap-2 rounded-2xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
                      >
                        <Truck size={18} />
                        Track Order
                      </button>

                      <Link
                        to={`/orders/${order._id}`}
                        className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                      >
                        <Eye size={18} />
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

      <Footer />

    </>
  );
};

export default Orders;