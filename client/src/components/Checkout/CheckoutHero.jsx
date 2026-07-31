import { ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CheckoutHero = () => {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center">
        {/* Left */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm text-blue-100">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight size={16} />

            <Link to="/cart" className="transition hover:text-white">
              Cart
            </Link>

            <ChevronRight size={16} />

            <span className="font-semibold text-white">
              Checkout
            </span>
          </div>

          <h1 className="text-4xl font-extrabold lg:text-5xl">
            Secure Checkout
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Complete your purchase securely. All payments are encrypted and your
            information is protected.
          </p>
        </div>

        {/* Right */}
        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg">
              <ShieldCheck size={30} />
            </div>

            <div>
              <h3 className="text-lg font-bold">
                100% Secure Payment
              </h3>

              <p className="text-sm text-blue-100">
                SSL Encrypted Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutHero;