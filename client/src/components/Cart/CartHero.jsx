import { ShoppingCart, ChevronRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartHero = () => {
  const { itemCount } = useCart();

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-lg">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Content */}
        <div>

          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-2 text-sm text-blue-100">

            <Link
              to="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="font-medium text-white">
              Cart
            </span>

          </div>

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-md">

              <ShoppingCart size={34} />

            </div>

            <div>

              <h1 className="text-4xl font-extrabold">
                Shopping Cart
              </h1>

              <p className="mt-2 text-blue-100">
                {itemCount} item{itemCount !== 1 ? "s" : ""} in your cart
              </p>

            </div>

          </div>

        </div>

        {/* Right Card */}

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <Truck className="text-green-300" size={30} />

            <div>

              <h3 className="text-lg font-bold">
                Free Delivery
              </h3>

              <p className="text-sm text-blue-100">
                Orders above ₹999 qualify for free shipping.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CartHero;