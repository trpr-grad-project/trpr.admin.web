import { MapPinPlus } from "lucide-react";
import CompaniesFilters from "../components/CompaniesFilters";
import CompaniesTable from "../components/CompaniesTable";

export default function CompaniesManagement() {
  return (
    <section className="flex-1 flex flex-col">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
            Companies Management
          </h2>

          <p className="text-secondary font-['Noto_Serif'] italic text-sm">
            Manage tourism companies, organize their guides, and create company
            trips across the TouRA platform.
          </p>
        </div>

        <button className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-bold text-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
          <MapPinPlus className="h-7 w-7" />
          <span>Add Company</span>
        </button>
      </header>

      {/* Filters */}
      <section className="mb-6 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 shadow-2xl shadow-secondary/5">
        <CompaniesFilters />
      </section>

      <section className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-secondary/5 border border-outline-variant/20 overflow-hidden">
        <CompaniesTable />

        <div className="px-8 py-6 bg-surface-container-low rounded-b-xl">
          {/* pagination */}
        </div>
      </section>
    </section>
  );
}
