import { ChevronDown } from "lucide-react";
import type { RequestStatus } from "../../../types/upgradeRequest";

interface FiltersProps {
  status: RequestStatus;
  sort: 'newest' | 'oldest';
  onStatusChange: (status: RequestStatus) => void;
  onSortChange: (sort: 'newest' | 'oldest') => void;
}

export default function Filters({ status, sort, onStatusChange, onSortChange }: FiltersProps) {
  return (
    <div className="flex items-center justify-around w-full">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-widest text-[#8C7355]">
          Filter Status
        </label>
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value as RequestStatus)}
            className="appearance-none bg-surface-container border-none rounded-lg py-2.5 px-4 pr-10 outline-none focus:ring-2 focus:ring-primary-container min-w-40 cursor-pointer lg:min-w-50"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="denied">Denied</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C7355] pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-widest text-[#8C7355]">
          Sort By
        </label>
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as 'newest' | 'oldest')}
            className="appearance-none bg-surface-container border-none rounded-lg py-2.5 px-4 pr-10 outline-none focus:ring-2 focus:ring-primary-container min-w-40 cursor-pointer lg:min-w-50"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C7355] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}