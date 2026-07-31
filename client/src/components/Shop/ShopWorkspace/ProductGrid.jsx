import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

import ProductCard from "./ProductCard";

const ProductGrid = ({ products, view }) => {
  // Empty State
  if (products.length === 0) {
    return (
      <section className="flex min-h-[500px] items-center justify-center bg-slate-50 p-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-lg"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
            <SearchX size={40} className="text-blue-600" />
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            No Products Found
          </h2>

          <p className="mt-3 text-slate-500">
            We couldn't find any products matching your search or filters.
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Try changing the category, brand, price, or search keyword.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 p-6 lg:p-8">
      <motion.div
        layout
        className={
          view === "grid"
            ? `
              grid
              gap-8
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              2xl:grid-cols-4
            `
            : "space-y-8"
        }
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            layout
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
          >
            <ProductCard
              product={product}
              view={view}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductGrid;