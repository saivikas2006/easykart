import { motion } from "framer-motion";
import {
  Truck,
  CalendarDays,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const ProductDelivery = ({ delivery = {} }) => {
  if (!Object.keys(delivery).length) return null;

  const items = [
    {
      icon: <Truck size={22} className="text-blue-600" />,
      label: "Shipping",
      value: delivery.shipping,
    },
    {
      icon: <CalendarDays size={22} className="text-emerald-600" />,
      label: "Estimated Delivery",
      value: delivery.eta,
    },
    {
      icon: <RefreshCw size={22} className="text-orange-500" />,
      label: "Replacement",
      value: delivery.replacement,
    },
    {
      icon: <ShieldCheck size={22} className="text-violet-600" />,
      label: "Warranty",
      value: delivery.warranty,
    },
  ].filter((item) => item.value);

  if (!items.length) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Delivery Information
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
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
            <div className="mt-1 shrink-0">
              {item.icon}
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                {item.label}
              </p>

              <p className="mt-1 text-slate-600">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductDelivery;