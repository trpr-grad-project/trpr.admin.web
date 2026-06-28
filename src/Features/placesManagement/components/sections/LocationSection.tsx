import { MapPinned } from "lucide-react";
import type { SavePlaceRequest } from "../../../../types/place";

interface LocationSectionProps {
  form: SavePlaceRequest;
  onOpenMap: () => void;
  errors: Partial<Record<keyof SavePlaceRequest, string>>;
}

export default function LocationSection({
  form,
  onOpenMap,
  errors,
}: LocationSectionProps) {
  const hasLocationError = !!errors.latitude || !!errors.longitude;

  return (
    <div className="rounded-2xl border border-outline-variant/20 p-6 bg-surface-container-low">
      <div className="flex items-center gap-2 mb-5">
        <MapPinned className="w-5 h-5 text-primary" />

        <h4 className="font-bold text-lg text-on-surface">
          Location
        </h4>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {/* Latitude */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Latitude
          </label>

          <input
            readOnly
            value={form.latitude}
            placeholder="Select from map"
            className={`w-full px-4 py-3 rounded-xl bg-surface text-on-surface outline-none transition ${
              errors.latitude
                ? "border border-error"
                : "border border-outline-variant/30"
            }`}
          />

          {errors.latitude && (
            <p className="mt-2 text-sm text-error">
              {errors.latitude}
            </p>
          )}
        </div>

        {/* Longitude */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Longitude
          </label>

          <input
            readOnly
            value={form.longitude}
            placeholder="Select from map"
            className={`w-full px-4 py-3 rounded-xl bg-surface text-on-surface outline-none transition ${
              errors.longitude
                ? "border border-error"
                : "border border-outline-variant/30"
            }`}
          />

          {errors.longitude && (
            <p className="mt-2 text-sm text-error">
              {errors.longitude}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenMap}
        className={`group w-full h-64 rounded-2xl border-2 border-dashed bg-surface flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer ${
          hasLocationError
            ? "border-error"
            : "border-outline-variant/40 hover:border-primary hover:bg-primary/5"
        }`}
      >
        <div className="w-18 h-18 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
          <MapPinned className="w-10 h-10 text-primary" />
        </div>

        <div className="space-y-1 text-center">
          <p className="text-lg font-bold text-on-surface">
            Click to Select Location
          </p>

          <p className="text-sm text-secondary">
            Choose the place on the map to automatically fill latitude and
            longitude.
          </p>
        </div>

        <div className="mt-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold group-hover:bg-primary group-hover:text-on-primary transition-all">
          Open Map
        </div>
      </button>

      {hasLocationError && (
        <p className="mt-3 text-sm text-error">
          Please choose a location from the map.
        </p>
      )}
    </div>
  );
}