import { X } from "lucide-react";
import type { CompanyGuide } from "../../../types/company";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  guides: CompanyGuide[];
}

export default function GuidesModal({ isOpen, onClose, guides }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-surface border border-outline-variant/20 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/20">
          <h2 className="text-2xl font-bold font-['Noto_Serif'] text-on-surface">
            Company Guides
          </h2>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container cursor-pointer"
          >
            <X className="text-primary" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-2 gap-5">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="border border-outline-variant/20 bg-surface-container-low rounded-xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-container/20 text-primary flex items-center justify-center text-lg font-bold shrink-0">
                  {guide.firstName.charAt(0)}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-lg truncate text-on-surface">
                    {guide.firstName} {guide.lastName}
                  </h4>

                  <p className="text-sm text-secondary truncate">
                    {guide.userName}
                  </p>
                </div>

                {guide.rating && (
                  <span className="ml-auto px-2 py-1 rounded-full bg-warning-container/20 text-sm font-bold">
                    ⭐ {guide.rating}
                  </span>
                )}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                    Email
                  </p>

                  <p className="truncate text-on-surface">
                    {guide.email ?? "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                    Phone
                  </p>

                  <p className="text-on-surface">{guide.phoneNumber ?? "-"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
