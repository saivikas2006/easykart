import { useRef } from "react";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ProductCard from "../common/ProductCard";
import { useProducts } from "../../context/ProductContext";

function TrendingProducts() {
  const swiperRef = useRef(null);

  // Products from ProductContext
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <section className="py-20">
        <div className="flex h-60 items-center justify-center">
          <p className="text-xl font-semibold text-slate-600">
            Loading Trending Products...
          </p>
        </div>
      </section>
    );
  }

  // Trending Products
  const trendingProducts = [...products]
    .sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return b.reviews - a.reviews;
    })
    .slice(0, 8);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">

          <div>
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Flame className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                  Trending Products
                </h2>

                <p className="mt-1 text-gray-500">
                  Most loved products by our customers.
                </p>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center gap-3 lg:mt-0">

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition hover:scale-105 hover:bg-blue-600 hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition hover:scale-105 hover:bg-blue-600 hover:text-white"
            >
              <ChevronRight size={20} />
            </button>

            <Link
              to="/shop"
              className="ml-3 rounded-full border border-blue-600 px-5 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              View All
            </Link>

          </div>

        </div>

        {/* Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {trendingProducts.map((product) => (
            <SwiperSlide key={product.slug}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default TrendingProducts;