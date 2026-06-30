import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";

interface LeafletMapProps {
  latitude?: string;
  longitude?: string;
  onLocationChange: (lat: string, lng: string) => void;
}

export default function LeafletMap({
  latitude,
  longitude,
  onLocationChange,
}: LeafletMapProps) {
  const center: [number, number] =
    latitude && longitude
      ? [Number(latitude), Number(longitude)]
      : [30.0444, 31.2357]; // Cairo

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker
        latitude={latitude}
        longitude={longitude}
        onLocationChange={onLocationChange}
      />
    </MapContainer>
  );
}
