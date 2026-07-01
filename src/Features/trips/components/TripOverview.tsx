import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

import ImageModal from "../../../Components/UI/ImageModal";
import type { TripDetailsResponse } from "../../../types/trip";

import "swiper/css";
import "swiper/css/navigation";

interface Props {
  trip: TripDetailsResponse;
}

export default function TripOverview({ trip }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/3 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-100 group overflow-hidden">
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
              {trip.imagesUrls.length} Photos
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
              {trip.imagesUrls.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Trip ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                    className="w-full h-full object-cover cursor-zoom-in transition duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-3xl font-bold font-['Noto_Serif'] text-on-surface mb-4">
                {trip.title}
              </h3>

              <p className="text-secondary leading-8">
                {trip.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Theme
                </p>
                <h4 className="mt-1 font-bold text-on-surface">
                  {trip.theme}
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Price
                </p>
                <h4 className="mt-1 font-bold text-on-surface">
                  {trip.price} EGP
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Trip Time
                </p>
                <h4 className="mt-1 font-bold text-on-surface">
                  {trip.tripTime}
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Participants
                </p>
                <h4 className="mt-1 font-bold text-on-surface">
                  {trip.maxParticipantsCount}
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Trip Visibility
                </p>
                <h4 className="mt-1 font-bold text-on-surface">
                  {trip.tripVisibility}
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Publish Mode
                </p>
                <h4 className="mt-1 font-bold text-on-surface">
                  {trip.publishMode}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}