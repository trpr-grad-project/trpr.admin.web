import type { ApiUser } from '../../../types/user';

interface UsersTableProps {
  users: ApiUser[];
}

function getRoleStyles(role: string): string {
  switch (role.toLowerCase()) {
    case 'admin': return 'bg-blue-100 text-blue-700';
    case 'guide': return 'bg-green-100 text-green-700';
    default: return 'bg-surface-container text-secondary';
  }
}

export default function UsersTable({ users }: UsersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low border-b border-outline-variant/30">
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              User ID
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Full Name
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Username
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Roles
            </th>
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-outline-variant/10">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-surface-container-lowest/50 transition-colors">
              <td className="px-8 py-6 font-mono text-sm text-secondary">
                #{user.id.slice(0, 8)}
              </td>
              <td className="px-8 py-6 font-semibold text-on-surface">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-8 py-6 text-on-surface">
                {user.userName}
              </td>
              <td className="px-8 py-6">
                <div className="flex flex-wrap gap-1">
                  {user.roles.map((role) => (
                    <span
                      key={role}
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${getRoleStyles(role)}`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-8 py-6 text-right">
                <button className="px-4 py-2 text-primary-container font-bold border border-primary-container/30 rounded-lg hover:bg-primary-container hover:text-surface transition-all cursor-pointer">
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