import {
  MapPinPlus,
  MapPinned,
  Search,
  Funnel,
  RotateCcw,
  MapPin,
  ChevronDown,
} from "lucide-react";

export default function PlacesManagement() {
  return (
    <section className="flex-1 flex flex-col">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
            Places Management
          </h2>
          <p className="text-secondary font-['Noto_Serif'] italic text-sm">
            Manage tourist destinations, locations, and geographic data across
            the TouRA platform.
          </p>
        </div>

        <div>
          <button
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-bold text-lg shadow-lg shadow-primary/10 cursor-pointer
            hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MapPinPlus className="h-7.5 w-7.5" />
            <span>Add Place</span>
          </button>
        </div>
      </header>

      <section className="mb-8 bg-surface-container border border-outline-variant/20 rounded-xl p-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />

          <input
            type="text"
            placeholder="Search places..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Governorate */}
          <div className="relative">
            <select
              className="w-full appearance-none px-4 py-3.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface font-medium shadow-sm outline-0
            focus:border-primary"
            >
              <option>Select Government</option>
            </select>

            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5.5 h-5.5 text-secondary pointer-events-none" />
          </div>

          {/* Radius */}
          <div className="relative">
            <input
              type="number"
              placeholder="Search radius (meters)"
              className="w-full px-4 py-3.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-0
              placeholder:text-secondary
              focus:border-primary"
            />
          </div>

          {/* Map Location */}
          <button
            className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl border border-primary/20 bg-primary/5 text-primary 
            hover:bg-primary/10 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <MapPinned />
            <p className="leading-none font-medium">Choose on Map</p>
          </button>
        </div>

        {/* Selected Location + Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-t border-outline-variant/20 pt-5">
          {/* <div>
            <p className="text-xs uppercase tracking-widest text-secondary mb-2 font-bold">
              Selected Location
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Lat: 29.9773
              </span>

              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Lng: 31.1325
              </span>
            </div>
          </div> */}
          <div>
            <p className="text-xs uppercase tracking-widest text-secondary mb-2 font-bold">
              Selected Location
            </p>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-outline-variant/40 bg-surface-container-lowest">
              <MapPin className="w-5 h-5 text-on-surface" />

              <div>
                <p className="text-sm font-medium text-on-surface">
                  No location selected
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              className="px-5 py-2.5 rounded-lg border border-outline-variant/50 bg-surface-container-lowest text-on-surface font-semibold flex items-center gap-2
            hover:bg-surface-container-low hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <RotateCcw />
              <span>Reset Filters</span>
            </button>

            <button
              className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-semibold hover:opacity-90 transition-opacity cursor-pointer
            flex items-center gap-2"
            >
              <Funnel />
              <span>Apply Filters</span>
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {/* HEADER ROW */}
        <div className="grid grid-cols-12 px-10 mb-4 font-label-sm text-outline uppercase tracking-widest text-[11px]">
          <div className="col-span-4">Place Title & Category</div>
          <div className="col-span-2">Governorate</div>
          <div className="col-span-3">Tags</div>
          <div className="col-span-2">Coordinates (Lat / Lon)</div>

          {/* ✅ Actions column مستقل */}
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* ROWS */}
        <div className="space-y-3">
          {/* ROW 1 */}
          <div className="grid grid-cols-12 items-center bg-surface-container-low px-10 py-6 rounded-2xl border border-outline-variant/10">
            <div className="col-span-4 flex flex-col gap-1">
              <span className="font-h3 text-[18px]">Karnak Temple</span>
              <span className="text-label-sm text-secondary uppercase tracking-wider font-semibold opacity-70">
                Ancient Monument
              </span>
            </div>

            <div className="col-span-2 text-on-surface-variant font-medium">
              Luxor
            </div>

            <div className="col-span-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full border">
                  Historical
                </span>
                <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full border">
                  UNESCO
                </span>
              </div>
            </div>

            <div className="col-span-2 font-mono text-[13px] text-outline leading-tight">
              <div>Lat: 25.7188° N</div>
              <div>Lon: 32.6573° E</div>
            </div>

            {/* ✅ Actions column */}
            <div className="col-span-1 text-right">
              <button className="text-primary font-bold hover:underline">
                Edit
              </button>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-12 items-center bg-surface-container-low px-10 py-6 rounded-2xl border border-outline-variant/10">
            <div className="col-span-4 flex flex-col gap-1">
              <span className="font-h3 text-[18px]">Giza Plateau</span>
              <span className="text-label-sm text-secondary uppercase tracking-wider font-semibold opacity-70">
                Wonder of the World
              </span>
            </div>

            <div className="col-span-2">Giza</div>

            <div className="col-span-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full border">
                  Pyramids
                </span>
              </div>
            </div>

            <div className="col-span-2 font-mono text-[13px]">
              <div>Lat: 29.9792° N</div>
              <div>Lon: 31.1342° E</div>
            </div>

            {/* ✅ Actions */}
            <div className="col-span-1 text-right">
              <button className="text-primary font-bold hover:underline">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Empty state */}
        <div className="hidden flex-col items-center justify-center py-24 text-center">
          No places found
        </div>

        {/* Loading */}
        <div className="pt-16 pb-12 flex flex-col items-center justify-center">
          Loading...
        </div>
      </section>
    </section>
  );
}
