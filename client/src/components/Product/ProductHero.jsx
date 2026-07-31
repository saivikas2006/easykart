import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ProductHero = ({ product }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          mt-6
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-gradient-to-br
          from-blue-50
          via-white
          to-violet-100
          shadow-2xl
        "
      >
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="relative px-10 py-12">

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              EffectFade,
            ]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            loop={product.images.length > 1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".hero-prev",
              nextEl: ".hero-next",
            }}
            pagination={{
              clickable: true,
            }}
            className="h-[620px]"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full items-center justify-center">

                  <motion.img
                    src={image}
                    alt={`${product.name}-${index}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    draggable={false}
                    onClick={() => {
                      setSelectedImage(index);
                      setPreviewOpen(true);
                    }}
                    className="
                      h-[600px]
                      md:h-[650px]
                      lg:h-[680px]
                      object-contain
                      drop-shadow-2xl
                      select-none
                      cursor-zoom-in
                    "
                  />

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous */}
          <button
            className="
              hero-prev
              absolute
              left-10
              top-1/2
              z-30
              -translate-y-1/2
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-xl
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
            "
          >
            <ChevronLeft size={28} strokeWidth={2.3} />
          </button>

          {/* Next */}
          <button
            className="
              hero-next
              absolute
              right-10
              top-1/2
              z-30
              -translate-y-1/2
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-xl
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
            "
          >
            <ChevronRight size={28} strokeWidth={2.3} />
          </button>

        </div>
      </motion.section>

      {/* Full Screen Preview */}

      {previewOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/90
            backdrop-blur-md
            p-8
          "
          onClick={() => setPreviewOpen(false)}
        >
          {/* Close Button */}

          <button
            onClick={() => setPreviewOpen(false)}
            className="
              absolute
              right-8
              top-8
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-xl
            "
          >
            <X size={24} />
          </button>

          {/* Previous */}

          {product.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  (selectedImage - 1 + product.images.length) %
                    product.images.length
                );
              }}
              className="
                absolute
                left-8
                rounded-full
                bg-white
                p-4
                shadow-xl
              "
            >
              <ChevronLeft />
            </button>
          )}

          {/* Image */}

          <img
            src={product.images[selectedImage]}
            alt={product.name}
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              max-w-[90vw]
              object-contain
            "
          />

          {/* Next */}

          {product.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  (selectedImage + 1) %
                    product.images.length
                );
              }}
              className="
                absolute
                right-8
                rounded-full
                bg-white
                p-4
                shadow-xl
              "
            >
              <ChevronRight />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ProductHero;