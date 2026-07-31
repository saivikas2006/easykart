import { Link } from "react-router-dom";
import { ShoppingCart, Heart, ArrowRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const RelatedProducts = ({ products = [], currentProduct }) => {
  const related = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id
    )
    .slice(0, 8);

  if (!related.length) return null;

  return (
    <section className="py-10">
      {/* Heading */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Related Products
          </h2>

          <p className="mt-2 text-slate-500">
            You may also like these products.
          </p>
        </div>

        <Link
          to={`/category/${currentProduct.category}`}
          className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold transition hover:border-blue-600 hover:text-blue-600"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {related.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative bg-slate-50 p-8">
                {/* Discount Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  {item.discount}% OFF
                </span>

                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="mx-auto h-52 object-contain transition duration-300 group-hover:scale-110"
                />

                <button
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    bg-white
                    p-2
                    shadow-md
                    transition
                    hover:text-red-500
                  "
                >
                  <Heart size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <span className="text-sm font-semibold text-blue-600">
                  {item.brand}
                </span>

                <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold text-slate-900">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span className="font-medium">
                    {item.rating}
                  </span>

                  <span className="text-sm text-slate-500">
                    ({item.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-slate-900">
                    ₹{item.price.toLocaleString()}
                  </span>

                  <span className="text-slate-400 line-through">
                    ₹{item.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/product/${item.slug}`}
                    className="
                      flex-1
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-violet-600
                      py-3
                      text-center
                      font-semibold
                      text-white
                      transition
                      hover:opacity-90
                    "
                  >
                    View Details
                  </Link>

                  <button
                    className="
                      rounded-xl
                      border
                      border-slate-300
                      p-3
                      transition
                      hover:bg-slate-100
                    "
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedProducts;