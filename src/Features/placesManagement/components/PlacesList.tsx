import type { ApiPlace } from "../../../types/place";

interface PlacesListProps {
  places: ApiPlace[];
  onEdit: (place: ApiPlace) => void;
}

export default function PlacesList({
  places,
  onEdit,
}: PlacesListProps) {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="grid grid-cols-11 px-10 font-label-sm text-secondary uppercase tracking-[0.15em] text-sm font-semibold">
        <div className="col-span-3">Place</div>
        <div className="col-span-2">Governorate</div>
        <div className="col-span-3">Tags</div>
        <div className="col-span-2">Coordinates</div>
        <div className="col-span-1 text-right">Actions</div>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {places.map((place) => (
          <div
            key={place.id}
            className="grid grid-cols-11 items-center px-10 py-6 rounded-2xl bg-surface-container-low border border-outline-variant/20
            hover:bg-surface-container-lowest hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            {/* Place */}
            <div className="col-span-3 flex flex-col gap-1">
              <span className="font-bold text-lg text-on-surface">
                {place.title}
              </span>

              <span className="text-xs text-secondary uppercase tracking-wider font-semibold">
                {place.category.name}
              </span>
            </div>

            {/* Governorate */}
            <div className="col-span-2 font-medium text-on-surface">
              {place.governorate.name}
            </div>

            {/* Tags */}
            <div className="col-span-3">
              <div className="flex flex-wrap gap-2">
                {place.tags.length > 0 ? (
                  place.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 rounded-full bg-primary-container/30 text-primary text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag.name}
                    </span>
                  ))
                ) : (
                  <span className="text-secondary text-sm">No Tags</span>
                )}
              </div>
            </div>

            {/* Coordinates */}
            <div className="col-span-2">
              <div className="space-y-1 text-sm">
                <div className="flex gap-2">
                  <span className="text-secondary font-medium">Lat:</span>

                  <span className="font-mono text-on-surface">
                    {place.latitude}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-secondary font-medium">Lng:</span>

                  <span className="font-mono text-on-surface">
                    {place.longitude}
                  </span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="col-span-1 text-right">
              <button
                onClick={() => onEdit(place)}
                className="px-4 py-2 rounded-lg border border-primary/20 text-primary font-semibold
                hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        {places.length === 0 && (
          <div className="rounded-2xl border border-outline-variant/20 bg-surface p-10 text-center text-secondary">
            No places found.
          </div>
        )}
      </div>
    </section>
  );
}