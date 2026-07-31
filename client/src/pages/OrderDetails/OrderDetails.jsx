import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import OrderTimeline from "../../components/Orders/OrderTimeline";
import { getOrderById } from "../../api/orderApi";
import OrderProducts from "../../components/Orders/OrderProducts";
import ShippingCard from "../../components/Orders/ShippingCard";
import PaymentCard from "../../components/Orders/PaymentCard";
import PriceSummary from "../../components/Orders/PriceSummary";
const OrderDetails = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await getOrderById(id);
        setOrder(data);
      } catch (error) {
        console.error(error);
        toast.error("Unable to load order.");
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={35} />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Order not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-4xl font-bold">
          Order Details
        </h1>

        <OrderTimeline status={order.orderStatus} />
        <OrderProducts items={order.items} />
        <ShippingCard address={order.shippingAddress} />
        <PaymentCard order={order} />
        <PriceSummary order={order} />
        <div className="mt-8 flex flex-wrap gap-4">

  <button
    onClick={() => window.print()}
    className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
  >
    🖨️ Print Invoice
  </button>

  <button
    className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-semibold text-white transition hover:opacity-90"
  >
    📄 Download Invoice
  </button>

</div>
      </div>
    </div>
  );
};

export default OrderDetails;