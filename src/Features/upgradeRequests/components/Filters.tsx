import { ChevronDown } from "lucide-react";
import type { RequestStatus } from "../../../types/upgradeRequest";

interface FiltersProps {
  status: RequestStatus;
  sort: "newest" | "oldest";
  onStatusChange: (status: RequestStatus) => void;
  onSortChange: (sort: "newest" | "oldest") => void;
}

export default function Filters({
  status,
  sort,
  onStatusChange,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C7355]">
          Status
        </label>
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value as RequestStatus)}
            className="appearance-none text-sm bg-white rounded-lg h-9 px-3 outline-none font-medium text-[#8C7355] outline-0 border border-[#8C7355]/30
            focus:ring-2 min-w-30 cursor-pointer lg:min-w-40"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="denied">Denied</option>
          </select>
          <ChevronDown className="absolute w-5 h-5 right-3 top-1/2 -translate-y-1/2 text-[#8C7355] pointer-events-none" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C7355]">
          Sort
        </label>
        <div className="relative">
          <select
            value={sort}
            onChange={(e) =>
              onSortChange(e.target.value as "newest" | "oldest")
            }
            className="appearance-none text-sm bg-white rounded-lg h-9 px-3  outline-none font-medium text-[#8C7355] outline-0 border border-[#8C7355]/30
            focus:ring-2 min-w-30 cursor-pointer lg:min-w-40"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <ChevronDown className="absolute w-5 h-5 right-3 top-1/2 -translate-y-1/2 text-[#8C7355] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
