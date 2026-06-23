import { CircleCheck, Loader2 } from 'lucide-react';
import { useChangeRequestStatusMutation } from '../../../store/api/upgradeRequestsApi';
import { useNavigate } from 'react-router-dom';

interface ApproveRequestProps {
  requestId: string;
}

export default function ApproveRequest({ requestId }: ApproveRequestProps) {
  const [changeStatus, { isLoading }] = useChangeRequestStatusMutation();
  const navigate = useNavigate();

  async function handleApprove() {
    await changeStatus({
      upgradeRequestId: requestId,
      status: 0,
      rejectionReason: null,
    });
    navigate(-1);
  }

  return (
    <div className="space-y-4 flex flex-col justify-between">
      <div>
        <h4 className="font-h3 text-xl text-on-surface font-bold font-['Noto_Serif']">
          Approve Request
        </h4>
        <p className="text-sm leading-6 font-medium text-secondary mt-2">
          Carefully review all applicant information and supporting documents before approving the request.
        </p>
      </div>
      <button
        onClick={handleApprove}
        disabled={isLoading}
        className="w-full py-4 bg-primary text-surface font-bold rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? <Loader2 className="animate-spin" /> : <CircleCheck />}
        {isLoading ? 'Approving...' : 'Approve Request'}
      </button>
    </div>
  );
}