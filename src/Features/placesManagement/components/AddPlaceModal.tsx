import { X, MapPinned, FileText, Building2, Tag } from "lucide-react";
import { useEffect } from "react";

interface AddPlaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddPlaceModal({ isOpen, onClose }: AddPlaceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/20">
          <div>
            <h3 className="text-2xl font-bold text-on-surface">
              Add New Place
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-secondary rounded-full w-9 h-9 flex items-center justify-center hover:bg-secondary-container transition cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Basic Information */}
          <div className="rounded-2xl border border-outline-variant/20 p-6 bg-surface-container-low">
            <div className="flex items-center gap-2 mb-5">
              <FileText className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-lg text-on-surface">
                Basic Information
              </h4>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="Enter place title"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface text-on-surface outline-0 transition focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
                  Description
                </label>

                <textarea
                  rows={5}
                  placeholder="Describe the place..."
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface text-on-surface outline-0 transition resize-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Classification */}
          <div className="rounded-2xl border border-outline-variant/20 p-6 bg-surface-container-low">
            <div className="flex items-center gap-2 mb-5">
              <Building2 className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-lg text-on-surface">
                Classification
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
                  Category
                </label>

                <select
                  className="w-full appearance-none px-4 py-3.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface font-medium shadow-sm outline-0
                focus:border-primary"
                >
                  <option>Select Category</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
                  Governorate
                </label>

                <select
                  className="w-full appearance-none px-4 py-3.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface font-medium shadow-sm outline-0
            focus:border-primary"
                >
                  <option>Select Government</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-secondary font-bold mb-2">
                <Tag className="w-4 h-4" />
                Tags (Multi-select)
              </label>

              <div className="min-h-14 rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 flex items-center text-secondary">
                Tags selector will be added here
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-outline-variant/20 p-6 bg-surface-container-low">
            <div className="flex items-center gap-2 mb-5">
              <MapPinned className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-lg text-on-surface">Location</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
                  Latitude
                </label>

                <input
                  readOnly
                  value=""
                  placeholder="Select from map"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface text-on-surface"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
                  Longitude
                </label>

                <input
                  readOnly
                  value=""
                  placeholder="Select from map"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface text-on-surface"
                />
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 transition-colors cursor-pointer"
            >
              <MapPinned className="w-5 h-5" />
              Select Location From Map
            </button>

            <div className="mt-5 rounded-xl border border-dashed border-outline-variant/40 bg-surface h-40 flex flex-col items-center justify-center">
              <MapPinned className="w-8 h-8 text-secondary mb-2" />

              <p className="font-semibold text-on-surface">
                No Location Selected
              </p>

              <p className="text-sm text-secondary">
                Choose a location from the map.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-outline-variant/20 bg-surface-container-low">
          <div className="max-w-lg mx-auto flex gap-12">
            <button
              onClick={onClose}
              className="flex-1 border border-outline-variant/30 text-secondary py-3.5 px-6 rounded-xl
      font-semibold hover:bg-surface-container transition-all cursor-pointer"
            >
              Cancel
            </button>

            <button
              className="flex-1 bg-primary text-on-primary py-3.5 px-6 rounded-xl font-bold text-base
      hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Save Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
