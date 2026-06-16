import { useNavigate } from 'react-router-dom';
import type { ApiUpgradeRequest } from '../../../types/upgradeRequest';

interface RequestsTableProps {
  requests: ApiUpgradeRequest[];
}

function getStatusStyles(status: string): string {
  switch (status) {
    case 'Approved':
      return 'bg-success-container text-success';
    case 'Rejected':
      return 'bg-error-container text-error';
    default:
      return 'bg-primary-container text-on-primary-container';
  }
}

export default function RequestsTable({ requests }: RequestsTableProps) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low border-b border-outline-variant/30">
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Request ID
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              User ID
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              User Name
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
          {requests.map((request: ApiUpgradeRequest) => (
            <tr
              key={request.id}
              className="hover:bg-surface-container-lowest/50 transition-colors"
            >
              <td className="px-8 py-6 font-['Noto_Serif'] font-bold text-on-surface">
                #{request.id.slice(0, 8)}
              </td>
              <td className="px-8 py-6 text-secondary font-mono text-sm">
                #{request.userId.slice(0, 8)}
              </td>
              <td className="px-8 py-6 text-on-surface font-semibold">
                {request.userName}
              </td>
              <td className="px-8 py-6 text-on-surface">
                {new Date(request.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
              <td className="px-8 py-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${getStatusStyles(request.approveStatus)}`}>
                  {request.approveStatus}
                </span>
              </td>
              <td className="px-8 py-6 text-right">
                <button
                  onClick={() => navigate(`/requests/${request.id}`)}
                  className="px-4 py-2 text-primary-container font-bold border border-primary-container/30 rounded-lg cursor-pointer hover:bg-primary-container hover:text-surface transition-all"
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