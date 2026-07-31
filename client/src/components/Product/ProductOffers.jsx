import { motion } from "framer-motion";
import { BadgePercent } from "lucide-react";

const ProductOffers = ({ offers = [] }) => {
  if (!offers.length) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Available Offers
      </h2>

      <div className="space-y-4">
        {offers.map((offer, index) => (
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
              items-start
              gap-4
              rounded-2xl
              border
              border-slate-100
              bg-slate-50
              p-4
              transition
              hover:border-blue-200
              hover:bg-blue-50
            "
          >
            <BadgePercent
              size={22}
              className="mt-0.5 shrink-0 text-green-600"
            />

            <span className="text-slate-700">
              {offer}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductOffers;