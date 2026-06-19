import { useSearchParams } from "react-router-dom";
import Filters from "../components/Filters";
import Pagination from "../../../Components/UI/Pagination";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const statusFilter = (searchParams.get("status") as RequestStatus) || "pending";
  const pageSize = Number(searchParams.get("pageSize")) || 10;

  const { data, isLoading, isError } = useGetUpgradeRequestsQuery({
    page: currentPage,
    pageSize,
    sortByUpdatedate: true,
    status: statusMap[statusFilter],
  });

  function handleStatusChange(newStatus: RequestStatus) {
    setSearchParams({ page: "1", status: newStatus, pageSize: String(pageSize) });
  }

  function handlePageChange(newPage: number) {
    setSearchParams({ page: String(newPage), status: statusFilter, pageSize: String(pageSize) });
  }

  function handlePageSizeChange(newPageSize: number) {
    setSearchParams({ page: "1", status: statusFilter, pageSize: String(newPageSize) });
  }

  return (
    <section className="flex-1 flex flex-col">
      <div className="bg-surface/40 pb-3 border-b border-outline-variant/70 flex items-center justify-between">
        <Filters
          status={statusFilter}
          onStatusChange={handleStatusChange}
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