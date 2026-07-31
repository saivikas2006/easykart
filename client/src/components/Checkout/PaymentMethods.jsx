import {
  Smartphone,
  CreditCard,
  Landmark,
  Wallet,
  CheckCircle2,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

const paymentOptions = [
 
  {
    id: "RAZORPAY",
    title: "Online Payment",
    subtitle: "UPI, Cards, Wallets & Net Banking",
    icon: Smartphone,
  },
  {
    id: "COD",
    title: "Cash on Delivery",
    subtitle: "Pay when your order arrives",
    icon: Wallet,
  },
];


const PaymentMethods = () => {
  const { paymentMethod, setPaymentMethod } = useCart();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Payment Method
        </h2>

        <p className="mt-2 text-slate-500">
          Choose your preferred payment option.
        </p>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        {paymentOptions.map((method) => {
          const Icon = method.icon;
          const active = paymentMethod === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => setPaymentMethod(method.id)}
              className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-lg"
                  : "border-slate-200 hover:border-blue-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-2xl p-3 ${
                      active
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {method.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {method.subtitle}
                    </p>
                  </div>
                </div>

                {active && (
                  <CheckCircle2
                    className="text-blue-600"
                    size={28}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Security Notice */}
      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-4">
        <p className="text-sm font-medium text-green-700">
          🔒 Your payment information is encrypted and securely processed.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethods;