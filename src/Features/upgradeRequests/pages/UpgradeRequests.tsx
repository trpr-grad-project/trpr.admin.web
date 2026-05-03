import { useState } from "react";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import RequestsTable from "../components/RequestsTable";
import { getMockPage } from "../../../mocks/upgradeRequests.mock";
import type { RequestStatus } from "../../../types/upgradeRequest";

export default function UpgradeRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<RequestStatus>("pending");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const paginatedData = getMockPage(currentPage, statusFilter, sort);

  function handleStatusChange(newStatus: RequestStatus) {
    setStatusFilter(newStatus);
    setCurrentPage(1);
  }

  function handleSortChange(newSort: "newest" | "oldest") {
    setSort(newSort);
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
        <p className="text-[#8C7355] font-['Noto_Serif'] italic text-sm">
          Manage and verify royal tier account elevations.
        </p>
      </header>

      <section className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-[#8C7355]/5 border border-outline-variant/20 overflow-hidden">
        <RequestsTable requests={paginatedData.data} />
        <div className="px-8 py-6 bg-surface-container-low rounded-b-xl">
          <Pagination
            page={paginatedData.page}
            pageSize={paginatedData.pageSize}
            totalCount={paginatedData.totalCount}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </section>
  );
}
