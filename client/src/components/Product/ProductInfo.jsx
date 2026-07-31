import {
  Star,
  CheckCircle,
  Truck,
  ShieldCheck,
  RotateCcw,
  ShoppingCart,
  Heart,
  Zap,
  Share2,
  BadgeCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import toast from "react-hot-toast";
const ProductInfo = ({ product }) => {
  const {
    addToCart,
    clearCart,
  } = useCart();

  const { toggleWishlist, isWishlisted } = useWishlist();

  const navigate = useNavigate(); // ✅ ADD THIS LINE

  const [quantity, setQuantity] = useState(1);

  


const handleAddToCart = () => {
  addToCart({
    ...product,
    quantity,
  });
};
const handleBuyNow = async () => {
  try {
    console.log("1. Buy Now clicked");

    await clearCart();
    console.log("2. Cart cleared");

    await addToCart({
      ...product,
      quantity,
    });
    console.log("3. Product added");

    navigate("/checkout");
    console.log("4. Checkout page opened");

  } catch (error) {
    console.error("Buy Now Error:", error);
    toast.error("Unable to process Buy Now");
  }
};
  // Later you can navigate to checkout
  // navigate("/checkout");

  // Dynamic EMI
  const emiMonths = 12;
  const showEMI = product.price >= 3000;
  const emi = Math.ceil(product.price / emiMonths);

  return (
    <motion.section
      className="
        h-full
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-xl
        flex
        flex-col
      "
    >
      {/* Brand */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-lg font-bold text-white shadow-lg">
            {product.brand.charAt(0)}
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              {product.brand}
            </h3>

            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <BadgeCheck size={14} />
              EasyKart Assured
            </div>
          </div>
        </div>

        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:bg-blue-50 hover:text-blue-600">
          <Share2 size={20} />
        </button>
      </div>

      {/* Product Name */}
      <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-white shadow">
          <span className="font-semibold">{product.rating}</span>
          <Star size={14} fill="white" />
        </div>

        <span className="text-slate-500">
          {product.reviews.toLocaleString()} Ratings
        </span>

        <span className="text-slate-400">•</span>

        <span className="font-medium text-slate-600">
          25K+ Sold
        </span>
      </div>

      {/* Price Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-5xl font-bold text-slate-900">
            ₹{product.price.toLocaleString()}
          </h2>

          <span className="text-2xl text-slate-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
            {product.discount}% OFF
          </span>
        </div>

        {showEMI && (
          <p className="mt-4 text-slate-600">
            EMI starts from
            <span className="ml-2 font-semibold text-slate-900">
              ₹{emi.toLocaleString()}/month
            </span>

            <span className="ml-2 text-sm text-slate-500">
              (12 months)
            </span>
          </p>
        )}
      </div>

      {/* Trust Cards */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border bg-slate-50 p-4">
          <CheckCircle className="mb-2 text-green-600" />

          <h4 className="font-semibold">In Stock</h4>

          <p className="text-sm text-slate-500">
            Ready to ship
          </p>
        </div>

        <div className="rounded-2xl border bg-slate-50 p-4">
          <Truck className="mb-2 text-blue-600" />

          <h4 className="font-semibold">
            Free Delivery
          </h4>

          <p className="text-sm text-slate-500">
            Within 2-4 days
          </p>
        </div>

        <div className="rounded-2xl border bg-slate-50 p-4">
          <ShieldCheck className="mb-2 text-violet-600" />

          <h4 className="font-semibold">
            Secure Payment
          </h4>

          <p className="text-sm text-slate-500">
            100% Protected
          </p>
        </div>

        <div className="rounded-2xl border bg-slate-50 p-4">
          <RotateCcw className="mb-2 text-orange-500" />

          <h4 className="font-semibold">
            7-Day Return
          </h4>

          <p className="text-sm text-slate-500">
            Easy replacement
          </p>
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-10">
        <h3 className="mb-3 font-semibold text-slate-700">
          Quantity
        </h3>

        <QuantitySelector
  quantity={quantity}
  setQuantity={setQuantity}
/>
      </div>

      {/* Buttons */}
      <div className="mt-auto pt-10 space-y-4">
        <div className="flex gap-4">
          <button
  onClick={handleAddToCart}
  className="
    flex-1
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    to-blue-700
    py-4
    font-bold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-2xl
  "
>
            <ShoppingCart className="mr-2 inline" size={20} />
            Add to Cart
          </button>

          <button
   onClick={handleBuyNow}
  className="
    flex-1
    rounded-2xl
    bg-gradient-to-r
    from-orange-500
    to-amber-500
    py-4
    font-bold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-2xl
  "
>
            <Zap className="mr-2 inline" size={20} />
            Buy Now
          </button>
        </div>
<button
  onClick={() => toggleWishlist(product)}
  className="
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    border
    border-slate-300
    py-4
    font-semibold
    transition
    hover:border-red-400
    hover:bg-red-50
    hover:text-red-500
  "
>
  <Heart
    size={20}
    fill={isWishlisted(product._id) ? "currentColor" : "none"}
  />

  {isWishlisted(product._id)
    ? "Remove from Wishlist"
    : "Add to Wishlist"}
</button>
      </div>
    </motion.section>
  );
};

export default ProductInfo;