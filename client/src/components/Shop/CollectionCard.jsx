import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CollectionCard = ({ item }) => {
  return (
    <Link to={`/shop?category=${item.slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative h-72 overflow-hidden rounded-3xl shadow-xl cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-80`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-8 text-white">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-md">
              Featured Collection
            </p>

            <h3 className="text-3xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 max-w-xs text-sm text-white/90">
              {item.subtitle}
            </p>
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Shop Now
            <ArrowRight size={18} />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CollectionCard;