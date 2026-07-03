import {Search} from 'lucide-react'

export default function CompaniesFilters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Company Name */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />

        <input
          type="text"
          placeholder="Search by company name..."
          className="w-full text-on-surface bg-surface-container-lowest border border-outline-variant/50 rounded-lg py-2 pl-10 pr-4 text-body-md outline-0 focus:border-primary transition-all"
        />
      </div>

      {/* Identifier */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />

        <input
          type="text"
          placeholder="Search by identifier..."
          className="w-full text-on-surface bg-surface-container-lowest border border-outline-variant/50 rounded-lg py-2 pl-10 pr-4 text-body-md outline-0 focus:border-primary transition-all"
        />
      </div>
    </div>
  );
}
