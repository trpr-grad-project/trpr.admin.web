import { useSearchParams } from "react-router-dom";

import { useState } from "react";
import MapPickerModal from "../../../Components/UI/MapPickerModal";

import TripFilters from "../components/TripFilters";
import TripsTable from "../components/TripsTable";

import Pagination from "../../../Components/UI/Pagination";

import {
  useGetTripsQuery,
  useGetTripsFormDataQuery,
} from "../../../store/api/tripsApi";

import { useGetPlacesFormDataQuery } from "../../../store/api/placesApi";

export default function TripsManagement() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isMapOpen, setIsMapOpen] = useState(false);

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;

  const title = searchParams.get("title") || "";
  const status = searchParams.get("status") || "";
  const themeId = searchParams.get("themeId") || "";
  const governorateId = searchParams.get("governorateId") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const latitude = searchParams.get("latitude") || "";
  const longitude = searchParams.get("longitude") || "";
  const radiusInMeters = searchParams.get("radiusInMeters") || "";
  const tripType = searchParams.get("tripType") || "";

  const filters = {
    title,
    status,
    themeId,
    governorateId,
    minPrice,
    maxPrice,
    latitude,
    longitude,
    radiusInMeters,
    tripType,
  };

  const { data: tripFormData } = useGetTripsFormDataQuery();
  const { data: placesFormData } = useGetPlacesFormDataQuery();

  const { data, isLoading, isError } = useGetTripsQuery({
    page: currentPage,
    pageSize,

    status: status ? Number(status) : undefined,

    title: title || undefined,
    themeId: themeId || undefined,
    governorateId: governorateId || undefined,

    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,

    latitude: latitude || undefined,
    longitude: longitude || undefined,
    radiusInMeters: radiusInMeters ? Number(radiusInMeters) : undefined,

    tripType: tripType ? Number(tripType) : undefined,
  });

  function handleFilterChange(key: string, value: string) {
    const params = {
      page: "1",
      pageSize: String(pageSize),

      title,
      status,
      themeId,
      governorateId,
      minPrice,
      maxPrice,

      latitude,
      longitude,
      radiusInMeters,
      tripType,
    };

    params[key as keyof typeof params] = value;

    setSearchParams(params);
  }

  function handleMapLocationChange(lat: string, lng: string) {
    setSearchParams({
      page: "1",
      pageSize: String(pageSize),

      title,
      status,
      themeId,
      governorateId,
      minPrice,
      maxPrice,

      latitude: lat,
      longitude: lng,

      radiusInMeters,
      tripType,
    });
  }

  function handlePageChange(page: number) {
    setSearchParams({
      page: String(page),
      pageSize: String(pageSize),

      title,
      status,
      themeId,
      governorateId,
      minPrice,
      maxPrice,

      latitude,
      longitude,
      radiusInMeters,
      tripType,
    });
  }

  function handlePageSizeChange(size: number) {
    setSearchParams({
      page: "1",
      pageSize: String(size),

      title,
      status,
      themeId,
      governorateId,
      minPrice,
      maxPrice,

      latitude,
      longitude,
      radiusInMeters,
      tripType,
    });
  }

  function handleChooseLocation() {
    setIsMapOpen(true);
  }

  return (
    <section className="flex-1 flex flex-col">
      <header className="mb-10">
        <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
          Trips Management
        </h2>

        <p className="text-secondary font-['Noto_Serif'] italic text-sm">
          Manage tourist trips, review their details, and approve or reject
          submissions across the TouRA platform.
        </p>
      </header>

      <div className="mb-10">
        <TripFilters
          filters={filters}
          themes={tripFormData?.themes ?? []}
          governorates={placesFormData?.governorates ?? []}
          onFilterChange={handleFilterChange}
          onChooseLocation={handleChooseLocation}
        />
      </div>

      <MapPickerModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        onConfirm={() => setIsMapOpen(false)}
        latitude={latitude}
        longitude={longitude}
        onLocationChange={handleMapLocationChange}
      />

      <section className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-secondary/5 border border-outline-variant/20 overflow-hidden">
        {isLoading && (
          <div className="flex justify-center py-20">Loading...</div>
        )}

        {isError && (
          <div className="flex justify-center py-20 text-error">
            Something went wrong.
          </div>
        )}

        {data && (
          <>
            <TripsTable trips={data.items} />
            <div className="px-8 py-6 bg-surface-container-low rounded-b-xl">
              <Pagination
                page={data.page}
                pageSize={pageSize}
                totalCount={data.totalItems}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </div>
          </>
        )}
      </section>
    </section>
  );
}
