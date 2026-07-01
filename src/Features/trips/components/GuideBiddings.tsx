import type { TripDetailsResponse } from "../../../types/trip";

interface Props {
  trip: TripDetailsResponse;
}

export default function GuideBiddings({ trip }: Props) {
  const bids = trip.biddingsPage?.items ?? [];

  return (
    <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-['Noto_Serif'] text-2xl font-bold text-on-surface">
            Guide Biddings
          </h3>

          <p className="text-secondary text-sm mt-1">
            Guides who submitted proposals for this trip.
          </p>
        </div>

        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
          {bids.length} Proposal{bids.length !== 1 ? "s" : ""}
        </span>
      </div>

      {bids.length === 0 ? (
        <div className="rounded-xl border border-dashed border-outline-variant/30 p-10 text-center text-secondary">
          No guide proposals submitted yet.
        </div>
      ) : (
        <div className="space-y-5">
          {bids.map((bid) => (
            <div
              key={bid.id}
              className="rounded-2xl border border-outline-variant/20 bg-surface p-6"
            >
              {/* Header */}

              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {`${bid.guideFirstName?.[0] ?? ""}${
                      bid.guideLastName?.[0] ?? ""
                    }`}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-on-surface">
                      {bid.guideFirstName} {bid.guideLastName}
                    </h4>

                    <p className="text-secondary mt-1">{bid.guideUsername}</p>

                    <p className="text-xs text-secondary font-mono mt-1">
                      ID: {bid.guideId}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-on-surface">
                    {bid.proposedPrice} EGP
                  </p>

                  <p className="text-xs text-secondary mt-1">Proposed Price</p>
                </div>
              </div>

              {/* Divider */}

              <div className="border-t border-outline-variant/20 my-6"></div>

              {/* Info */}

              <div>
                <p className="text-[10px] uppercase tracking-widest text-secondary">
                  Submitted
                </p>

                <p className="text-on-surface mt-1">
                  {new Date(bid.createdAtUTC).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Proposal */}

              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-widest text-secondary mb-3">
                  Proposal Message
                </p>

                <div className="rounded-xl bg-surface-container p-5">
                  <p className="leading-7 text-on-surface">
                    {bid.proposalMessage || "No proposal message."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
