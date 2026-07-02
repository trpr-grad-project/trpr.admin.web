import { useState } from "react";
import { useChangeTripStatusMutation } from "../../../store/api/tripsApi";

interface Props {
  tripId: string;
}

export default function ReviewDecision({ tripId }: Props) {
  const [reason, setReason] = useState("");

  const [changeTripStatus, { isLoading }] = useChangeTripStatusMutation();

  const handleApprove = async () => {
    try {
      await changeTripStatus({
        id: tripId,
        isApproved: true,
        rejectionReason: null,
      }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async () => {
    try {
      await changeTripStatus({
        id: tripId,
        isApproved: false,
        rejectionReason: reason.trim() || null,
      }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 p-8">
      <div className="mb-6">
        <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">
          Review Decision
        </h3>

        <p className="text-secondary text-sm mt-1">
          Review this trip carefully before approving or rejecting it.
        </p>
      </div>

      <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Approve */}
          <div className="flex flex-col justify-between gap-5">
            <div>
              <h4 className="text-lg font-bold text-on-surface">
                Approve Trip
              </h4>

              <p className="text-secondary text-sm mt-2 leading-6">
                Publish this trip request and move it forward.
              </p>
            </div>

            <button
              onClick={handleApprove}
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-primary text-surface font-bold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "Processing..." : "Approve Trip"}
            </button>
          </div>

          {/* Reject */}
          <div className="space-y-4 border-l border-outline-variant/20 pl-6">
            <h4 className="text-lg font-bold text-on-surface">Reject Trip</h4>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 block">
                Reason (Required)
              </label>

              <textarea
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="State clearly why the trip was rejected..."
                className="w-full rounded-xl border border-outline-variant/30 bg-surface px-3 py-2 text-sm outline-none resize-none text-on-surface"
              />
            </div>

            <button
              onClick={handleReject}
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-error text-surface font-bold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "Processing..." : "Reject Trip"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
