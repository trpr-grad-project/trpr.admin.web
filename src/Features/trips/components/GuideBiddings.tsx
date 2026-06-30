export default function GuideBiddings() {
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
          3 Proposals
        </span>
      </div>

      <div className="space-y-5">
        {/* Proposal Card */}

        <div className="rounded-2xl border border-outline-variant/20 bg-surface p-6">
          {/* Header */}

          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                AH
              </div>

              <div>
                <h4 className="text-lg font-semibold text-on-surface">
                  Ahmed Hassan
                </h4>

                <p className="text-secondary mt-1">ahmedhassan</p>

                <p className="text-xs text-secondary font-mono mt-1">
                  ID: 123e4567-e89b-12d3-a456-426614174000
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold text-on-surface">1500 EGP</p>

              <p className="text-xs text-secondary mt-1">Proposed Price</p>
            </div>
          </div>

          {/* Divider */}

          <div className="border-t border-outline-variant/20 my-6"></div>

          {/* Info */}

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary">
                Submitted
              </p>

              <p className="text-on-surface mt-1">30 Jun 2026</p>
            </div>
          </div>

          {/* Proposal */}

          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-widest text-secondary mb-3">
              Proposal Message
            </p>

            <div className="rounded-xl bg-surface-container p-5">
              <p className="leading-7 text-on-surface">
                I have extensive experience guiding historical tours in Upper
                Egypt and can provide a rich cultural experience for
                participants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
