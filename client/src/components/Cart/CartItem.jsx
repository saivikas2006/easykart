import {
  Minus,
  Plus,
  Trash2,
  Heart,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const product = item.product;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Product Image */}
        <div className="flex justify-center md:w-44">
          <img
            src={product?.images?.[0]}
            alt={product?.name}
            className="h-40 w-40 rounded-2xl bg-slate-50 p-3 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">
              {product?.brand}
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-800">
              {product?.name}
            </h2>

            <div className="mt-2 flex items-center gap-1">
              {"★★★★★".split("").map((star, index) => (
                <span
                  key={index}
                  className="text-yellow-400"
                >
                  {star}
                </span>
              ))}

              <span className="ml-2 text-sm text-slate-500">
                ({product?.rating || 0})
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-2xl font-bold text-slate-900">
                ₹{Number(product?.price || 0).toLocaleString()}
              </span>

              {product?.oldPrice && (
                <span className="text-lg text-slate-400 line-through">
                  ₹{Number(product.oldPrice).toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {/* Quantity + Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-xl border border-slate-200">
              <button
                onClick={() => decreaseQuantity(item._id)}
                className="p-3 transition hover:bg-slate-100"
              >
                <Minus size={18} />
              </button>

              <span className="w-12 text-center font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item._id)}
                className="p-3 transition hover:bg-slate-100"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Wishlist */}
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 transition hover:bg-slate-100">
              <Heart size={18} />
              Wishlist
            </button>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item._id)}
              className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-red-600 transition hover:bg-red-50"
            >
              <Trash2 size={18} />
              Remove
            </button>
          </div>

          {/* Delivery */}
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Truck
                size={18}
                className="text-green-600"
              />
              Delivery in 2–4 days
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={18}
                className="text-blue-600"
              />
              Genuine Product
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;