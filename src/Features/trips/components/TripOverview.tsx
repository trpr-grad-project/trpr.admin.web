import {
  CalendarDays,
  Clock3,
  Eye,
  Globe,
  Tag,
  Users,
} from "lucide-react";

export default function TripOverview() {
  return (
    <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 overflow-hidden">
      <div className="grid lg:grid-cols-[420px_1fr]">

        {/* Image */}

        <div className="min-h-90">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}

        <div className="p-8">

          <div className="flex justify-between items-start gap-8">

            <div>

              <h3 className="font-['Noto_Serif'] text-3xl font-bold text-on-surface">
                Ancient Aswan Discovery
              </h3>

              <p className="text-secondary leading-8 mt-4">
                Explore the timeless wonders of Aswan, including Philae Temple
                and Abu Simbel while enjoying one unforgettable day filled with
                history and culture.
              </p>

            </div>

            <span className="px-5 py-3 rounded-xl bg-primary text-surface font-bold whitespace-nowrap">
              1500 EGP
            </span>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 mt-10">

            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary mb-2">
                Theme
              </p>

              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-on-surface">
                  Historical
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary mb-2">
                Visibility
              </p>

              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-on-surface">
                  Public
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary mb-2">
                Publish Mode
              </p>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-on-surface">
                  Bidding
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary mb-2">
                Start Date
              </p>

              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-primary" />
                <span className="text-on-surface">
                  15 Jul 2026
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary mb-2">
                Duration
              </p>

              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-primary" />
                <span className="text-on-surface">
                  1 Day
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary mb-2">
                Participants
              </p>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-on-surface">
                  8 / 20
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary mb-2">
                Created At
              </p>

              <span className="text-on-surface">
                30 Jun 2026
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}