import {
  MapPinPlus,
  MapPinned,
  Search,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import AddPlaceModal from "../components/AddPlaceModal";

export default function PlacesManagement() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);


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
            onClick={() => setIsAddModalOpen(true)}
          >
            <MapPinPlus className="h-7.5 w-7.5" />
            <span>Add Place</span>
          </button>
        </div>
      </header>

      <section className="mb-10 bg-surface-container border border-outline-variant/20 rounded-xl p-6">
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
              className="px-5 py-2.5 rounded-lg border border-outline-variant/50 bg-surface-container-lowest text-on-surface font-semibold
            hover:bg-surface-container-low hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              Reset Filters
            </button>

            <button
              className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-semibold hover:opacity-90 transition-opacity cursor-pointer">
              Apply Filters
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        {/* HEADER */}
        <div className="grid grid-cols-11 px-10 font-label-sm text-secondary uppercase tracking-[0.15em] text-sm font-semibold">
          <div className="col-span-3">Place</div>
          <div className="col-span-2">Governorate</div>
          <div className="col-span-3">Tags</div>
          <div className="col-span-2">Coordinates</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* ROWS */}
        <div className="space-y-4">
          {/* ROW 1 */}
          <div
            className="grid grid-cols-11 items-center px-10 py-6 rounded-2xl bg-surface border border-outline-variant/20
            hover:bg-surface-container-lowest hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="col-span-3 flex flex-col gap-1">
              <span className="font-bold text-lg text-on-surface">
                Karnak Temple
              </span>

              <span className="text-xs text-secondary uppercase tracking-wider font-semibold">
                Ancient Monument
              </span>
            </div>

            <div className="col-span-2 font-medium text-on-surface">Luxor</div>

            <div className="col-span-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary-container/30 text-primary text-[10px] font-bold uppercase tracking-wider">
                  Historical
                </span>
                <span className="px-3 py-1 rounded-full bg-primary-container/30 text-primary text-[10px] font-bold uppercase tracking-wider">
                  UNESCO
                </span>
              </div>
            </div>

            <div className="col-span-2">
              <div className="space-y-1 text-sm">
                <div className="flex gap-2">
                  <span className="text-secondary font-medium">Lat:</span>
                  <span className="font-mono text-on-surface">25.7188</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-secondary font-medium">Lng:</span>
                  <span className="font-mono text-on-surface">32.6573</span>
                </div>
              </div>
            </div>

            <div className="col-span-1 text-right">
              <button
                className="px-4 py-2 rounded-lg border border-primary/20 text-primary font-semibold 
                hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* LOADING */}
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-28 rounded-2xl bg-surface-container animate-pulse border border-outline-variant/10"
            />
          ))}
        </div>

        {/* Modal */}
      <AddPlaceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      </section>
    </section>
  );
}
