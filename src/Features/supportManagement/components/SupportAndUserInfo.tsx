import { Info, UserRound } from "lucide-react";
import type { ApiSupport } from "../../../types/support";

interface SupportInfoProps {
  support: ApiSupport;
}

export default function SupportAndUserInfo({ support }: SupportInfoProps) {
  return (
    <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Support Information */}
        <div className="p-8 lg:border-r border-outline-variant/20">
          <div className="flex items-center gap-2 mb-6">
            <Info className="w-5 h-5 text-primary" />

            <h2 className="text-on-surface font-semibold text-lg">
              Support Information
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-label-sm text-secondary mb-1 uppercase">
                Support ID
              </p>

              <p className="font-bold text-on-surface">
                #{support.id}
              </p>
            </div>

            <div>
              <p className="text-label-sm text-secondary mb-1 uppercase">
                Date Submitted
              </p>

              <p className="font-bold text-on-surface">
                {new Date(support.createdAtUTC).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* User Information */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <UserRound className="w-5 h-5 text-primary" />

            <h2 className="text-on-surface font-semibold text-lg">
              User Information
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-label-sm text-secondary mb-1 uppercase">
                Full Name
              </p>

              <p className="font-bold text-on-surface">
                {support.user.firstName} {support.user.lastName}
              </p>
            </div>

            <div>
              <p className="text-label-sm text-secondary mb-1 uppercase">
                Username
              </p>

              <p className="font-bold text-on-surface">
                {support.user.userName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}