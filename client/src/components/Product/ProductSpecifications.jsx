import { motion } from "framer-motion";

const ProductSpecifications = ({ specifications = {} }) => {
  const specs = Object.entries(specifications);

  if (!specs.length) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Specifications
      </h2>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        {specs.map(([label, value], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`grid grid-cols-2 gap-4 p-4 ${
              index !== specs.length - 1
                ? "border-b border-slate-200"
                : ""
            } ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
          >
            <span className="font-semibold text-slate-700 break-words">
              {label}
            </span>

            <span className="text-slate-600 break-words">
              {value}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSpecifications;