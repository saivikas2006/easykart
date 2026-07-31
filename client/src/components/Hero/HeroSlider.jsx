import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroCard from "./HeroCard";

import electronicsBanner from "../../assets/banners/electronics-banner.png";
import fashionBanner from "../../assets/banners/fashion-banner.png";
import homeBanner from "../../assets/banners/home-banner.png";

const banners = [
  {
    image: electronicsBanner,
    badge: "NEW ARRIVALS",
    title: "Upgrade Your Tech Experience",
    description:
      "Discover the latest smartphones, laptops, smartwatches and accessories.",
    button: "Shop Electronics",
    color: "blue",
    category: "electronics",
  },
  {
    image: fashionBanner,
    badge: "TRENDING NOW",
    title: "Express Your Unique Style",
    description:
      "Explore premium fashion, footwear and accessories for every occasion.",
    button: "Shop Fashion",
    color: "purple",
    category: "fashion",
  },
  {
    image: homeBanner,
    badge: "HOME ESSENTIALS",
    title: "Transform Your Living Space",
    description:
      "Create a beautiful and comfortable home with premium lifestyle products.",
    button: "Shop Home",
    color: "green",
    category: "home",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="relative w-full h-[580px] rounded-3xl overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hero Slides */}
      {banners.map((banner, index) => (
        <HeroCard
          key={index}
          banner={banner}
          active={current === index}
        />
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 ${
              current === index
                ? "w-10 h-2 rounded-full bg-blue-600"
                : "w-2.5 h-2.5 rounded-full bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;