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
import TripOverview from "../components/TripOverview";

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

      <TripOverview/>

      <TripCreator/>

      <TripItinerary />

      <ParticipantsSection/>

      <GuideBiddings/>

      <ReviewDecision/>

      <RejectionReason/>
    </section>
  );
}
