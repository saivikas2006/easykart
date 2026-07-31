import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import products from "../../../data/products";

const RecentlyViewed = () => {
  // Temporary: Show first 4 products
  // Later replace with products from localStorage
  const recentProducts = products.slice(0, 4);

  if (recentProducts.length === 0) return null;

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Recently Viewed
            </h2>

            <p className="mt-2 text-slate-500">
              Continue exploring products you've viewed recently.
            </p>
          </div>

          <Link
            to="/shop"
            className="hidden items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 md:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-56 w-full object-contain p-5 transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-blue-600">
                  {product.brand}
                </p>

                <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-1">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm text-slate-600">
                    {product.rating}
                  </span>

                  <span className="text-sm text-slate-400">
                    ({product.reviews})
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xl font-bold text-slate-900">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <span className="text-sm text-slate-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentlyViewed;