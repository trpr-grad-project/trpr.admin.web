import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

import ImageModal from "../../../Components/UI/ImageModal";

import "swiper/css";
import "swiper/css/navigation";

export default function TripOverview() {
  const images = [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* ================= Images ================= */}

          <div className="relative h-95 group overflow-hidden">
            {/* Prev */}

            <button className="trip-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-surface/90 border border-outline-variant/30 text-primary shadow-lg hover:bg-surface transition flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
              <ChevronLeft size={20} />
            </button>

            {/* Next */}

            <button className="trip-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-surface/90 border border-outline-variant/30 text-primary shadow-lg hover:bg-surface transition flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
              <ChevronRight size={20} />
            </button>

            {/* Images Count */}

            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md px-3 py-1 text-white text-sm font-semibold">
              <Images size={16} />
              {images.length} Photos
            </div>

            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              navigation={{
                prevEl: ".trip-prev",
                nextEl: ".trip-next",
              }}
              className="w-full h-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Trip ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                    className="w-full h-full object-cover cursor-zoom-in transition duration-300 hover:scale-[1.02]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ================= Content ================= */}

          <div className="p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-3xl font-bold font-['Noto_Serif'] text-on-surface mb-4">
                Ancient Aswan Discovery
              </h3>

              <p className="text-secondary leading-8">
                Explore the timeless wonders of Aswan, including Philae Temple
                and Abu Simbel while enjoying a complete guided cultural
                experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Theme
                </p>

                <h4 className="mt-1 font-bold text-on-surface">
                  Adventure
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Price
                </p>

                <h4 className="mt-1 font-bold text-on-surface">
                  1500 EGP
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Duration
                </p>

                <h4 className="mt-1 font-bold text-on-surface">
                  1 Day
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Participants
                </p>

                <h4 className="mt-1 font-bold text-on-surface">
                  20
                </h4>
              </div>
            </div>

            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Public
              </span>

              <span className="px-4 py-2 rounded-full bg-tertiary/10 text-tertiary text-sm font-semibold">
                Direct Publish
              </span>

              <span className="px-4 py-2 rounded-full bg-surface-container text-secondary text-sm">
                📅 Starts 15 Jul 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Image Preview ================= */}

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}