import { useNavigate, useSearchParams } from "react-router-dom";
import type { ApiRequestDetails } from "../../../types/upgradeRequest";

interface RequestsHistoryProps {
  requests: ApiRequestDetails[];
  currentRequestId: string;
}

function getStatusStyles(status: string): string {
  switch (status) {
    case "Approved":
      return "bg-success-container/20 text-success border-success-container/50";
    case "Rejected":
      return "bg-error-container text-error border-error-container/30";
    default:
      return "bg-tertiary/10 text-secondary border-tertiary-container/30";
  }
}

export default function RequestsHistory({ requests }: RequestsHistoryProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pastRequests = requests;

  return (
    <>
      <h4 className="font-h3 text-lg text-on-surface mb-6 border-b border-outline-variant/10 pb-4 font-bold">
        Requests History
      </h4>

      {pastRequests.length === 0 ? (
        <p className="text-sm text-secondary italic">No past requests.</p>
      ) : (
        <div className="space-y-6">
          {pastRequests.map((req) => (
            <div
              key={req.id}
              className="relative pl-6 border-l-2 border-primary/20 cursor-pointer"
              onClick={() =>
                navigate(
                  `/requests/${req.id}?from=${encodeURIComponent(
                    searchParams.get("from") || "",
                  )}`,
                )
              }
            >
              <div className="absolute -left-1.25 top-0 w-2 h-2 rounded-full bg-primary"></div>
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">
                {new Date(req.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p className="font-bold text-sm text-on-surface">
                #{req.id.slice(0, 8)}
              </p>
              <p
                className={`text-[10px] font-bold uppercase mt-1 inline-block px-2 py-0.5 rounded border ${getStatusStyles(req.status)}`}
              >
                {req.status}
              </p>
              {req.rejectionReason && (
                <p className="text-[10px] text-secondary mt-1 italic">
                  {req.rejectionReason}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
