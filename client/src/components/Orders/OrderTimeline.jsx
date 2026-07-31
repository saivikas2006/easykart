import {
  CheckCircle2,
  Circle,
  Clock3,
  Truck,
  PackageCheck,
  XCircle,
} from "lucide-react";

const steps = [
  "Pending",
  "Confirmed",
  "Shipped",
  "Delivered",
];

const OrderTimeline = ({ status }) => {
  if (status === "Cancelled") {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <div className="flex items-center gap-3 text-red-600">
          <XCircle size={28} />
          <div>
            <h3 className="text-lg font-bold">Order Cancelled</h3>
            <p className="text-sm text-red-500">
              This order has been cancelled.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentStep = steps.indexOf(status);

  const icons = {
    Pending: <Clock3 size={22} />,
    Confirmed: <CheckCircle2 size={22} />,
    Shipped: <Truck size={22} />,
    Delivered: <PackageCheck size={22} />,
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        Order Timeline
      </h2>

      <div className="space-y-8">
        {steps.map((step, index) => {
          const completed = index <= currentStep;

          return (
            <div key={step} className="relative flex items-start gap-5">

              {index !== steps.length - 1 && (
                <div
                  className={`absolute left-[14px] top-8 h-12 w-1 rounded-full ${
                    completed ? "bg-green-500" : "bg-slate-300"
                  }`}
                />
              )}

              <div
                className={`z-10 flex h-8 w-8 items-center justify-center rounded-full ${
                  completed
                    ? "bg-green-500 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {completed ? icons[step] : <Circle size={18} />}
              </div>

              <div>
                <h3
                  className={`font-semibold ${
                    completed
                      ? "text-slate-900"
                      : "text-slate-400"
                  }`}
                >
                  {step}
                </h3>

                <p className="text-sm text-slate-500">
                  {completed
                    ? `${step} completed`
                    : `${step} pending`}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTimeline;