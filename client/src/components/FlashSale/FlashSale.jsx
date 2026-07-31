import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ProductCard from "../common/ProductCard";
import { useProducts } from "../../context/ProductContext";

function FlashSale() {
  const swiperRef = useRef(null);

  // Products from ProductContext
  const { products, loading } = useProducts();

  const [time, setTime] = useState({
    hours: 2,
    minutes: 13,
    seconds: 54,
  });

  // ===========================
  // Countdown Timer
  // ===========================
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Loading State
  if (loading) {
    return (
      <section className="py-20">
        <div className="flex justify-center items-center h-60">
          <p className="text-xl font-semibold text-slate-600">
            Loading Flash Sale...
          </p>
        </div>
      </section>
    );
  }

  // Flash Sale Products
  const flashSaleProducts = products
    .filter((product) => product.discount >= 10)
    .slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">

          <div>
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                <Zap className="h-7 w-7 text-orange-500" />
              </div>

              <div>
                <h2 className="text-5xl font-extrabold text-slate-900">
                  Flash Sale
                </h2>

                <p className="mt-1 text-gray-500">
                  Limited-time deals on our best products
                </p>
              </div>

            </div>

            {/* Countdown */}
            <div className="mt-6 flex items-center gap-4">

              <span className="font-medium text-gray-600">
                Ends In
              </span>

              <div className="flex gap-2">

                <div className="rounded-xl bg-red-500 px-4 py-3 text-lg font-bold text-white shadow">
                  {String(time.hours).padStart(2, "0")}
                </div>

                <div className="rounded-xl bg-red-500 px-4 py-3 text-lg font-bold text-white shadow">
                  {String(time.minutes).padStart(2, "0")}
                </div>

                <div className="rounded-xl bg-red-500 px-4 py-3 text-lg font-bold text-white shadow">
                  {String(time.seconds).padStart(2, "0")}
                </div>

              </div>

            </div>

          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center gap-3 lg:mt-0">

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <ChevronRight size={22} />
            </button>

            <Link
              to="/shop"
              className="ml-3 rounded-full border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              View All
            </Link>

          </div>

        </div>

        {/* Products Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {flashSaleProducts.map((product) => (
            <SwiperSlide key={product.slug}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default FlashSale;