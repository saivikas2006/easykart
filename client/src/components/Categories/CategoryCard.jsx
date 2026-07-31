import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.slug}`}>
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        {/* Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition duration-300`}
        />

        <div className="relative flex flex-col items-center p-8">

          {/* Floating Image */}
          <motion.img
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={category.image}
            alt={category.name}
            className="w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-110"
          />

          <h3 className="mt-6 text-2xl font-bold text-gray-800">
            {category.name}
          </h3>

          <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
            Explore
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>

        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;