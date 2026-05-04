import type { PastRequest, RequestStatus } from '../../../types/upgradeRequest';

interface PastRequestsProps {
  pastRequests: PastRequest[];
}

function getStatusStyles(status: RequestStatus): string {
  switch (status) {
    case 'pending':
      return "bg-tertiary/10 text-secondary border-tertiary-container/30";
    case 'approved':
      return "bg-success-container/20 text-success border-success-container/50";
    case 'denied':
      return "bg-error-container text-error border-error-container/30";
  }
}

export default function PastRequests({ pastRequests }: PastRequestsProps) {
  return (
    <>
      <h4 className="font-h3 text-lg text-on-surface mb-6 border-b border-outline-variant/10 pb-4 font-bold">
        Past History
      </h4>

      <div className="space-y-6">
        {pastRequests.map((req) => (
          <div key={req.id} className="relative pl-6 border-l-2 border-primary/20">
            <div className="absolute -left-1.25 top-0 w-2 h-2 rounded-full bg-primary"></div>
            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">
              {new Date(req.createdAtUtc).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <p className="font-bold text-sm text-on-surface">{req.title}</p>
            <p className={`text-[10px] font-bold uppercase mt-1 inline-block px-2 py-0.5 rounded border ${getStatusStyles(req.status)}`}>
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
    </>
  );
}