import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const themes = {
  blue: {
    badge: "bg-blue-100 text-blue-700",
    button: "bg-blue-600 hover:bg-blue-700",
    text: "text-blue-600",
  },
  purple: {
    badge: "bg-purple-100 text-purple-700",
    button: "bg-purple-600 hover:bg-purple-700",
    text: "text-purple-600",
  },
  green: {
    badge: "bg-green-100 text-green-700",
    button: "bg-green-600 hover:bg-green-700",
    text: "text-green-600",
  },
};

function HeroCard({ banner, active }) {
  const theme = themes[banner.color];

  return (
    <div
      className={`
        absolute inset-0 overflow-hidden
        transition-all duration-1000 ease-in-out
        ${active ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Banner Image */}
      <motion.img
        src={banner.image}
        alt={banner.title}
        animate={{
          scale: active ? 1.08 : 1,
        }}
        transition={{
          duration: 6,
          ease: "linear",
        }}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <motion.div
          key={banner.title}
          initial={{ opacity: 0, x: -80 }}
          animate={{
            opacity: active ? 1 : 0,
            x: active ? 0 : -80,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="ml-20 max-w-xl"
        >
          {/* Badge */}
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`inline-block px-5 py-2 rounded-full font-semibold shadow-md mb-6 ${theme.badge}`}
          >
            {banner.badge}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: active ? 1 : 0,
              y: active ? 0 : 40,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="text-6xl font-black text-gray-900 leading-tight"
          >
            {banner.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: active ? 1 : 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mt-6 text-lg text-gray-700 leading-8 max-w-lg"
          >
            {banner.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: active ? 1 : 0,
              y: active ? 0 : 30,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="mt-10 flex gap-5"
          >
            {/* Shop Now */}
            <Link
              to={`/category/${banner.category}`}
              className={`
                px-8 py-4 rounded-xl
                text-white font-semibold
                shadow-xl
                transition-all duration-300
                hover:scale-105 hover:-translate-y-1
                ${theme.button}
              `}
            >
              {banner.button}
            </Link>

            {/* Explore */}
            <Link
              to="/shop"
              className={`
                px-8 py-4 rounded-xl
                border-2 border-current
                font-semibold
                backdrop-blur-md
                transition-all duration-300
                hover:scale-105 hover:-translate-y-1
                hover:bg-gray-900 hover:text-white
                ${theme.text}
              `}
            >
              Explore More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroCard;