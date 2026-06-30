import { Search, ChevronDown, MapPinned, MapPin } from "lucide-react";
import type { TripLookup } from "../../../types/trip";
import type { PlaceLookup } from "../../../types/place";

interface Props {
  filters: {
    title: string;
    themeId: string;
    governorateId: string;
    status: string;
    minPrice: string;
    maxPrice: string;
    latitude: string;
    longitude: string;
    radiusInMeters: string;
    tripType: string;
  };

  themes: TripLookup[];

  governorates: PlaceLookup[];

  onFilterChange: (key: string, value: string) => void;

  onChooseLocation: () => void;
}

export default function TripFilters({
  filters,
  themes,
  governorates,
  onFilterChange,
  onChooseLocation,
}: Props) {
  return (
    <section className="bg-surface-container border border-outline-variant/20 rounded-xl p-6">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />

        <input
          value={filters.title}
          onChange={(e) => onFilterChange("title", e.target.value)}
          type="text"
          placeholder="Search trips..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Main Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Theme */}
        <div className="relative">
          <select
            value={filters.themeId}
            onChange={(e) => onFilterChange("themeId", e.target.value)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none focus:border-primary"
          >
            <option value="">All Themes</option>

            {themes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            ))}
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary pointer-events-none" />
        </div>

        {/* Governorate */}
        <div className="relative">
          <select
            value={filters.governorateId}
            onChange={(e) => onFilterChange("governorateId", e.target.value)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none focus:border-primary"
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

        {/* Status */}
        <div className="relative">
          <select
            value={filters.status}
            onChange={(e) => onFilterChange("status", e.target.value)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none focus:border-primary"
          >
            <option value="">All Statuses</option>
            <option value="1">Under Review</option>
            <option value="2">Published</option>
            <option value="3">Bidding</option>
            <option value="4">Ready</option>
            <option value="5">Started</option>
            <option value="6">Finished</option>
            <option value="7">Rejected</option>
            <option value="8">Canceled</option>
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary pointer-events-none" />
        </div>

        {/* Trip Type */}
        <div className="relative">
          <select
            value={filters.tripType}
            onChange={(e) => onFilterChange("tripType", e.target.value)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none focus:border-primary"
          >
            <option value="">All Trip Types</option>
            <option value="0">Shared</option>
            <option value="1">By Company</option>
            <option value="2">By Guides</option>
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary pointer-events-none" />
        </div>
      </div>

      {/* Price */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          value={filters.minPrice}
          onChange={(e) => onFilterChange("minPrice", e.target.value)}
          type="number"
          placeholder="Minimum Price"
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none placeholder:text-secondary focus:border-primary"
        />

        <input
          value={filters.maxPrice}
          onChange={(e) => onFilterChange("maxPrice", e.target.value)}
          type="number"
          placeholder="Maximum Price"
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none placeholder:text-secondary focus:border-primary"
        />
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          value={filters.radiusInMeters}
          onChange={(e) => onFilterChange("radiusInMeters", e.target.value)}
          type="number"
          placeholder="Radius (meters)"
          disabled={!filters.latitude || !filters.longitude}
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none placeholder:text-secondary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
        />

        <button
          type="button"
          onClick={onChooseLocation}
          className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all cursor-pointer"
        >
          <MapPinned className="w-5 h-5" />
          <span className="font-medium">Choose on Map</span>
        </button>
      </div>

      {/* Selected Location */}
      <div className="border-t border-outline-variant/20 pt-5">
        <p className="text-xs uppercase tracking-widest text-secondary mb-2 font-bold">
          Selected Location
        </p>

        <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest">
          <MapPin className="w-5 h-5 text-primary" />

          {filters.latitude && filters.longitude ? (
            <div className="flex gap-6">
              <span className="text-sm font-medium text-on-surface">
                Lat: {filters.latitude}
              </span>

              <span className="text-sm font-medium text-on-surface">
                Lng: {filters.longitude}
              </span>
            </div>
          ) : (
            <span className="text-sm text-secondary">No location selected</span>
          )}
        </div>
      </div>
    </section>
  );
}
