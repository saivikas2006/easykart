import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, Search } from "lucide-react";

const SearchSuggestions = ({ results = [], query = "" }) => {
  if (!query.trim()) return null;

  const highlightText = (text) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, "gi");

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={index}
          className="font-bold text-blue-600"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-16 z-50 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
      >
        {results.length === 0 ? (
          <div className="py-12 text-center">
            <Search
              size={42}
              className="mx-auto mb-4 text-slate-300"
            />

            <h3 className="text-lg font-semibold text-slate-700">
              No matching products
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try searching for another product or brand.
            </p>
          </div>
        ) : (
          <>
            <div className="max-h-[400px] overflow-y-auto">
              {results.slice(0, 6).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="
                    group
                    mx-2
                    my-2
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    px-4
                    py-3
                    transition-all
                    duration-200
                    hover:bg-slate-50
                    hover:shadow-sm
                  "
                >
                  {/* Product Image */}
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-14 w-14 object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-slate-800">
                      {highlightText(product.name)}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                        <Star
                          size={12}
                          className="fill-yellow-500 text-yellow-500"
                        />
                        {product.rating}
                      </div>

                      <span className="text-sm text-slate-500">
                        {product.brand}
                      </span>

                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs capitalize text-blue-700">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">
                      ₹{product.price.toLocaleString()}
                    </p>

                    {product.originalPrice > product.price && (
                      <p className="text-xs text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </p>
                    )}

                    {product.discount > 0 && (
                      <p className="text-xs font-semibold text-red-500">
                        {product.discount}% OFF
                      </p>
                    )}
                  </div>

                  {/* Hover Arrow */}
                  <ArrowRight
                    size={18}
                    className="
                      text-slate-400
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 bg-white">
              <Link
                to={`/search?q=${encodeURIComponent(query)}`}
                className="flex items-center justify-center gap-2 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                View all {results.length} result
                {results.length !== 1 ? "s" : ""}
                <ArrowRight size={18} />
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchSuggestions;