import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
function ProductCard({ product }) {
  console.log(product);
  const { addToCart } = useCart();
const { toggleWishlist, isWishlisted } = useWishlist();
  const image =
    product.images?.[0] ||
    product.image ||
    "/products/placeholder.webp";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link to={`/product/${product.slug}`}>
        {/* Image */}
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
          {/* Discount */}
          <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
            -{product.discount}%
          </div>

          {/* Wishlist */}
          <button
  onClick={(e) => {
    e.preventDefault();
    toggleWishlist(product);
  }}
  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-50"
>
  <Heart
    size={18}
    className={
      isWishlisted(product._id)
        ? "fill-red-500 text-red-500"
        : "text-gray-500"
    }
  />
</button>

          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={product.name}
            className="h-52 w-52 object-contain"
          />
        </div>

        {/* Details */}
        <div className="p-5">
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-800">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {product.rating}
            </span>

            <span className="text-gray-400">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-bold text-blue-600">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>

      {/* Add to Cart */}
      <div className="px-5 pb-5">
        <button
  onClick={(e) => {
    e.preventDefault();

    console.log("FULL PRODUCT =", product);
    console.log("Mongo _id =", product._id);
    console.log("Custom id =", product.id);

    addToCart(product);
  }}
  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white"
>
  <ShoppingCart size={18} />
  Add to Cart
</button>
      </div>
    </motion.div>
  );
}

export default ProductCard;