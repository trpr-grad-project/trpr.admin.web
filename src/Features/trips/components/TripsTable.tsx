import { Link } from "react-router-dom";
import type { ApiTrip, TripLookup } from "../../../types/trip";

interface Props {
  trips: ApiTrip[];
  themes: TripLookup[];
}

const visibilityColors = {
  Public: "bg-success-container text-success",
  Private: "bg-error-container text-error",
};

export default function TripsTable({ trips, themes }: Props) {
  const getThemeName = (themeId: string) => {
    return themes.find((theme) => theme.id === themeId)?.name ?? "-";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low border-b border-outline-variant/30">
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Trip ID
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Title
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Theme
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Price
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Visibility
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-outline-variant/10">
          {trips.map((trip) => (
            <tr
              key={trip.tripId}
              className="hover:bg-surface-container-lowest/50 transition-colors"
            >
              <td className="px-8 py-6 font-['Noto_Serif'] font-bold text-on-surface">
                #{trip.tripId.slice(0, 8).toUpperCase()}
              </td>

              <td className="px-8 py-6">
                <div
                  className="max-w-55 truncate font-semibold text-on-surface"
                  title={trip.title}
                >
                  {trip.title}
                </div>
              </td>

              <td className="px-8 py-6 text-on-surface">
                {getThemeName(trip.themeId)}
              </td>

              <td className="px-8 py-6 font-medium text-on-surface">
                {trip.price} EGP
              </td>

              <td className="px-8 py-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                    visibilityColors[trip.tripVisibility]
                  }`}
                >
                  {trip.tripVisibility}
                </span>
              </td>

              <td className="px-8 py-6 text-right">
                <Link
                  to={`/trips/${trip.tripId}`}
                  className="inline-block px-4 py-2 text-primary-container font-bold border border-primary-container/30 rounded-lg hover:bg-primary-container hover:text-surface transition-all"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
