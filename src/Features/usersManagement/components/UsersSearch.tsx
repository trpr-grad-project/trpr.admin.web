import { Search } from "lucide-react";

interface UsersSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function UsersSearch({ search, onSearchChange }: UsersSearchProps) {
  return (
    <div className="bg-surface-container-low p-4 rounded-xl mb-6 flex flex-wrap items-center justify-between gap-4 border border-outline-variant/20">
      <div className="flex items-center gap-4 grow">
        <div className="relative grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full text-on-surface bg-surface-container-lowest border border-outline-variant/50 rounded-lg py-2 pl-10 pr-4 text-body-md outline-0 focus:border-primary transition-all"
            placeholder="Search users..."
            type="text"
          />
        </div>
      </div>
    </div>
  );
}