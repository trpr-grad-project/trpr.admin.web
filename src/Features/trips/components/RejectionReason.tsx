import { CircleAlert } from "lucide-react";

export default function RejectionReason() {
  return (
    <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 p-8">
      <div className="mb-6">
        <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">
          Rejection Reason
        </h3>

        <p className="text-secondary text-sm mt-1">
          This trip request has been rejected. Reviewer comment below.
        </p>
      </div>

      <div className="rounded-2xl border border-error/20 bg-error-container/10 p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-error/15 flex items-center justify-center shrink-0">
            <CircleAlert className="w-5 h-5 text-error" />
          </div>

          <div>
            <h4 className="text-lg font-bold text-on-surface">
              Reviewer Comment
            </h4>

            <p className="text-secondary text-sm mt-1">
              Reason provided by reviewer when rejecting this trip.
            </p>
          </div>
        </div>

        {/* Reason box */}
        <div className="rounded-xl bg-surface border border-outline-variant/20 p-4">
          <p className="text-on-surface text-sm leading-7">
            No rejection reason provided.
          </p>
        </div>
      </div>
    </section>
  );
}