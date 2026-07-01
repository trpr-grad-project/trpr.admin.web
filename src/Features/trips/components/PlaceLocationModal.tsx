import { X } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;

  latitude: string;
  longitude: string;

  title: string;
}

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function PlaceLocationModal({
  isOpen,
  onClose,
  latitude,
  longitude,
  title,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-6xl h-[85vh] rounded-2xl bg-surface shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}

        <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant/20">
          <h3 className="text-xl font-bold text-on-surface">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container cursor-pointer"
          >
            <X className="text-primary"/>
          </button>
        </div>

        {/* Map */}

        <div className="flex-1">
          <MapContainer
            center={[Number(latitude), Number(longitude)]}
            zoom={15}
            scrollWheelZoom
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
              position={[Number(latitude), Number(longitude)]}
              icon={markerIcon}
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}