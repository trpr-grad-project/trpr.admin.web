import { Mail, Phone } from "lucide-react";
import type { TripUser } from "../../../types/trip";

interface Props {
  participant: TripUser;
}

export default function Participant({ participant }: Props) {
  const initials = `${participant.firstName.charAt(0)}${participant.lastName.charAt(0)}`;

  return (
    <div className="rounded-2xl border border-outline-variant/20 bg-surface p-6">
      <div className="flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
            {initials}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-semibold text-on-surface">
                {participant.firstName} {participant.lastName}
              </h4>

              <span className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-warning-container/20 font-bold text-base text-on-surface">
                ⭐ {participant.rating}
              </span>
            </div>

            <p className="text-secondary mt-2">@{participant.userName}</p>
          </div>
        </div>

        {/* Right */}

        <div className="space-y-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-secondary flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </p>

            <p className="text-on-surface">{participant.email ?? "-"}</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-secondary flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone
            </p>

            <p className="text-on-surface">{participant.phoneNumber ?? "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
