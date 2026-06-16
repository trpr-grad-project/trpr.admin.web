import { useState } from "react";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import RequestsTable from "../components/RequestsTable";
import type { RequestStatus } from "../../../types/upgradeRequest";
import { useGetUpgradeRequestsQuery } from "../../../store/api/upgradeRequestsApi";
import type { ApiStatus } from "../../../store/api/upgradeRequestsApi";

const statusMap: Record<RequestStatus, ApiStatus> = {
  pending: 'Pending',
  approved: 'Approved',
  denied: 'Rejected',
};

export default function UpgradeRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<RequestStatus>("pending");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, isError } = useGetUpgradeRequestsQuery({
    page: currentPage,
    pageSize,
    sortByUpdatedate: sort === "newest",
    status: statusMap[statusFilter],
  });

  function handleStatusChange(newStatus: RequestStatus) {
    setStatusFilter(newStatus);
    setCurrentPage(1);
  }

  function handleSortChange(newSort: "newest" | "oldest") {
    setSort(newSort);
    setCurrentPage(1);
  }

  function handlePageSizeChange(newPageSize: number) {
    setPageSize(newPageSize);
    setCurrentPage(1);
  }

  return (
    <section className="flex-1 flex flex-col">
      <div className="bg-surface/40 pb-3 border-b border-outline-variant/70 flex items-center justify-between">
        <Filters
          status={statusFilter}
          sort={sort}
          onStatusChange={handleStatusChange}
          onSortChange={handleSortChange}
        />
      </div>

      <header className="mb-10">
        <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
          Upgrade Requests
        </h2>
        <p className="text-secondary font-['Noto_Serif'] italic text-sm">
          Manage and verify royal tier account elevations.
        </p>
      </header>

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
            <RequestsTable requests={data.items} />
            <div className="px-8 py-6 bg-surface-container-low rounded-b-xl">
              <Pagination
                page={data.page}
                pageSize={pageSize}
                totalCount={data.totalItems}
                onPageChange={setCurrentPage}
                onPageSizeChange={handlePageSizeChange}
              />
            </div>
          </>
        )}
      </section>
    </section>
  );
}