import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { MapPinPlus } from "lucide-react";

import CompaniesFilters from "../components/CompaniesFilters";
import CompaniesTable from "../components/CompaniesTable";
import AddCompanyModal from "../components/AddCompanyModal";

import Pagination from "../../../Components/UI/Pagination";

import { useGetCompaniesQuery } from "../../../store/api/companiesApi";

export default function CompaniesManagement() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;

  const identifier = searchParams.get("identifier") || "";
  const companyName = searchParams.get("companyName") || "";

  const filters = {
    identifier,
    companyName,
  };

  const { data, isLoading, isError } = useGetCompaniesQuery({
    page: currentPage,
    pageSize,

    identifier: identifier || undefined,
    companyName: companyName || undefined,
  });

  function handleFilterChange(key: string, value: string) {
    const params = {
      page: "1",
      pageSize: String(pageSize),

      identifier,
      companyName,
    };

    params[key as keyof typeof params] = value;

    setSearchParams(params);
  }

  function handlePageChange(page: number) {
    setSearchParams({
      page: String(page),
      pageSize: String(pageSize),

      identifier,
      companyName,
    });
  }

  function handlePageSizeChange(size: number) {
    setSearchParams({
      page: "1",
      pageSize: String(size),

      identifier,
      companyName,
    });
  }

  return (
    <section className="flex-1 flex flex-col">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-on-surface mb-2 text-[40px] font-bold font-['Noto_Serif']">
            Companies Management
          </h2>

          <p className="text-secondary font-['Noto_Serif'] italic text-sm">
            Manage tourism companies, organize their guides, and create company
            trips across the TouRA platform.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-bold text-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          <MapPinPlus className="h-7 w-7" />
          <span>Add Company</span>
        </button>
      </header>

      <section className="mb-6 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 shadow-2xl shadow-secondary/5">
        <CompaniesFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </section>

      <section className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-secondary/5 border border-outline-variant/20 overflow-hidden">
        {isLoading && (
          <div className="flex justify-center py-20">Loading...</div>
        )}

        {isError && (
          <div className="flex justify-center py-20 text-error">
            Something went wrong.
          </div>
        )}

        {data && (
          <>
            <CompaniesTable companies={data.items} />

            <div className="px-8 py-6 bg-surface-container-low rounded-b-xl">
              <Pagination
                page={data.page}
                pageSize={pageSize}
                totalCount={data.totalItems}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </div>
          </>
        )}
      </section>

      <AddCompanyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </section>
  );
}
