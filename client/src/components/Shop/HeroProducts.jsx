import { motion } from "framer-motion";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    src: "/products/laptop.png",
    title: "MacBook Pro",
    price: "₹1,49,999",
    className:
      "top-1/2 left-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2 z-20",
    duration: 6,
  },
  {
    id: 2,
    src: "/products/iphone.png",
    title: "iPhone 16 Pro",
    price: "₹1,19,999",
    className: "top-12 left-4 w-40 z-30",
    duration: 5,
  },
  {
    id: 3,
    src: "/products/watch.png",
    title: "Smart Watch",
    price: "₹24,999",
    className: "top-8 right-8 w-28 z-30",
    duration: 7,
  },
  {
    id: 4,
    src: "/products/headphone.png",
    title: "Sony XM5",
    price: "₹29,999",
    className: "bottom-8 left-8 w-36 z-30",
    duration: 6,
  },
];

const HeroProducts = () => {
  return (
    <div className="relative h-[450px] w-full overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-orange-400/20 blur-[120px]" />

      {/* Main Product */}
      {products.map((product) => (
        <motion.div
          key={product.id}
          className={`absolute ${product.className}`}
          animate={{
            y: [0, -12, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: product.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="rounded-3xl border border-white/40 bg-white/60 p-4 shadow-2xl backdrop-blur-xl">

            <img
              src={product.src}
              alt={product.title}
              draggable={false}
              className="mx-auto select-none object-contain"
            />

            <div className="mt-4 text-center">

              <h3 className="font-semibold text-slate-900">
                {product.title}
              </h3>

              <p className="mt-1 text-blue-600 font-bold">
                {product.price}
              </p>

              <div className="mt-2 flex justify-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill="#FACC15"
                    color="#FACC15"
                  />
                ))}
              </div>

            </div>

          </div>
        </motion.div>
      ))}

      {/* Floating Offer Card */}
      <motion.div
        className="absolute right-4 bottom-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 text-white shadow-xl"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <p className="text-sm font-medium">🔥 Flash Sale</p>

        <h2 className="text-2xl font-bold">
          Up to 60% OFF
        </h2>
      </motion.div>

      {/* Floating Free Delivery */}
      <motion.div
        className="absolute left-4 top-1/2 rounded-2xl bg-white px-5 py-3 shadow-xl"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        🚚 Free Delivery
      </motion.div>

      {/* Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-blue-300"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 75}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default HeroProducts;