import { ReceiptText } from "lucide-react";

const PriceSummary = ({ order }) => {
  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
        <ReceiptText className="text-blue-600" />
        Price Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-semibold">
            ₹{order.subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">Shipping</span>
          <span className="font-semibold">
            ₹{order.shippingCharge.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">GST</span>
          <span className="font-semibold">
            ₹{order.gst.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">Discount</span>

          <span className="font-semibold text-green-600">
            -₹{order.discount.toLocaleString()}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>

          <span className="text-blue-600">
            ₹{order.totalAmount.toLocaleString()}
          </span>
        </div>

      </div>
    </div>
  );
};

export default PriceSummary;