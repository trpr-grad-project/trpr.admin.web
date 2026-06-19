import { CircleX } from 'lucide-react';

interface DeniedRequestProps {
  reviewedAt: string;
  reviewedBy: string;
  rejectionReason: string;
}

export default function DeniedRequest({ reviewedAt, reviewedBy, rejectionReason }: DeniedRequestProps) {
  return (
    <div className="pt-10">
      <div className="p-8 rounded-lg border border-error-container/50 bg-error-container/20 grid grid-cols-9">
        <CircleX className="text-error w-8 h-8 mt-3" />
        <div className="space-y-3 col-span-8">
          <h4 className="font-h3 text-xl text-error font-bold">Decision Recorded</h4>
          <p className="text-body-md text-on-surface">
            This request was denied on{' '}
            <strong>
              {new Date(reviewedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </strong>{' '}
            by <strong>{reviewedBy}</strong>.
          </p>
          <div className="p-4 bg-error-container/30 rounded-lg border border-error-container/50">
            <p className="text-xs font-bold text-error uppercase tracking-widest mb-1">
              Rejection Reason
            </p>
            <p className="text-sm text-secondary italic">"{rejectionReason}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}