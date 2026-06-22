import { UserRound, PenLine } from "lucide-react";
import { useState } from "react";
import type { ApiUser } from "../../../types/user";
import EditUserNameModal from "./EditUserNameModal";

interface AccountInfoProps {
  user: ApiUser;
}

export default function AccountInfo({ user }: AccountInfoProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/20">
      <div className="flex justify-between items-center mb-12">
        <header className="flex gap-2 items-center">
          <UserRound className="text-primary" />
          <h3 className="text-primary font-bold text-2xl">Account Info</h3>
        </header>
        <button
          onClick={() => setShowModal(true)}
          className="p-2 rounded-full hover:bg-surface-container transition-colors cursor-pointer"
        >
          <PenLine className="text-primary w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div className="border-b border-outline-variant/20 pb-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">First Name</p>
          <p className="text-on-surface">{user.firstName || '—'}</p>
        </div>

        <div className="border-b border-outline-variant/20 pb-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Last Name</p>
          <p className="text-on-surface">{user.lastName || '—'}</p>
        </div>

        <div className="border-b border-outline-variant/20 pb-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Username</p>
          <p className="text-on-surface">{user.userName}</p>
        </div>

        <div className="border-b border-outline-variant/20 pb-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">User ID</p>
          <p className="text-on-surface font-mono text-sm">{user.id}</p>
        </div>
      </div>

      {showModal && (
        <EditUserNameModal
          userId={user.id}
          initialFirstName={user.firstName}
          initialLastName={user.lastName}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}