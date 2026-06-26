import { useNavigate, useSearchParams } from "react-router-dom";
import type { ApiSupport } from "../../../types/support";

interface SupportTableProps {
  supports: ApiSupport[];
}

function getStatusStyles(status: string): string {
  switch (status.toLowerCase()) {
    case "read":
      return "bg-success-container text-success";
    case "unread":
      return "bg-primary-container text-on-primary-container";
    default:
      return "bg-surface-container text-on-surface";
  }
}

export default function SupportTable({ supports }: SupportTableProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low border-b border-outline-variant/30">
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Support ID
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Full Name
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Subject
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Date Submitted
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Status
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-outline-variant/10">
          {supports.map((support) => (
            <tr
              key={support.id}
              className="hover:bg-surface-container-lowest/50 transition-colors"
            >
              <td className="px-8 py-6 font-['Noto_Serif'] font-bold text-on-surface">
                #{support.id.slice(0, 8)}
              </td>

              <td className="px-8 py-6 text-on-surface">
                {support.user.firstName} {support.user.lastName}
              </td>

              <td className="px-8 py-6">
                <div
                  className="max-w-65 truncate font-semibold text-on-surface"
                  title={support.subject}
                >
                  {support.subject}
                </div>
              </td>

              <td className="px-8 py-6 text-on-surface">
                {new Date(support.createdAtUTC).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              <td className="px-8 py-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${getStatusStyles(
                    support.status,
                  )}`}
                >
                  {support.status}
                </span>
              </td>

              <td className="px-8 py-6 text-right">
                <button
                  onClick={() =>
                    navigate(
                      `/support/${support.id}?from=${encodeURIComponent(
                        searchParams.toString(),
                      )}`,
                    )
                  }
                  className="px-4 py-2 text-primary-container font-bold border border-primary-container/30 rounded-lg hover:bg-primary-container hover:text-surface transition-all cursor-pointer"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
