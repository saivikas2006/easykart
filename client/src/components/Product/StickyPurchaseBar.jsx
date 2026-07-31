import { useEffect, useState } from "react";
import { ShoppingCart, Heart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";


import toast from "react-hot-toast";

const StickyPurchaseBar = ({ product }) => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const { addToCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);
   const [isWishlisted, setIsWishlisted] = useState(false);

const handleWishlist = () => {
  setIsWishlisted((prev) => !prev);

  if (!isWishlisted) {
    toast.success("Added to Wishlist ❤️");
  } else {
    toast.success("Removed from Wishlist");
  }
};
  const handleAddToCart = async () => {
    try {
      await addToCart(product);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyNow = async () => {
    try {
      await addToCart(product);
      navigate("/checkout");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`
        fixed
        bottom-5
        left-1/2
        z-50
        w-[95%]
        max-w-6xl
        -translate-x-1/2
        transition-all
        duration-500
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-20 opacity-0"
        }
      `}
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-5
          rounded-3xl
          border
          border-white/30
          bg-white/80
          p-5
          shadow-2xl
          backdrop-blur-xl
          md:flex-row
        "
      >
        {/* Product Info */}
        <div className="flex items-center gap-5">
          <div className="h-20 w-20 rounded-2xl bg-slate-100 p-2">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-blue-600">
              {product.brand}
            </p>

            <h3 className="max-w-xs text-lg font-bold text-slate-900 line-clamp-2">
              {product.name}
            </h3>

            <div className="mt-1 flex items-center gap-3">
              <span className="text-2xl font-bold">
                ₹{product.price.toLocaleString()}
              </span>

              <span className="text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
          onClick={handleWishlist}
            className="
              rounded-2xl
              border
              p-4
              transition
              hover:bg-red-50
              hover:text-red-500
            "
          >
            <Heart size={22} />
          </button>

          <button
            onClick={handleAddToCart}
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-blue-700
              px-6
              py-4
              font-semibold
              text-white
              shadow-lg
              transition
              hover:scale-105
            "
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-indigo-700
              px-6
              py-4
              font-semibold
              text-white
              shadow-lg
              transition
              hover:scale-105
            "
          >
            <Zap size={20} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyPurchaseBar;