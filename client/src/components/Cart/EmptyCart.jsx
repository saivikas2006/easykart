import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-12">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">

        {/* Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100">
          <ShoppingCart size={50} className="text-blue-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-bold text-slate-800">
          Your Cart is Empty
        </h2>

        {/* Description */}
        <p className="mt-4 text-slate-500">
          Looks like you haven't added anything yet.
          Start exploring our amazing collection and
          find products you'll love.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/shop"
            className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Go to Home
          </Link>

        </div>

        {/* Features */}

        <div className="mt-12 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">

          <div className="rounded-xl bg-slate-50 p-4">
            🚚
            <p className="mt-2 font-semibold">
              Fast Delivery
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            🔒
            <p className="mt-2 font-semibold">
              Secure Payment
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            ↩️
            <p className="mt-2 font-semibold">
              Easy Returns
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EmptyCart;