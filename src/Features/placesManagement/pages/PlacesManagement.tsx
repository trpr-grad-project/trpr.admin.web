import { MapPinPlus } from "lucide-react";
import { useEffect, useState } from "react";
import type { ApiPlace } from "../../../types/place";

import PlaceModal from "../components/PlaceModal";
import PlaceFilters from "../components/PlaceFilters";
import PlacesList from "../components/PlacesList";
import PlacesLoading from "../components/PlacesLoading";
import PlacesCursor from "../components/PlacesCursor";

import {
  useGetPlacesFormDataQuery,
  useGetPlacesQuery,
} from "../../../store/api/placesApi";

export default function PlacesManagement() {
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<ApiPlace | undefined>();

  const [title, setTitle] = useState("");
  const [governorateId, setGovernorateId] = useState("");
  const [radius, setRadius] = useState("");

  const [latitude] = useState<string>();
  const [longitude] = useState<string>();

  // Cursor
  const [lastPlaceId, setLastPlaceId] = useState<string>();

  // All loaded places
  const [places, setPlaces] = useState<ApiPlace[]>([]);

  const { data: formData } = useGetPlacesFormDataQuery();

  const { data, isLoading, isFetching, isError } = useGetPlacesQuery({
    title: title || undefined,
    governorateId: governorateId || undefined,
    radiusInMeters: radius || undefined,
    latitude,
    longitude,
    lastPlaceId,
    pageSize: 10,
  });

  useEffect(() => {
    if (!data) return;

    if (!lastPlaceId) {
      setPlaces(data.items);
    } else {
      setPlaces((prev) => [...prev, ...data.items]);
    }
  }, [data, lastPlaceId]);

  function handleChooseLocation() {
    // later
  }

  function handleEdit(place: ApiPlace) {
    setSelectedPlace(place);
    setIsPlaceModalOpen(true);
  }

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

        <button
          onClick={() => {
            setSelectedPlace(undefined);
            setIsPlaceModalOpen(true);
          }}
          className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-bold text-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          <MapPinPlus className="h-7 w-7" />
          <span>Add Place</span>
        </button>
      </header>

      <div className="mb-10">
        <PlaceFilters
          title={title}
          governorateId={governorateId}
          radius={radius}
          governorates={formData?.governorates ?? []}
          latitude={latitude}
          longitude={longitude}
          onTitleChange={(value) => {
            setPlaces([]);
            setLastPlaceId(undefined);
            setTitle(value);
          }}
          onGovernorateChange={(value) => {
            setPlaces([]);
            setLastPlaceId(undefined);
            setGovernorateId(value);
          }}
          onRadiusChange={(value) => {
            setPlaces([]);
            setLastPlaceId(undefined);
            setRadius(value);
          }}
          onChooseLocation={handleChooseLocation}
        />
      </div>

      {isLoading && places.length === 0 && <PlacesLoading />}

      {isError && (
        <div className="flex items-center justify-center py-20 text-error">
          Something went wrong. Please try again.
        </div>
      )}

      {!isLoading && !isError && (
        <>
          <PlacesList places={places} onEdit={handleEdit} />

          <PlacesCursor
            hasNextPage={data?.hasNextPage ?? false}
            isFetching={isFetching}
            onLoadMore={() => setLastPlaceId(data?.nextCursor ?? undefined)}
          />
        </>
      )}

      <PlaceModal
        isOpen={isPlaceModalOpen}
        onClose={() => {
          setIsPlaceModalOpen(false);
          setSelectedPlace(undefined);
        }}
        place={selectedPlace}
        formData={
          formData ?? {
            categories: [],
            governorates: [],
            tags: [],
          }
        }
      />
    </section>
  );
}
