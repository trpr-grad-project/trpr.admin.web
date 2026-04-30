import { useNavigate } from 'react-router-dom';
import type { RequestStatus, UpgradeRequest } from '../../../types/upgradeRequest';

interface RequestsTableProps {
  requests: UpgradeRequest[];
}

function getStatusStyles(status: RequestStatus): string {
  switch (status) {
    case 'pending':
      return 'bg-primary-container text-on-primary-container';
    case 'approved':
      return 'bg-green-100 text-green-800';
    case 'denied':
      return 'bg-error-container text-error';
  }
}

export default function RequestsTable({ requests }: RequestsTableProps) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low border-b border-outline-variant/30">
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-[#8C7355]">
              Request ID
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-[#8C7355]">
              User ID
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-[#8C7355]">
              Title
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-[#8C7355]">
              Date Submitted
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-[#8C7355]">
              Status
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-[#8C7355] text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-outline-variant/10">
          {requests.map((request: UpgradeRequest) => (
            <tr
              key={request.id}
              className="hover:bg-surface-container-lowest/50 transition-colors"
            >
              <td className="px-8 py-6 font-['Noto_Serif'] font-bold text-on-surface">
                #{request.id}
              </td>
              <td className="px-8 py-6 text-[#8C7355]">{request.userId}</td>
              <td className="px-8 py-6">
                <div className="flex flex-col">
                  <span className="font-semibold text-on-surface">
                    {request.title}
                  </span>
                </div>
              </td>
              <td className="px-8 py-6 text-body-md">
                {new Date(request.createdAtUtc).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
              <td className="px-8 py-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${getStatusStyles(request.status)}`}>
                  {request.status}
                </span>
              </td>
              <td className="px-8 py-6 text-right">
                <button
                  onClick={() => navigate(`/requests/${request.id}`)}
                  className="px-4 py-2 text-primary-container font-bold border border-primary-container/30 rounded-lg cursor-pointer hover:bg-primary-container hover:text-white transition-all"
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