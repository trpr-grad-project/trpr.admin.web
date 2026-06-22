import { Settings } from "lucide-react";
import { useState } from "react";
import AssignRolesModal from "./AssignRolesModal";

interface AssignedRolesProps {
  userId: string;
  userName: string;
  roles: string[];
}

function getRoleStyles(role: string): string {
  switch (role.toLowerCase()) {
    case 'admin': return 'bg-primary-container/10 border-primary-container/20 text-primary-container';
    case 'guide': return 'bg-tertiary-container/10 border-tertiary-container/20 text-tertiary';
    case 'user': return 'bg-secondary-container/10 border-secondary-container/20 text-secondary';
    default: return 'bg-surface-container border-outline-variant/20 text-on-surface';
  }
}

export default function AssignedRoles({ userId, userName, roles }: AssignedRolesProps) {
  const [showModal, setShowModal] = useState(false);
  const displayRoles = roles.length === 0 ? ["User"] : roles;

  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-secondary text-xs uppercase tracking-widest font-bold">Assigned Roles</h3>
        <button
          onClick={() => setShowModal(true)}
          className="p-2 rounded-full cursor-pointer hover:bg-surface-container transition-colors"
        >
          <Settings className="text-primary w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {displayRoles.map((role) => (
          <div key={role} className={`px-4 py-2 rounded-full border ${getRoleStyles(role)}`}>
            <span className="text-sm font-bold uppercase">{role}</span>
          </div>
        ))}
      </div>

      {showModal && (
        <AssignRolesModal
          userId={userId}
          userName={userName}
          currentRoles={roles}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}