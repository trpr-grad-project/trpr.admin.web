import { Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

interface LocationMarkerProps {
  latitude?: string;
  longitude?: string;
  onLocationChange: (lat: string, lng: string) => void;
}

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function LocationMarker({
  latitude,
  longitude,
  onLocationChange,
}: LocationMarkerProps) {
  const [position, setPosition] = useState<[number, number] | null>(
    latitude && longitude
      ? [Number(latitude), Number(longitude)]
      : null
  );

  useMapEvents({
    click(e) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      setPosition([lat, lng]);
      onLocationChange(lat.toString(), lng.toString());
    },
  });

  return position ? (
    <Marker
      position={position}
      icon={markerIcon}
    />
  ) : null;
}