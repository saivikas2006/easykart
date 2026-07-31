import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroProducts from "./HeroProducts";

import products from "../../data/products";
import { useMemo, useState } from "react";

const ShopHero = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];

    const search = query.toLowerCase();

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );
  }, [query]);

  return (
    <section className="relative mb-10 overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-xl">

      {/* Background Glow */}
      <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-blue-400/20 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[140px]" />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative grid min-h-[480px] items-center gap-12 px-10 py-10 lg:grid-cols-2 lg:px-16">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
        >
          <HeroContent
            query={query}
            setQuery={setQuery}
            filteredProducts={filteredProducts}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
        >
          <HeroProducts />
        </motion.div>

      </div>
    </section>
  );
};

export default ShopHero;