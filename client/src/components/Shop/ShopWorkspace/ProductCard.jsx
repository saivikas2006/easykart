import {
  Heart,
  Eye,
  ShoppingCart,
  Star,
  Truck,
  BadgeCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
const ProductCard = ({ product, view, isSearch = false }) => {
const { addToCart } = useCart();

const {
  toggleWishlist,
  isWishlisted,
} = useWishlist();
  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;
      const handleWishlist = (e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleWishlist(product);
};

  // ===========================
  // LIST VIEW
  // ===========================

  if (view === "list") {
    return (
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex flex-col md:flex-row">

          {/* IMAGE */}

          <Link
            to={`/product/${product.slug}`}
            className="relative flex h-80 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 md:w-80"
          >
            {discount > 0 && (
              <span className="absolute left-5 top-5 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
                {discount}% OFF
              </span>
            )}

            {product.rating >= 4.5 && (
              <span className="absolute left-5 top-16 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900">
                ⭐ Best Seller
              </span>
            )}

            <img
              src={product.images[0]}
              alt={product.name}
              className="h-60 object-contain transition duration-500 group-hover:scale-105"
            />
          </Link>

          {/* CONTENT */}

          <div className="flex flex-1 flex-col justify-between p-7">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                {product.brand}
              </p>

              <Link to={`/product/${product.slug}`}>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 transition hover:text-blue-600">
                  {product.name}
                </h2>
              </Link>

              <div className="mt-4 flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    className={
                      star <= Math.round(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                  />
                ))}

                <span className="ml-2 text-sm text-slate-500">
                  ({product.reviews} Reviews)
                </span>

              </div>

              <p className="mt-5 line-clamp-3 text-slate-600">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                  <BadgeCheck size={16} />
                  Genuine Product
                </span>

                <span className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">
                  <Truck size={16} />
                  Free Delivery
                </span>

              </div>

            </div>

            <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <span className="text-4xl font-bold text-slate-900">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <span className="text-lg text-slate-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>

                </div>

                <p className="mt-2 text-sm font-medium text-green-600">
                  In Stock ({product.stock})
                </p>

              </div>

              <div className="flex flex-wrap gap-3">
<button
  onClick={() => toggleWishlist(product)}
  className={`rounded-xl border p-3 transition-all duration-300 ${
    isWishlisted(product.id)
      ? "border-red-500 bg-red-500 text-white"
      : "hover:border-red-500 hover:bg-red-500 hover:text-white"
  }`}
>
  <Heart
    size={20}
    fill={isWishlisted(product.id) ? "currentColor" : "none"}
  />
</button>

                <button className="rounded-xl border p-3 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white">
                  <Eye size={20} />
                </button>

    {isSearch ? (
  <Link
    to={`/product/${product.slug}`}
    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    <Eye size={18} />
    View Details
  </Link>
) : (
  <button
    onClick={() => addToCart(product)}
    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    <ShoppingCart size={18} />
    Add to Cart
  </button>
)}

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }

  // ===========================
  // GRID VIEW
  // ===========================

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
    >
            {/* IMAGE */}

      <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-100">

        {discount > 0 && (
          <span className="absolute left-4 top-4 z-20 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
            {discount}% OFF
          </span>
        )}

        {product.rating >= 4.5 && (
          <span className="absolute left-4 top-14 z-20 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
            ⭐ Best Seller
          </span>
        )}

        <button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  }}
  className={`absolute right-4 top-4 z-20 rounded-full border p-2 shadow transition-all duration-300 hover:scale-110 ${
    isWishlisted(product.id)
      ? "border-red-500 bg-red-500 text-white"
      : "border-slate-200 bg-white hover:bg-red-500 hover:text-white"
  }`}
>
  <Heart
    size={18}
    fill={isWishlisted(product.id) ? "currentColor" : "none"}
  />
</button>

        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-4 top-16 z-20 rounded-full border border-slate-200 bg-white p-2 shadow transition hover:scale-110 hover:bg-blue-600 hover:text-white"
        >
          <Eye size={18} />
        </button>

        <img
          src={product.images[0]}
          alt={product.name}
          className="mx-auto h-72 w-full object-contain p-8 transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}

      <div className="space-y-5 p-6">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          {product.brand}
        </p>

        <h3 className="line-clamp-2 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-600">
          {product.name}
        </h3>

        <div className="flex items-center gap-1">

          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={15}
              className={
                star <= Math.round(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-slate-300"
              }
            />
          ))}

          <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
            {product.reviews} Reviews
          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-3xl font-bold text-slate-900">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-lg text-slate-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>

        </div>

        <p className="line-clamp-2 text-sm text-slate-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">

          <div className="flex items-center gap-2 text-green-600">
            <BadgeCheck size={16} />
            <span className="text-sm font-medium">
              Genuine Product
            </span>
          </div>

          <div className="flex items-center gap-2 text-blue-600">
            <Truck size={16} />
            <span className="text-sm font-medium">
              Free Delivery
            </span>
          </div>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-sm font-semibold text-green-600">
            In Stock ({product.stock})
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Ready to Ship
          </span>

        </div>
{isSearch ? (
  <Link
    to={`/product/${product.slug}`}
    onClick={(e) => e.stopPropagation()}
    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
  >
    <Eye size={18} />
    View Details
  </Link>
) : (
  <button
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(product);
    }}
    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
  >
    <ShoppingCart size={18} />
    Add to Cart
  </button>
)}

      </div>

    </Link>
  );
};

export default ProductCard;