import {
  ChevronRight,
  ArrowLeft,
  Info,
  UserRound,
  MessageSquareText,
  ScrollText,
} from "lucide-react";

export default function SupportRequest() {
  return (
    <section className="flex-1 relative">
      <header className="flex justify-between items-end">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary uppercase text-sm tracking-[0.2em]">
            <span className="font-semibold">Support</span>

            <ChevronRight className="w-3 h-3" />

            <span className="text-primary font-bold">#SUP-1001</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant/70 hover:bg-surface-container transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4 text-primary" />
            </button>

            <h2 className="text-on-surface font-bold font-['Noto_Serif'] text-[40px]">
              Support Request
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
            Unread
          </span>
        </div>
      </header>

      <div className="bg-surface-container-lowest rounded-lg mt-10 border border-outline-variant/30 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Support Information */}
          <div className="p-8 lg:border-r border-outline-variant/20">
            <div className="flex items-center gap-2 mb-6">
              <Info className="w-5 h-5 text-primary" />
              <h2 className="text-on-surface font-semibold text-lg">
                Support Information
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-label-sm text-secondary mb-1 uppercase">
                  Support ID
                </p>

                <p className="font-bold text-on-surface">SR-1024</p>
              </div>

              <div>
                <p className="text-label-sm text-secondary mb-1 uppercase">
                  Date Submitted
                </p>

                <p className="font-bold text-on-surface">
                  Oct 24, 2023, 14:32 PM
                </p>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <UserRound className="w-5 h-5 text-primary" />
              <h2 className="text-on-surface font-semibold text-lg">
                User Information
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-label-sm text-secondary mb-1 uppercase">
                  Full Name
                </p>

                <p className="font-bold text-on-surface">Hager Hassan</p>
              </div>

              <div>
                <p className="text-label-sm text-secondary mb-1 uppercase">
                  Username
                </p>

                <p className="font-bold text-on-surface">hager123@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-lg mt-10 border border-outline-variant/30 overflow-hidden">
        <div className="p-8 space-y-8">
          {/* Subject */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquareText className="text-primary w-5 h-5" />
              <h2 className="text-on-surface font-semibold text-lg">Subject</h2>
            </div>

            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-5">
              <p className="text-on-surface font-semibold text-lg">
                Suggestion for New Tourist Place
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-outline-variant/20"></div>

          {/* Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ScrollText className="text-primary w-5 h-5" />
              <h2 className="text-on-surface font-semibold text-lg">
                Description
              </h2>
            </div>

            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-6">
              <p className="text-on-surface leading-8">
                Hello TouRA Team,
                <br />
                <br />I would like to suggest adding{" "}
                <strong>Wadi El Rayan Waterfalls</strong> to the list of
                available tourist destinations. It is one of the most beautiful
                natural attractions in Egypt and is popular among both local and
                international visitors.
                <br />
                <br />
                It would be great if the place could include detailed
                information, opening hours, nearby activities, and directions on
                the map to help tourists plan their visits more easily.
                <br />
                <br />
                Thank you for your continuous efforts in improving the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
