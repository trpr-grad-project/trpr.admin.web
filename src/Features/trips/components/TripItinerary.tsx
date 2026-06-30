import { ChevronDown, MapPin } from 'lucide-react'

export default function TripItinerary() {
  return (
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
        {/* Day */}

        <div className="rounded-xl border border-outline-variant/50 overflow-hidden">
          {/* Header */}

          <div className="flex justify-between items-center bg-surface-container px-6 py-5 cursor-pointer">
            <div>
              <h4 className="font-bold text-on-surface">Day 1</h4>

              <p className="text-secondary text-sm">Duration • 8 Hours</p>
            </div>

            <ChevronDown className="text-secondary" />
          </div>

          {/* Places */}

          <div className="divide-y divide-outline-variant/10">
            {/* Place */}

            <div className="p-6">
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1">
                  {/* Top */}

                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-lg text-on-surface">
                        Abu Simbel Temple
                      </h5>

                      <p className="text-secondary text-sm mt-1">
                        Temple • Aswan
                      </p>
                    </div>

                    <button className="text-primary text-[15px] font-semibold transition-all hover:underline cursor-pointer">
                      View on Map
                    </button>
                  </div>

                  {/* Description */}

                  <p className="text-sm text-secondary mt-5 leading-7">
                    One of the most famous archaeological temples in Egypt.
                  </p>

                  {/* Tags */}

                  <div className="flex flex-wrap gap-2 mt-5">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                      History
                    </span>

                    <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs">
                      Culture
                    </span>

                    <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs">
                      UNESCO
                    </span>
                  </div>

                  {/* Bottom */}

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-outline-variant/15">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-secondary mb-1">
                        Average Visit
                      </p>

                      <p className="font-semibold text-on-surface">
                        40 Minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
