import { CircleX, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useChangeRequestStatusMutation } from '../../../store/api/upgradeRequestsApi';
import { useNavigate } from 'react-router-dom';

interface DenyRequestProps {
  requestId: string;
}

export default function DenyRequest({ requestId }: DenyRequestProps) {
  const [reason, setReason] = useState('');
  const [error, setError] = useState(false);
  const [changeStatus, { isLoading }] = useChangeRequestStatusMutation();
  const navigate = useNavigate();

  async function handleDeny() {
    if (!reason.trim()) {
      setError(true);
      return;
    }
    await changeStatus({
      upgradeRequestId: requestId,
      status: 2,
      rejectionReason: reason,
    });
    navigate(-1);
  }

  return (
    <div className="space-y-4 pt-8 md:pt-0 md:pl-8 md:border-l border-outline-variant/30">
      <h4 className="font-h3 text-xl text-on-surface font-bold font-['Noto_Serif']">
        Deny Request
      </h4>
      <div className="space-y-3">
        <label className="text-[10px] font-bold text-secondary uppercase tracking-widest pb-1 block">
          Rejection Reason (Required)
        </label>
        <textarea
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
            setError(false);
          }}
          className={`outline-0 w-full bg-surface-container-lowest text-on-surface rounded-lg border p-4 placeholder-secondary/70 text-sm focus:ring-1 focus:ring-error focus:border-error ${
            error ? 'border-error' : 'border-outline-variant'
          }`}
          placeholder="State clearly why the request was rejected..."
          rows={3}
        />
        {error && (
          <p className="text-xs text-error">Rejection reason is required.</p>
        )}
      </div>
      <button
        onClick={handleDeny}
        disabled={isLoading}
        className="w-full py-4 bg-error text-surface font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? <Loader2 className="animate-spin" /> : <CircleX />}
        {isLoading ? 'Rejecting...' : 'Reject Request'}
      </button>
    </div>
  );
}