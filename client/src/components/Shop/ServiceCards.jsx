import { Truck, ShieldCheck, Headphones, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders above ₹499",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% protected checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "7-day hassle-free returns",
  },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
            className="group rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <Icon size={24} />
            </div>

            <h3 className="text-sm font-semibold text-slate-800">
              {service.title}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceCards;