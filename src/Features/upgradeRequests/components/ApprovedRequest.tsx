import { CircleCheck } from 'lucide-react';

interface ApprovedRequestProps {
  reviewedAt: string;
  reviewedBy: string;
}

export default function ApprovedRequest({ reviewedAt, reviewedBy }: ApprovedRequestProps) {
  return (
    <div className="pt-10">
      <div className="p-8 rounded-lg border border-green-200 bg-green-50 flex items-center gap-4">
        <CircleCheck className="text-green-600 w-8 h-8" />
        <div>
          <h4 className="font-bold text-green-800 text-lg">Decision Recorded</h4>
          <p className="text-green-700 text-sm">
            This request was approved on{' '}
            <strong>
              {new Date(reviewedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </strong>{' '}
            by <strong>{reviewedBy}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}