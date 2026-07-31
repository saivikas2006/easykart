import {
  CreditCard,
  Wallet,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

const PaymentCard = ({ order }) => {
  const paymentStatusStyles = {
    Pending: {
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: <Clock3 size={18} />,
    },
    Paid: {
      color: "text-green-600",
      bg: "bg-green-100",
      icon: <CheckCircle2 size={18} />,
    },
    Failed: {
      color: "text-red-600",
      bg: "bg-red-100",
      icon: <XCircle size={18} />,
    },
  };

  const status =
    paymentStatusStyles[order.paymentStatus] ||
    paymentStatusStyles.Pending;

  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
        <CreditCard className="text-blue-600" />
        Payment Details
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between border-b pb-4">

          <div className="flex items-center gap-3">
            <Wallet className="text-slate-500" />

            <div>
              <p className="text-sm text-slate-500">
                Payment Method
              </p>

              <p className="font-semibold">
                {order.paymentMethod}
              </p>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between">

          <p className="text-sm text-slate-500">
            Payment Status
          </p>

          <span
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${status.bg} ${status.color}`}
          >
            {status.icon}
            {order.paymentStatus}
          </span>

        </div>

      </div>

    </div>
  );
};

export default PaymentCard;