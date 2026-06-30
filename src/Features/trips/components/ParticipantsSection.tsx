import { Mail, Phone } from "lucide-react";

export default function ParticipantsSection() {
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
          12 Total
        </span>
      </div>

      {/* Tabs */}

      <div className="flex gap-3 mb-8">
        <button className="px-5 py-3 rounded-xl bg-primary text-surface font-semibold cursor-pointer transition-all hover:opacity-90">
          Approved (8)
        </button>

        <button className="px-5 py-3 rounded-xl border text-on-surface font-semibold border-outline-variant/30 hover:bg-surface-container transition-colors cursor-pointer">
          Pending (4)
        </button>
      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-outline-variant/20 bg-surface p-6">
          <div className="flex justify-between items-center">
            {/* Left */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                AH
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <h4 className="text-lg font-semibold text-on-surface">
                    Ahmed Hassan
                  </h4>

                  <span className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-warning-container/20 text-warning font-bold text-base text-on-surface">
                    ⭐ 4.8
                  </span>
                </div>

                <p className="text-secondary mt-2">@ahmedhassan</p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-secondary flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </p>

                <p className="text-on-surface">ahmed@gmail.com</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-secondary flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </p>

                <p className="text-on-surface">+20 10 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
