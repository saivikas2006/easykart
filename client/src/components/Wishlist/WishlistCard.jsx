import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const WishlistCard = ({ product }) => {
  const { addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();

  if (!product) return null;

  // Supports both:
  // product = { name, price, ... }
  // product = { product: { name, price, ... } }
  const item = product.product || product;

  const discount =
    Number(item.originalPrice || item.oldPrice || 0) >
    Number(item.price || 0)
      ? Math.round(
          ((Number(item.originalPrice || item.oldPrice) -
            Number(item.price)) /
            Number(item.originalPrice || item.oldPrice)) *
            100
        )
      : 0;

  const handleAddToCart = () => {
    addToCart({
      ...item,
      quantity: 1,
    });
  };

  const handleRemoveWishlist = (e) => {
    e.preventDefault();
    removeFromWishlist(item._id || item.id);
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link
        to={`/product/${item.slug}`}
        className="relative block overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
      >
        {discount > 0 && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            {discount}% OFF
          </span>
        )}

        <button
          onClick={handleRemoveWishlist}
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow transition hover:bg-red-500 hover:text-white"
        >
          <Heart
            size={18}
            className="fill-current text-red-500"
          />
        </button>

        <img
          src={item.images?.[0]}
          alt={item.name}
          className="mx-auto h-72 w-full object-contain p-8 transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="space-y-4 p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          {item.brand}
        </p>

        <Link to={`/product/${item.slug}`}>
          <h2 className="line-clamp-2 text-xl font-bold text-slate-900 hover:text-blue-600">
            {item.name}
          </h2>
        </Link>

        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={15}
              className={
                star <= Math.round(Number(item.rating || 0))
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-slate-300"
              }
            />
          ))}

          <span className="ml-2 text-xs text-slate-500">
            ({item.reviews || 0})
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-slate-900">
            ₹{Number(item.price || 0).toLocaleString()}
          </span>

          {(item.originalPrice || item.oldPrice) && (
            <span className="text-lg text-slate-400 line-through">
              ₹{Number(item.originalPrice || item.oldPrice).toLocaleString()}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;