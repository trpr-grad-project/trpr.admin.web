import { useState } from "react";
import type { TripDetailsResponse } from "../../../types/trip";
import Participant from "./Participant";

interface Props {
  trip: TripDetailsResponse;
}

export default function ParticipantsSection({ trip }: Props) {
  const [activeTab, setActiveTab] = useState<"approved" | "pending">(
    "approved",
  );

  const participants =
    activeTab === "approved"
      ? trip.approvedParticipants
      : trip.pendingParticipants;

  return (
    <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-['Noto_Serif'] text-2xl font-bold text-on-surface">
            Participants
          </h3>

          <p className="text-secondary text-sm mt-1">
            Travelers currently registered for this trip.
          </p>
        </div>

        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
          {trip.approvedParticipants.length}/{trip.maxParticipantsCount}{" "}
          Participants
        </span>
      </div>

      {/* Tabs */}

      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setActiveTab("approved")}
          className={`px-5 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
            activeTab === "approved"
              ? "bg-primary text-surface"
              : "border border-outline-variant/30 text-on-surface hover:bg-surface-container"
          }`}
        >
          Approved ({trip.approvedParticipants.length})
        </button>

        <button
          onClick={() => setActiveTab("pending")}
          className={`px-5 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
            activeTab === "pending"
              ? "bg-primary text-surface"
              : "border border-outline-variant/30 text-on-surface hover:bg-surface-container"
          }`}
        >
          Pending ({trip.pendingParticipants.length})
        </button>
      </div>

      {/* Cards */}

      {participants.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-5">
          {participants.map((participant) => (
            <Participant key={participant.id} participant={participant} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-outline-variant/30 p-10 text-center text-secondary">
          No {activeTab} participants yet.
        </div>
      )}
    </section>
  );
}
