import { Search } from "lucide-react";

interface Props {
  filters: {
    identifier: string;
    companyName: string;
  };

  onFilterChange: (key: string, value: string) => void;
}

export default function CompaniesFilters({ filters, onFilterChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Company Name */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />

        <input
          type="text"
          value={filters.companyName}
          onChange={(e) => onFilterChange("companyName", e.target.value)}
          placeholder="Search by company name..."
          className="w-full text-on-surface bg-surface-container-lowest border border-outline-variant/50 rounded-lg py-2 pl-10 pr-4 text-body-md outline-0 focus:border-primary transition-all"
        />
      </div>

      {/* Identifier */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />

        <input
          type="text"
          value={filters.identifier}
          onChange={(e) => onFilterChange("identifier", e.target.value)}
          placeholder="Search by identifier..."
          className="w-full text-on-surface bg-surface-container-lowest border border-outline-variant/50 rounded-lg py-2 pl-10 pr-4 text-body-md outline-0 focus:border-primary transition-all"
        />
      </div>
    </div>
  );
}
