import { ChevronDown } from "lucide-react";

import { useGetTripsFormDataQuery } from "../../../../store/api/tripsApi";
import { useGetCompanyGuidesQuery } from "../../../../store/api/companiesApi";

import type { CreateCompanyTripDto } from "../../../../types/company";
import type { FieldErrors } from "../CreateTripModal";

interface Props {
  trip: CreateCompanyTripDto;
  setTrip: React.Dispatch<React.SetStateAction<CreateCompanyTripDto>>;
  errors: FieldErrors;
}

export default function BasicInfoSection({ trip, setTrip, errors }: Props) {
  const { data: formData, isLoading } = useGetTripsFormDataQuery();

  const { data: guides, isLoading: guidesLoading } = useGetCompanyGuidesQuery();

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold font-['Noto_Serif'] text-on-surface">
        Basic Info
      </h3>

      <div className="grid grid-cols-2 gap-6">
        {/* Title */}
        <div className="col-span-2">
          <label className="block text-sm font-semibold text-primary mb-2">
            Trip Title
          </label>

          <input
            type="text"
            value={trip.title}
            onChange={(e) =>
              setTrip((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            placeholder="e.g. Cairo Historical Tour"
            className={`w-full rounded-xl border text-on-surface bg-surface-container-low px-4 py-3 outline-none focus:border-primary ${
              errors.title ? "border-error" : "border-outline-variant/30"
            }`}
          />

          {errors.title && (
            <p className="text-xs text-error mt-1">{errors.title}</p>
          )}
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-sm font-semibold text-primary mb-2">
            Description
          </label>

          <textarea
            rows={3}
            value={trip.description}
            onChange={(e) =>
              setTrip((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeholder="Description of the trip..."
            className={`w-full rounded-xl border text-on-surface bg-surface-container-low px-4 py-3 outline-none focus:border-primary resize-none ${
              errors.description ? "border-error" : "border-outline-variant/30"
            }`}
          />

          {errors.description && (
            <p className="text-xs text-error mt-1">{errors.description}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Price
          </label>

          <input
            type="number"
            value={trip.price === 0 ? "" : trip.price}
            onChange={(e) =>
              setTrip((prev) => ({
                ...prev,
                price: e.target.value === "" ? 0 : Number(e.target.value),
              }))
            }
            placeholder="e.g. 500 EGP"
            className={`w-full rounded-xl border text-on-surface bg-surface-container-low px-4 py-3 outline-none focus:border-primary ${
              errors.price ? "border-error" : "border-outline-variant/30"
            }`}
          />

          {errors.price && (
            <p className="text-xs text-error mt-1">{errors.price}</p>
          )}
        </div>

        {/* Participants */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Max Participants
          </label>

          <input
            type="number"
            value={
              trip.maxParticipantsCount === 0 ? "" : trip.maxParticipantsCount
            }
            onChange={(e) =>
              setTrip((prev) => ({
                ...prev,
                maxParticipantsCount:
                  e.target.value === "" ? 0 : Number(e.target.value),
              }))
            }
            placeholder="e.g. 20"
            className={`w-full rounded-xl border text-on-surface bg-surface-container-low px-4 py-3 outline-none focus:border-primary ${
              errors.maxParticipantsCount
                ? "border-error"
                : "border-outline-variant/30"
            }`}
          />

          {errors.maxParticipantsCount && (
            <p className="text-xs text-error mt-1">
              {errors.maxParticipantsCount}
            </p>
          )}
        </div>

        {/* Guide */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Guide
          </label>

          <div className="relative">
            <select
              value={trip.guideId}
              onChange={(e) =>
                setTrip((prev) => ({
                  ...prev,
                  guideId: e.target.value,
                }))
              }
              className="
                appearance-none
                w-full
                rounded-xl
                border
                border-outline-variant/30
                bg-surface-container-low
                px-4
                py-3
                pr-10
                outline-none
                focus:border-primary
                cursor-pointer
                text-on-surface
              "
            >
              <option value="">
                {guidesLoading ? "Loading guides..." : "Select a guide"}
              </option>

              {guides?.map((guide) => (
                <option key={guide.id} value={guide.id}>
                  {guide.userName}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
            />
          </div>
        </div>

        {/* Theme */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Theme
          </label>

          <div className="relative">
            <select
              value={trip.themeId || ""}
              onChange={(e) =>
                setTrip((prev) => ({
                  ...prev,
                  themeId: Number(e.target.value),
                }))
              }
              className={`
                appearance-none
                w-full
                rounded-xl
                border
                bg-surface-container-low
                px-4
                py-3
                pr-10
                outline-none
                focus:border-primary
                cursor-pointer
                text-on-surface
                ${errors.themeId ? "border-error" : "border-outline-variant/30"}
              `}
            >
              <option value="">
                {isLoading ? "Loading themes..." : "Select a theme"}
              </option>

              {formData?.themes.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.name}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
            />
          </div>

          {errors.themeId && (
            <p className="text-xs text-error mt-1">{errors.themeId}</p>
          )}
        </div>

        {/* Auto Approve */}
        <div className="col-span-2 flex items-center justify-between rounded-xl border border-outline-variant/30 bg-surface-container-low px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-on-surface">
              Auto Approve Bookings
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={trip.autoApprove}
            onClick={() =>
              setTrip((prev) => ({
                ...prev,
                autoApprove: !prev.autoApprove,
              }))
            }
            className={`w-12 h-7 rounded-full relative transition cursor-pointer ${
              trip.autoApprove ? "bg-primary" : "bg-gray-400"
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition ${
                trip.autoApprove ? "right-1" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
