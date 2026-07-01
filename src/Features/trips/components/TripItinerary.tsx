import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import type { TripDetailsResponse } from "../../../types/trip";
import PlaceLocationModal from "./PlaceLocationModal";

interface Props {
  trip: TripDetailsResponse;
}

export default function TripItinerary({ trip }: Props) {
  const [openedDay, setOpenedDay] = useState<number | null>(0);

  const [selectedPlace, setSelectedPlace] = useState<{
    latitude: string;
    longitude: string;
    title: string;
  } | null>(null);

  return (
    <>
      <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 p-8">
        <div className="mb-8">
          <h3 className="font-['Noto_Serif'] text-2xl font-bold text-on-surface">
            Trip Itinerary
          </h3>

          <p className="text-secondary text-sm mt-1">
            Timeline of the trip including places and visit durations.
          </p>
        </div>

        <div className="space-y-5">
          {trip.segments.map((segment, dayIndex) => (
            <div
              key={dayIndex}
              className="rounded-xl border border-outline-variant/50 overflow-hidden"
            >
              {/* Header */}

              <button
                onClick={() =>
                  setOpenedDay(openedDay === dayIndex ? null : dayIndex)
                }
                className="w-full flex justify-between items-center bg-surface-container px-6 py-5 cursor-pointer"
              >
                <div className="text-left">
                  <h4 className="font-bold text-on-surface">
                    Day {segment.day}
                  </h4>

                  <p className="text-secondary text-sm">
                    Duration • {segment.duration} Hours
                  </p>
                </div>

                <ChevronDown
                  className={`text-secondary transition-transform duration-300 ${
                    openedDay === dayIndex ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Places */}

              {openedDay === dayIndex && (
                <div className="divide-y divide-outline-variant/10">
                  {segment.places.map((place) => (
                    <div key={place.id} className="p-6">
                      <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>

                        <div className="flex-1">
                          {/* Top */}

                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-semibold text-lg text-on-surface">
                                {place.title}
                              </h5>

                              <p className="text-secondary text-sm mt-1">
                                {place.category.name.charAt(0).toUpperCase() +
                                  place.category.name.slice(1)}{" "}
                                • {place.governorate.name}
                              </p>
                            </div>

                            <button
                              className="text-primary text-[15px] font-semibold hover:underline transition-all cursor-pointer"
                              onClick={() =>
                                setSelectedPlace({
                                  latitude: place.latitude,
                                  longitude: place.longitude,
                                  title: place.title,
                                })
                              }
                            >
                              View on Map
                            </button>
                          </div>

                          {/* Description */}

                          <p className="text-sm text-secondary mt-5 leading-7">
                            {place.description}
                          </p>

                          {/* Tags */}

                          <div className="flex flex-wrap gap-2 mt-5">
                            {place.tags.map((tag) => (
                              <span
                                key={tag.id}
                                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs"
                              >
                                {tag.name}
                              </span>
                            ))}
                          </div>

                          {/* Bottom */}

                          <div className="flex justify-between items-center mt-6 pt-4 border-t border-outline-variant/15">
                            <div>
                              <p className="text-[10px] uppercase tracking-widest text-secondary mb-1">
                                Average Visit
                              </p>

                              <p className="font-semibold text-xs text-on-surface">
                                {place.averageVisitTime ?? "Not specified"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <PlaceLocationModal
        isOpen={!!selectedPlace}
        latitude={selectedPlace?.latitude ?? ""}
        longitude={selectedPlace?.longitude ?? ""}
        title={selectedPlace?.title ?? ""}
        onClose={() => setSelectedPlace(null)}
      />
    </>
  );
}
