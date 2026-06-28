import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../Components/UI/Pagination";
import Filters from "../components/Filters";
import SupportTable from "../components/SupportTable";
import { useGetSupportRequestsQuery } from "../../../store/api/supportApi";
import type { SupportStatus } from "../../../types/support";

export default function SupportManagement() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;

  const currentStatus =
    (searchParams.get("status") as SupportStatus) || "Unread";

  const [subjectSearch, setSubjectSearch] = useState(
    searchParams.get("subjectSearch") || "",
  );

  const [nameSearch, setNameSearch] = useState(
    searchParams.get("nameSearch") || "",
  );

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [status, setStatus] = useState<SupportStatus>(currentStatus);

  const { data, isLoading, isError } = useGetSupportRequestsQuery({
    page: currentPage,
    pageSize,
    status,
    subjectSearch,
    nameSearch,
  });

  function handleSubjectChange(value: string) {
    setSubjectSearch(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setSearchParams({
        page: "1",
        pageSize: String(pageSize),
        status,
        subjectSearch: value,
        nameSearch,
      });
    }, 500);
  }

  function handleNameChange(value: string) {
    setNameSearch(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setSearchParams({
        page: "1",
        pageSize: String(pageSize),
        status,
        subjectSearch,
        nameSearch: value,
      });
    }, 500);
  }

  function handleStatusChange(value: SupportStatus) {
    setStatus(value);

    setSearchParams({
      page: "1",
      pageSize: String(pageSize),
      status: value,
      subjectSearch,
      nameSearch,
    });
  }

  function handlePageChange(newPage: number) {
    setSearchParams({
      page: String(newPage),
      pageSize: String(pageSize),
      status,
      subjectSearch,
      nameSearch,
    });
  }

  function handlePageSizeChange(newPageSize: number) {
    setSearchParams({
      page: "1",
      pageSize: String(newPageSize),
      status,
      subjectSearch,
      nameSearch,
    });
  }

  return (
    <section className="flex-1 flex flex-col">
      <header className="mb-10">
        <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
          Support Management
        </h2>

        <p className="text-secondary font-['Noto_Serif'] italic text-sm">
          Manage and review support requests submitted by TouRA users.
        </p>
      </header>

      <div className="mb-6">
        <Filters
          subjectSearch={subjectSearch}
          nameSearch={nameSearch}
          status={status}
          onSubjectChange={handleSubjectChange}
          onNameChange={handleNameChange}
          onStatusChange={handleStatusChange}
        />
      </div>

      <section className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-secondary/5 border border-outline-variant/20 overflow-hidden">
        {isLoading && (
          <div className="flex items-center justify-center py-20 text-secondary">
            Loading...
          </div>
        )}

        {isError && (
          <div className="flex items-center justify-center py-20 text-error">
            Something went wrong. Please try again.
          </div>
        )}

        {data && (
          <>
            <SupportTable supports={data.items} />

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
    </section>
  );
}
