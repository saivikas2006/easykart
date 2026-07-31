import {
  Star,
  CheckCircle,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

const ProductReviews = ({ product }) => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "2 days ago",
      verified: true,
      review:
        "Amazing product! Build quality is excellent and delivery was very fast. Highly recommended.",
    },
    {
      id: 2,
      name: "Sai Krishna",
      rating: 5,
      date: "1 week ago",
      verified: true,
      review:
        "Worth every rupee. Premium feel, excellent performance and beautiful design.",
    },
    {
      id: 3,
      name: "Priya Patel",
      rating: 4,
      date: "2 weeks ago",
      verified: true,
      review:
        "Very good product. Packaging was great and customer support was helpful.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Customer Reviews
          </h2>

          <p className="mt-2 text-slate-500">
            See what customers are saying.
          </p>
        </div>

        <button
          className="
          rounded-2xl
          border
          border-slate-300
          px-5
          py-3
          font-semibold
          transition
          hover:bg-slate-100
        "
        >
          View All
        </button>

      </div>

      {/* Rating Summary */}
      <div
        className="
        mb-8
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
      "
      >
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <h3 className="text-6xl font-bold text-slate-900">
              {product.rating}
            </h3>

            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  fill="currentColor"
                  className="text-yellow-400"
                />
              ))}
            </div>

            <p className="mt-3 text-slate-500">
              Based on {product.reviews.toLocaleString()} reviews
            </p>

          </div>

          <div className="flex gap-4">

            <div className="rounded-2xl bg-blue-50 p-5 text-center">
              <ThumbsUp
                className="mx-auto text-blue-600"
                size={24}
              />

              <h4 className="mt-2 text-xl font-bold">
                96%
              </h4>

              <p className="text-sm text-slate-500">
                Recommended
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-5 text-center">
              <MessageCircle
                className="mx-auto text-violet-600"
                size={24}
              />

              <h4 className="mt-2 text-xl font-bold">
                {product.reviews}
              </h4>

              <p className="text-sm text-slate-500">
                Reviews
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Review Cards */}
      <div className="grid gap-6">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-md
            transition
            hover:-translate-y-1
            hover:shadow-xl
          "
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  text-xl
                  font-bold
                  text-white
                "
                >
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    {review.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2">

                    {review.verified && (
                      <>
                        <CheckCircle
                          size={16}
                          className="text-green-600"
                        />

                        <span className="text-sm text-green-600">
                          Verified Purchase
                        </span>
                      </>
                    )}

                  </div>

                </div>

              </div>

              <span className="text-sm text-slate-400">
                {review.date}
              </span>

            </div>

            <div className="mt-5 flex gap-1">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  fill="currentColor"
                  className="text-yellow-400"
                  size={18}
                />
              ))}
            </div>

            <p className="mt-5 leading-8 text-slate-600">
              {review.review}
            </p>

          </div>
        ))}

      </div>
    </motion.section>
  );
};

export default ProductReviews;