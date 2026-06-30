import { Mail, Phone } from "lucide-react";

export default function TripCreator() {
  return (
<section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/5 p-8">
  <div className="mb-8">
    <h3 className="font-['Noto_Serif'] text-2xl font-bold text-on-surface">
      Trip Creator
    </h3>

    <p className="text-secondary text-sm mt-1">
      User who submitted this trip request.
    </p>
  </div>

  <div className="rounded-2xl border border-outline-variant/20 bg-surface p-6">
    <div className="grid md:grid-cols-[2fr_1.2fr_1fr_1.3fr] gap-4 items-center">

      {/* Creator */}

      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
          AH
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h4 className="text-xl font-semibold text-on-surface">
              Ahmed Hassan
            </h4>

            <span className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-warning-container/20 text-warning font-bold text-base">
              ⭐ 4.8
            </span>
          </div>

          <p className="text-secondary mt-2">
            ahmedhassan
          </p>
        </div>
      </div>

      {/* Email */}

      <div>
        <p className="text-xs uppercase tracking-widest text-secondary flex items-center gap-2 mb-3">
          <Mail className="w-4 h-4" />
          Email
        </p>

        <p className="text-on-surface break-all">
          ahmed@gmail.com
        </p>
      </div>

      {/* Phone */}

      <div>
        <p className="text-xs uppercase tracking-widest text-secondary flex items-center gap-2 mb-3">
          <Phone className="w-4 h-4" />
          Phone
        </p>

        <p className="text-on-surface">
          +20 10 1234 5678
        </p>
      </div>

      {/* Roles */}

      <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-5">
        <p className="text-[10px] uppercase tracking-widest text-secondary mb-4">
          Roles
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
            Guide
          </span>

          <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold">
            Traveler
          </span>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}