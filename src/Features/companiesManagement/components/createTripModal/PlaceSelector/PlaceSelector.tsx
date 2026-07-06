import { useEffect, useState } from "react";

import { useGetPlacesQuery } from "../../../../../store/api/placesApi";

import type { ApiPlace } from "../../../../../types/place";

import PlaceSearch from "./PlaceSearch";
import SelectedPlaces from "./SelectedPlaces";
import PlaceMapPicker from "./PlaceMapPicker";

interface Props {
  selectedPlaceIds: string[];
  onChange: (ids: string[]) => void;
}

export default function PlaceSelector({ selectedPlaceIds, onChange }: Props) {
  const [search, setSearch] = useState("");

  const [radius, setRadius] = useState("");

  const [lastPlaceId, setLastPlaceId] = useState<string | undefined>(undefined);

  const [places, setPlaces] = useState<ApiPlace[]>([]);

  const [selectedPlaces, setSelectedPlaces] = useState<ApiPlace[]>([]);

  const [latitude, setLatitude] = useState<string>();
  const [longitude, setLongitude] = useState<string>();

  const { data, isLoading, isFetching } = useGetPlacesQuery({
    pageSize: 20,
    title: search || undefined,
    latitude,
    longitude,
    radiusInMeters: latitude && longitude && radius ? radius : undefined,
    lastPlaceId,
  });

  useEffect(() => {
    setLastPlaceId(undefined);
    setPlaces([]);
  }, [search, latitude, longitude, radius]);

  useEffect(() => {
    if (places.length === 0) return;

    setSelectedPlaces((prev) => {
      const map = new Map<string, ApiPlace>();

      [...prev, ...places].forEach((p) => map.set(p.id, p));

      return selectedPlaceIds
        .map((id) => map.get(id))
        .filter(Boolean) as ApiPlace[];
    });
  }, [selectedPlaceIds, places]);

  useEffect(() => {
    if (!data) return;

    if (!lastPlaceId) {
      setPlaces(data.items);
    } else {
      setPlaces((prev) => [...prev, ...data.items]);
    }
  }, [data, lastPlaceId]);

  function addPlace(place: ApiPlace) {
    if (selectedPlaceIds.includes(place.id)) return;

    // Keep the full place object around too, not just its id,
    // otherwise SelectedPlaces has nothing to render.
    setSelectedPlaces((prev) => [...prev, place]);

    onChange([...selectedPlaceIds, place.id]);
  }

  function removePlace(id: string) {
    setSelectedPlaces((prev) => prev.filter((p) => p.id !== id));

    onChange(selectedPlaceIds.filter((placeId) => placeId !== id));
  }

  
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-primary">Places</label>

        <PlaceMapPicker
          onSelect={(lat, lng) => {
            setLatitude(lat);
            setLongitude(lng);

            setLastPlaceId(undefined);
            setPlaces([]);
          }}
        />
      </div>

      <PlaceSearch value={search} onChange={setSearch} />

      <div>
        <label className="block text-sm font-semibold text-primary mb-2">
          Search Radius (Meters)
        </label>

        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          disabled={!latitude || !longitude}
          placeholder="e.g. 3000 m"
          className="w-full rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 outline-none text-on-surface focus:border-primary disabled:cursor-not-allowed"
        />

        {!latitude && (
          <p className="text-xs text-secondary mt-2">
            Select a location from the map first.
          </p>
        )}
      </div>

      <SelectedPlaces places={selectedPlaces} onRemove={removePlace} />

      <div className="rounded-xl border border-outline-variant/20 overflow-hidden">
        <div className="max-h-64 overflow-y-auto divide-y divide-outline-variant/10">
          {isLoading ? (
            <div className="p-6 text-center text-secondary">Loading...</div>
          ) : places.length === 0 ? (
            <div className="p-6 text-center text-secondary">
              No places found.
            </div>
          ) : (
            <>
              {places.map((place) => {
                const selected = selectedPlaceIds.includes(place.id);

                return (
                  <button
                    key={place.id}
                    type="button"
                    disabled={selected}
                    onClick={() => addPlace(place)}
                    className={`w-full text-left px-5 py-4 transition flex items-center justify-between ${
                      selected
                        ? "bg-primary text-on-primary cursor-default"
                        : "hover:bg-surface-container cursor-pointer"
                    }`}
                  >
                    <div>
                      <p className="font-semibold">{place.title}</p>

                      <p className="text-xs opacity-70">
                        {place.category.name} • {place.governorate.name}
                      </p>
                    </div>

                    {selected ? (
                      <span className="text-xs font-bold">Selected</span>
                    ) : (
                      <span className="text-primary font-bold">Add</span>
                    )}
                  </button>
                );
              })}

              {data?.hasNextPage && (
                <div className="p-4 flex justify-center border-t border-outline-variant/20">
                  <button
                    type="button"
                    disabled={isFetching}
                    onClick={() => setLastPlaceId(data.nextCursor ?? undefined)}
                    className="px-5 py-2 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-on-primary transition disabled:opacity-50"
                  >
                    {isFetching ? "Loading..." : "Load More"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
