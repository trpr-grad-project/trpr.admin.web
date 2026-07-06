import { useRef } from "react";
import { Calendar } from "lucide-react";

import type { CreateCompanyTripDto } from "../../../../types/company";
import type { FieldErrors } from "../CreateTripModal";

interface Props {
  trip: CreateCompanyTripDto;
  setTrip: React.Dispatch<React.SetStateAction<CreateCompanyTripDto>>;
  errors: FieldErrors;
}

function toUtcIso(value: string) {
  if (!value) return "";

  return new Date(value).toISOString();
}

// Same fix as in TripDaysSection: a stored UTC ISO string must be converted
// back to local time before it's shown in a datetime-local input, otherwise
// the displayed hour silently shifts by your timezone offset every time you reopen it.
function toLocalInputValue(utcIso: string) {
  if (!utcIso) return "";
  const date = new Date(utcIso);
  const localTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localTime.toISOString().slice(0, 16);
}

export default function ScheduleSection({ trip, setTrip, errors }: Props) {
  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold font-['Noto_Serif'] text-on-surface">
        Schedule
      </h3>

      <div className="grid grid-cols-2 gap-6">
        {/* Start Date */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Start Date
          </label>

          <div className="relative">
            <input
              ref={startDateRef}
              type="datetime-local"
              value={toLocalInputValue(trip.startDate)}
              onChange={(e) =>
                setTrip((prev) => ({
                  ...prev,
                  startDate: toUtcIso(e.target.value),
                }))
              }
              className={`w-full rounded-xl border text-on-surface bg-surface-container-low px-4 py-3 pr-11 outline-none focus:border-primary [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:w-11 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer ${
                errors.startDate ? "border-error" : "border-outline-variant/30"
              }`}
            />

            <button
              type="button"
              tabIndex={-1}
              onClick={() => startDateRef.current?.showPicker()}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none"
            >
              <Calendar size={18} />
            </button>
          </div>

          {errors.startDate && (
            <p className="text-xs text-error mt-1">{errors.startDate}</p>
          )}
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            End Date
          </label>

          <div className="relative">
            <input
              ref={endDateRef}
              type="datetime-local"
              value={toLocalInputValue(trip.endDate)}
              onChange={(e) =>
                setTrip((prev) => ({
                  ...prev,
                  endDate: toUtcIso(e.target.value),
                }))
              }
              className={`w-full rounded-xl border text-on-surface bg-surface-container-low px-4 py-3 pr-11 outline-none focus:border-primary [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:w-11 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer ${
                errors.endDate ? "border-error" : "border-outline-variant/30"
              }`}
            />

            <button
              type="button"
              tabIndex={-1}
              onClick={() => endDateRef.current?.showPicker()}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none"
            >
              <Calendar size={18} />
            </button>
          </div>

          {errors.endDate && (
            <p className="text-xs text-error mt-1">{errors.endDate}</p>
          )}
        </div>
      </div>
    </section>
  );
}