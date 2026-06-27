import { X } from "lucide-react";
import { useEffect } from "react";
import LeafletMap from "./LeafletMap";
import MapControls from "./MapControls";

interface MapPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;

  latitude?: string;
  longitude?: string;

  onLocationChange: (lat: string, lng: string) => void;
}

export default function MapPickerModal({
  isOpen,
  onClose,
  onConfirm,
  latitude,
  longitude,
  onLocationChange,
}: MapPickerModalProps) {
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
    <div className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-6xl h-[85vh] rounded-2xl bg-surface shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/20">
          <h3 className="text-xl font-bold text-on-surface">
            Select Location
          </h3>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* Map */}
        <div className="flex-1">
          <LeafletMap
            latitude={latitude}
            longitude={longitude}
            onLocationChange={onLocationChange}
          />
        </div>

        {/* Footer */}
        <MapControls
          onCancel={onClose}
          onConfirm={onConfirm}
        />
      </div>
    </div>
  );
}