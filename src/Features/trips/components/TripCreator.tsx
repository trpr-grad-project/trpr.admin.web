import { Mail, Phone, Star } from "lucide-react";
import type { TripDetailsResponse } from "../../../types/trip";

interface Props {
  trip: TripDetailsResponse;
}

function getRoleStyle(role: string) {
  switch (role.toLowerCase()) {
    case "admin":
      return "bg-primary-container text-on-primary-container";
    case "company":
      return "bg-tertiary-container/80 text-tertiary";
    case "guide":
      return "bg-surface-container text-on-surface-variant";
    case "user":
      return "bg-secondary-container text-secondary";
    default:
      return "bg-success-container text-success";
  }
}

export default function TripCreator({ trip }: Props) {
  const user = trip.createdByUser;

  const fullName = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

  const initials =
    `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();

  const roles = trip.creatorRoles ?? [];

  return (
    <section className="mt-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-xl shadow-secondary/3 p-8">
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
              {initials || "U"}
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h4 className="text-xl font-semibold text-on-surface">
                  {fullName || "Unknown User"}
                </h4>

                {user.rating != null && (
                  <span className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-warning-container/20 text-warning font-bold text-base">
                    <Star className="w-4 h-4" />
                    {user.rating}
                  </span>
                )}
              </div>

              <p className="text-secondary mt-2">
                {user.userName || "No username"}
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
              {user.email || "No email"}
            </p>
          </div>

          {/* Phone */}
          <div>
            <p className="text-xs uppercase tracking-widest text-secondary flex items-center gap-2 mb-3">
              <Phone className="w-4 h-4" />
              Phone
            </p>

            <p className="text-on-surface">{user.phoneNumber || "No phone"}</p>
          </div>

          {/* Roles */}
          <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-5">
            <p className="text-[10px] uppercase tracking-widest text-secondary mb-4">
              Roles
            </p>

            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${getRoleStyle(
                    role,
                  )}`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
