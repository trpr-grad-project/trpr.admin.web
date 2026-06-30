import {
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import TripCreator from "../components/TripCreator";
import TripItinerary from "../components/TripItinerary";
import ParticipantsSection from "../components/ParticipantsSection";
import GuideBiddings from "../components/GuideBiddings";
import ReviewDecision from "../components/ReviewDecision";
import RejectionReason from "../components/RejectionReason";

export default function TripDetails() {
  return (
    <section className="flex-1 relative">
      <header className="flex justify-between items-end">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary uppercase text-sm tracking-[0.2em]">
            <span className="font-semibold">Requests</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-bold">#4dc6c5e4</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant/70 hover:bg-surface-container transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4 text-primary" />
            </button>
            <h2 className="text-on-surface font-bold font-['Noto_Serif'] text-[40px]">
              Trip Details
            </h2>
          </div>
        </div>

        <div className="flex gap-4">
          <span
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 border bg-tertiary/10 text-secondary border-tertiary-container/30`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse bg-tertiary`}
            ></span>
            UnderReview
          </span>
        </div>
      </header>

      <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="h-95">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
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

                <h4 className="mt-1 font-bold text-on-surface">Adventure</h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Price
                </p>

                <h4 className="mt-1 font-bold text-on-surface">1500 EGP</h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Duration
                </p>

                <h4 className="mt-1 font-bold text-on-surface">1 Day</h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-secondary">
                  Participants
                </p>

                <h4 className="mt-1 font-bold text-on-surface">20</h4>
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

      <TripCreator/>

      <TripItinerary />

      <ParticipantsSection/>

      <GuideBiddings/>

      <ReviewDecision/>

      <RejectionReason/>
    </section>
  );
}
