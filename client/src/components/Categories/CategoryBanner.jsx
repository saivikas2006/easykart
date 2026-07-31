import { motion } from "framer-motion";
import {
  Smartphone,
  Shirt,
  Home,
  ShoppingCart,
  Dumbbell,
  Sparkles,
  Headphones,
} from "lucide-react";

const categoryInfo = {
  electronics: {
    title: "Electronics",
    subtitle:
      "Discover the latest smartphones, laptops, gadgets and smart devices.",
    icon: Smartphone,
    gradient: "from-blue-700 via-sky-600 to-cyan-500",
  },

  fashion: {
    title: "Fashion",
    subtitle:
      "Premium clothing, footwear and accessories for every occasion.",
    icon: Shirt,
    gradient: "from-pink-700 via-rose-600 to-orange-500",
  },

  home: {
    title: "Home & Lifestyle",
    subtitle:
      "Everything you need to make your home stylish and comfortable.",
    icon: Home,
    gradient: "from-green-700 via-emerald-600 to-lime-500",
  },

  grocery: {
    title: "Grocery",
    subtitle:
      "Fresh groceries and daily essentials delivered to your doorstep.",
    icon: ShoppingCart,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },

  sports: {
    title: "Sports",
    subtitle:
      "High-quality sports gear and fitness equipment.",
    icon: Dumbbell,
    gradient: "from-indigo-700 via-blue-600 to-cyan-500",
  },

  beauty: {
    title: "Beauty",
    subtitle:
      "Premium beauty products for your everyday care.",
    icon: Sparkles,
    gradient: "from-fuchsia-700 via-pink-600 to-rose-500",
  },

  accessories: {
    title: "Accessories",
    subtitle:
      "Premium accessories that complete your everyday lifestyle.",
    icon: Headphones,
    gradient: "from-slate-700 via-gray-700 to-slate-500",
  },
};

const CategoryBanner = ({ slug, count }) => {
  const info = categoryInfo[slug];

  if (!info) return null;

  const Icon = info.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${info.gradient}
      text-white py-14 px-8 md:py-16 md:px-14 shadow-2xl mb-14`}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-12 -top-12 w-72 h-72 rounded-full border border-white/20"></div>

        <div className="absolute right-32 bottom-0 w-44 h-44 rounded-full border border-white/15"></div>

        <div className="absolute left-1/2 top-8 w-24 h-24 rounded-full bg-white/5 blur-2xl"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10">

        {/* Left Side */}
        <div>

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-white/80">
            Category
          </span>

          <div className="flex items-center gap-5 mt-5">

            <Icon
              size={56}
              strokeWidth={2.3}
            />

            <h1 className="text-5xl md:text-6xl font-black">
              {info.title}
            </h1>

          </div>

          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-white/90">
            {info.subtitle}
          </p>

        </div>

        {/* Right Side */}
        <div
          className="
          bg-white/15
          backdrop-blur-xl
          rounded-3xl
          px-10
          py-8
          text-center
          border border-white/20
          shadow-xl
        "
        >
          <h2 className="text-5xl font-black">
            {count}
          </h2>

          <p className="mt-3 text-white/90 text-lg">
            Available Products
          </p>
        </div>

      </div>
    </motion.section>
  );
};

export default CategoryBanner;