import CheckoutHero from "../../components/Checkout/CheckoutHero";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import PaymentMethods from "../../components/Checkout/PaymentMethods";
import CouponBox from "../../components/Checkout/CouponBox";
import OrderSummary from "../../components/Checkout/OrderSummary";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <CheckoutHero />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-3">
        {/* Left Side */}
        <div className="space-y-8 lg:col-span-2">
          <CheckoutForm />
          <PaymentMethods />
          <CouponBox />
        </div>

        {/* Right Side */}
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;