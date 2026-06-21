import { ShieldCheck, LockKeyhole } from "lucide-react";
import type { ApiUser } from "../../../types/user";

interface UserHeaderProps {
  user: ApiUser;
}

export default function UserHeader({ user }: UserHeaderProps) {
  const initials = `${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase() || '?';

  return (
    <div className="flex items-center gap-6">
      <div className="w-32 h-32 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-md flex items-center justify-center overflow-hidden shrink-0">
        <span className="text-4xl font-bold text-on-surface">{initials}</span>
      </div>

      <div>
        <h1 className="text-[40px] font-bold font-['Noto_Serif'] text-on-surface">
          {user.firstName} {user.lastName}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mt-3">
          {user.isVerified && (
            <span className="px-3 py-1 rounded-full border border-success/20 bg-success-container text-success text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck size={12} />
              Verified
            </span>
          )}

          {user.twoFactorEnabled && (
            <span className="px-3 py-1 rounded-full border border-primary-container/20 bg-primary-container/15 text-primary-container text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <LockKeyhole size={12} />
              2FA Enabled
            </span>
          )}
        </div>
      </div>
    </div>
  );
}