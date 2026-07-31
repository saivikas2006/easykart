import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ProductHighlights = ({ highlights = [] }) => {
  if (!highlights.length) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Highlights
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-100
              bg-slate-50
              p-4
              transition
              hover:border-blue-200
              hover:bg-blue-50
            "
          >
            <CheckCircle
              size={22}
              className="shrink-0 text-green-500"
            />

            <span className="text-slate-700">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlights;