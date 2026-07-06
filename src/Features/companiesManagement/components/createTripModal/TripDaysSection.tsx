import { Plus, Trash2 } from "lucide-react";
import type { CreateCompanyTripDto } from "../../../../types/company";
import type { SegmentErrors } from "../CreateTripModal";
import PlaceSelector from "./PlaceSelector/PlaceSelector";

interface Props {
  trip: CreateCompanyTripDto;
  setTrip: React.Dispatch<React.SetStateAction<CreateCompanyTripDto>>;
  generalError?: string;
  segmentErrors: SegmentErrors[];
}

// Converts a <input type="datetime-local"> value (local time, no timezone info)
// into a proper UTC ISO string for the API.
function toUtcIso(value: string) {
  if (!value) return "";
  return new Date(value).toISOString();
}

// Converts a UTC ISO string (from the API/state) back into the local
// "YYYY-MM-DDTHH:mm" format that <input type="datetime-local"> expects.
// Without this, the input displays the raw UTC hour instead of the
// user's local hour, so the displayed time silently shifts on reopen.
function toLocalInputValue(utcIso: string) {
  if (!utcIso) return "";
  const date = new Date(utcIso);
  const localTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localTime.toISOString().slice(0, 16);
}

export default function TripDaysSection({
  trip,
  setTrip,
  generalError,
  segmentErrors,
}: Props) {
  const addDay = () => {
    setTrip((prev) => ({
      ...prev,
      segments: [
        ...prev.segments,
        {
          dayDate: "",
          duration: 0,
          placesIds: [],
        },
      ],
    }));
  };

  const removeDay = (index: number) => {
    setTrip((prev) => ({
      ...prev,
      segments: prev.segments.filter((_, i) => i !== index),
    }));
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-['Noto_Serif'] text-on-surface">
          Trip Days
        </h3>

        <button
          type="button"
          onClick={addDay}
          className="px-4 py-2 rounded-xl bg-primary text-on-primary font-semibold cursor-pointer flex items-center gap-2 hover:bg-primary/90 transition"
        >
          <Plus size={16} />
          Add Day
        </button>
      </div>

      {trip.segments.length === 0 && (
        <div
          className={`rounded-xl border border-dashed p-8 text-center text-secondary ${
            generalError ? "border-error" : "border-outline-variant/30"
          }`}
        >
          No days added yet.
        </div>
      )}

      {generalError && (
        <p className="text-xs text-error">{generalError}</p>
      )}

      <div className="space-y-6">
        {trip.segments.map((segment, index) => {
          const dayErrors = segmentErrors[index] ?? {};

          return (
            <div
              key={index}
              className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6 space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-secondary">
                  Day {index + 1}
                </span>

                <button
                  type="button"
                  onClick={() => removeDay(index)}
                  className="text-error hover:opacity-80 cursor-pointer"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Day Date
                  </label>

                  <input
                    type="datetime-local"
                    value={toLocalInputValue(segment.dayDate)}
                    onChange={(e) =>
                      setTrip((prev) => ({
                        ...prev,
                        segments: prev.segments.map((s, i) =>
                          i === index
                            ? {
                                ...s,
                                dayDate: toUtcIso(e.target.value),
                              }
                            : s
                        ),
                      }))
                    }
                    className={`w-full rounded-xl border text-on-surface bg-surface px-4 py-3 outline-none focus:border-primary ${
                      dayErrors.dayDate ? "border-error" : "border-outline-variant/30"
                    }`}
                  />

                  {dayErrors.dayDate && (
                    <p className="text-xs text-error mt-1">{dayErrors.dayDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Duration (Minutes)
                  </label>

                  <input
                    type="number"
                    value={segment.duration === 0 ? "" : segment.duration}
                    onChange={(e) =>
                      setTrip((prev) => ({
                        ...prev,
                        segments: prev.segments.map((s, i) =>
                          i === index
                            ? {
                                ...s,
                                duration:
                                  e.target.value === ""
                                    ? 0
                                    : Number(e.target.value),
                              }
                            : s
                        ),
                      }))
                    }
                    placeholder="180"
                    className={`w-full rounded-xl border text-on-surface bg-surface px-4 py-3 outline-none focus:border-primary ${
                      dayErrors.duration ? "border-error" : "border-outline-variant/30"
                    }`}
                  />

                  {dayErrors.duration && (
                    <p className="text-xs text-error mt-1">{dayErrors.duration}</p>
                  )}
                </div>
              </div>

              <div>
                <PlaceSelector
                  selectedPlaceIds={segment.placesIds}
                  onChange={(placesIds) =>
                    setTrip((prev) => ({
                      ...prev,
                      segments: prev.segments.map((s, i) =>
                        i === index
                          ? {
                              ...s,
                              placesIds,
                            }
                          : s
                      ),
                    }))
                  }
                />

                {dayErrors.placesIds && (
                  <p className="text-xs text-error mt-1">{dayErrors.placesIds}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}