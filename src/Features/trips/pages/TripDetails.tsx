import { useParams, useNavigate } from "react-router-dom";
import { useGetTripDetailsQuery } from "../../../store/api/tripsApi";
import { ChevronRight, ArrowLeft } from "lucide-react";

import TripCreator from "../components/TripCreator";
import TripItinerary from "../components/TripItinerary";
import ParticipantsSection from "../components/ParticipantsSection";
import GuideBiddings from "../components/GuideBiddings";
import ReviewDecision from "../components/ReviewDecision";
import RejectionReason from "../components/RejectionReason";
import TripOverview from "../components/TripOverview";

function getStatusBadgeStyles(status: number): string {
  switch (status) {
    case 1: // UnderReview
      return "bg-warning-container/20 text-warning border-warning-container/40";

    case 2: // Published
      return "bg-primary-container/20 text-primary border-primary-container/40";

    case 3: // Bidding
      return "bg-tertiary/10 text-tertiary border-tertiary-container/30";

    case 4: // Ready
      return "bg-secondary-container/30 text-secondary border-secondary-container/40";

    case 5: // Started
      return "bg-success-container/20 text-success border-success-container/30";

    case 6: // Finished
      return "bg-success/10 text-success border-success/30";

    case 7: // Rejected
      return "bg-error-container/20 text-error border-error-container/40";

    case 8: // Canceled
      return "bg-surface-container-high text-on-surface-variant border-outline-variant/40";

    default:
      return "bg-surface-container text-on-surface border-outline-variant";
  }
}

function getStatusDot(status: number): string {
  switch (status) {
    case 5:
    case 6:
      return "bg-success";

    case 7:
      return "bg-error";

    case 1:
      return "bg-warning";

    default:
      return "bg-tertiary";
  }
}

export default function TripDetails() {
  const { tripId } = useParams();
  const navigate = useNavigate();

  const { data: trip, isLoading, isError } = useGetTripDetailsQuery(tripId!);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        Loading...
      </div>
    );
  }

  if (isError || !trip) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        Failed to load trip.
      </div>
    );
  }

  console.log(trip)

  return (
    <section className="flex-1 relative">
      <header className="flex justify-between items-end">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary uppercase text-sm tracking-[0.2em]">
            <span className="font-semibold">Trips</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-bold">
              #{trip.id.slice(0, 8)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant/70 hover:bg-surface-container transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
            </button>

            <h2 className="text-on-surface font-bold font-['Noto_Serif'] text-[40px]">
              Trip Details
            </h2>
          </div>
        </div>

        {/* STATUS BADGE */}
        <div className="flex gap-4">
          <span
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 border ${getStatusBadgeStyles(
              trip.status,
            )}`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${getStatusDot(
                trip.status,
              )}`}
            />
            {trip.status}
          </span>
        </div>
      </header>

      <TripOverview trip={trip} />

      <TripCreator trip={trip}/>

      <TripItinerary />

      <ParticipantsSection trip={trip}/>

      <GuideBiddings />

      <ReviewDecision />

      <RejectionReason />
    </section>
  );
}
