import { ArrowRight, Sparkles, Star, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import SearchBar from "./SearchBar";
import ServiceCards from "./ServiceCards";

const HeroContent = ({
  query,
  setQuery,
  filteredProducts,
}) => {
  return (
    <div className="flex h-full flex-col justify-center">

      {/* Premium Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2"
      >
        <Sparkles size={18} className="text-blue-600" />
        <span className="text-sm font-semibold text-blue-700">
          Trusted by 50,000+ Happy Customers
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl"
      >
        Shop Smarter.
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
          Live Better.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-5 max-w-xl text-lg leading-8 text-slate-600"
      >
        Discover premium electronics, fashion, home essentials and lifestyle
        products with exclusive deals, secure checkout and lightning-fast
        delivery—all in one place.
      </motion.p>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-7"
      >
        <SearchBar
          query={query}
          setQuery={setQuery}
          filteredProducts={filteredProducts}
        />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-7 flex flex-wrap gap-4"
      >
        <button className="group flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl">
          Explore Collection

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-600 hover:shadow-md">
          View Flash Sale
        </button>
      </motion.div>

      {/* Trust Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-8 flex flex-wrap gap-8"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-yellow-100 p-3">
            <Star className="text-yellow-500" size={22} />
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900">4.9★</h4>
            <p className="text-sm text-slate-500">Customer Rating</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3">
            <Truck className="text-blue-600" size={22} />
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900">Free</h4>
            <p className="text-sm text-slate-500">Fast Delivery</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-green-100 p-3">
            <ShieldCheck className="text-green-600" size={22} />
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900">100%</h4>
            <p className="text-sm text-slate-500">Secure Payment</p>
          </div>
        </div>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <ServiceCards />
      </motion.div>

    </div>
  );
};

export default HeroContent;