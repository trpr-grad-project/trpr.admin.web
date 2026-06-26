import { Search, MapPinned, MapPin, ChevronDown } from "lucide-react";
import type { PlaceLookup } from "../../../types/place";

interface PlaceFiltersProps {
  title: string;
  governorateId: string;
  radius: string;

  governorates: PlaceLookup[];

  onTitleChange: (value: string) => void;
  onGovernorateChange: (value: string) => void;
  onRadiusChange: (value: string) => void;

  onChooseLocation: () => void;

  latitude?: string;
  longitude?: string;
}

export default function PlaceFilters({
  title,
  governorateId,
  radius,
  governorates,
  onTitleChange,
  onGovernorateChange,
  onRadiusChange,
  onChooseLocation,
  latitude,
  longitude,
}: PlaceFiltersProps) {
  return (
    <section className="bg-surface-container border border-outline-variant/20 rounded-xl p-6">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />

        <input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          type="text"
          placeholder="Search places..."
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Governorate */}
        <div className="relative">
          <select
            value={governorateId}
            onChange={(e) => onGovernorateChange(e.target.value)}
            className="w-full appearance-none px-4 py-3.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface font-medium shadow-sm outline-none focus:border-primary"
          >
            <option value="">All Governorates</option>

            {governorates.map((gov) => (
              <option key={gov.id} value={gov.id}>
                {gov.name}
              </option>
            ))}
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary pointer-events-none" />
        </div>

        {/* Radius */}
        <div>
          <input
            value={radius}
            onChange={(e) => onRadiusChange(e.target.value)}
            type="number"
            placeholder="Search radius (meters)"
            disabled={!latitude || !longitude}
            className="w-full px-4 py-3.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none placeholder:text-secondary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Choose on Map */}
        <button
          onClick={onChooseLocation}
          className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <MapPinned />
          <span className="font-medium">Choose on Map</span>
        </button>
      </div>

      {/* Selected Location */}
      <div className="border-t border-outline-variant/20 pt-5">
        <p className="text-xs uppercase tracking-widest text-secondary mb-2 font-bold">
          Selected Location
        </p>

        <div className="flex w-fit items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-outline-variant/40 bg-surface-container-lowest">
          <MapPin className="w-5 h-5 text-on-surface" />

          {latitude && longitude ? (
            <div className="flex gap-4">
              <span className="text-sm font-medium text-on-surface">
                Lat: {latitude}
              </span>

              <span className="text-sm font-medium text-on-surface">
                Lng: {longitude}
              </span>
            </div>
          ) : (
            <p className="text-sm font-medium text-on-surface">
              No location selected
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
