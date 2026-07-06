import { useState } from "react";
import MapPickerModal from "../../../../../Components/UI/MapPickerModal";

interface Props {
  onSelect: (lat: string, lng: string) => void;
}

export default function PlaceMapPicker({ onSelect }: Props) {
  const [open, setOpen] = useState(false);

  const [latitude, setLatitude] = useState<string>();
  const [longitude, setLongitude] = useState<string>();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          px-4
          py-2
          rounded-xl
          border
          border-primary
          text-primary
          font-semibold
          hover:bg-primary/10
          transition
          cursor-pointer
        "
      >
        Pick From Map
      </button>

      <MapPickerModal
        isOpen={open}
        onClose={() => setOpen(false)}
        latitude={latitude}
        longitude={longitude}
        onLocationChange={(lat, lng) => {
          setLatitude(lat);
          setLongitude(lng);
        }}
        onConfirm={() => {
          if (latitude && longitude) {
            onSelect(latitude, longitude);
          }

          setOpen(false);
        }}
      />
    </>
  );
}