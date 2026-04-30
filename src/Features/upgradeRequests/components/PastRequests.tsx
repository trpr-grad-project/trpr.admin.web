import type { PastRequest, RequestStatus } from '../../../types/upgradeRequest';

interface PastRequestsProps {
  pastRequests: PastRequest[];
}

function getStatusStyles(status: RequestStatus): string {
  switch (status) {
    case 'pending':
      return 'text-primary bg-primary-container/20 border-primary-container/30';
    case 'approved':
      return 'text-green-800 bg-green-100 border-green-200';
    case 'denied':
      return 'text-error bg-error-container/20 border-error-container/30';
  }
}

export default function PastRequests({ pastRequests }: PastRequestsProps) {
  return (
    <>
      <h4 className="font-h3 text-lg text-[#2D2926] mb-6 border-b border-outline-variant/10 pb-4 font-bold">
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
            <p className="font-bold text-sm text-[#2D2926]">{req.title}</p>
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