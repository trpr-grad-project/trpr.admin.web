import { ChevronDown, Search, X } from "lucide-react";
import type { SupportStatus } from "../../../types/support";

interface FiltersProps {
  subjectSearch: string;
  nameSearch: string;
  status: SupportStatus;
  onSubjectChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onStatusChange: (status: SupportStatus) => void;
}

export default function Filters({
  subjectSearch,
  nameSearch,
  status,
  onSubjectChange,
  onNameChange,
  onStatusChange,
}: FiltersProps) {
  return (
    <section className="bg-surface-container border border-outline-variant/20 rounded-xl p-6">
      {/* Subject Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />

        <input
          value={subjectSearch}
          onChange={(e) => onSubjectChange(e.target.value)}
          type="text"
          placeholder="Search by subject..."
          className="w-full pl-10 pr-11 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface outline-none transition-colors focus:border-primary"
        />

        {subjectSearch && (
          <button
            type="button"
            onClick={() => onSubjectChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Username */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />

          <input
            value={nameSearch}
            onChange={(e) => onNameChange(e.target.value)}
            type="text"
            placeholder="Search by full name..."
            className="w-full pl-10 pr-11 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none focus:border-primary"
          />

          {nameSearch && (
            <button
              type="button"
              onClick={() => onNameChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Status */}
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value as SupportStatus)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm outline-none focus:border-primary"
          >
            <option value="Unread">Unread</option>
            <option value="Read">Read</option>
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary pointer-events-none" />
        </div>
      </div>
    </section>
  );
}