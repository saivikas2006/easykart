import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

function ReviewCard({ review }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200"
    >
      <Quote className="text-blue-600 mb-6" size={38} />

      <div className="flex mb-4">
        {[...Array(review.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="text-gray-600 leading-7">
        "{review.review}"
      </p>

      <div className="mt-8 flex items-center gap-4">

        <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
          {review.name.charAt(0)}
        </div>

        <div>
          <h3 className="font-semibold">
            {review.name}
          </h3>

          <p className="text-sm text-gray-500">
            {review.role}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default ReviewCard;