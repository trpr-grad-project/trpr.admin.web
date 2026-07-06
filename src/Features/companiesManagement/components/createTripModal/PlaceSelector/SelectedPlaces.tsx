import { X } from "lucide-react";
import type { ApiPlace } from "../../../../../types/place";

interface Props {
  places: ApiPlace[];
  onRemove: (id: string) => void;
}

export default function SelectedPlaces({
  places,
  onRemove,
}: Props) {
  if (places.length === 0) {
    return (
      <p className="text-sm text-secondary">
        No places selected yet.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {places.map((place) => (
        <div
          key={place.id}
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-primary-container/20
            text-primary
            px-4
            py-2
            text-sm
            font-semibold
          "
        >
          <span className="truncate max-w-44">
            📍 {place.title}
          </span>

          <button
            type="button"
            onClick={() => onRemove(place.id)}
            className="
              flex
              items-center
              justify-center
              hover:opacity-70
              transition
              cursor-pointer
            "
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
}