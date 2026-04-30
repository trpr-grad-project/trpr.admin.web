import { useState } from 'react';
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import RequestsTable from "../components/RequestsTable";
import StatsCard from "../components/StatsCard";
import { getMockPage } from '../../../mocks/upgradeRequests.mock';
import type { RequestStatus } from '../../../types/upgradeRequest';

export default function UpgradeRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<RequestStatus>('pending');
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest');

  const paginatedData = getMockPage(currentPage, statusFilter, sort);

  function handleStatusChange(newStatus: RequestStatus) {
    setStatusFilter(newStatus);
    setCurrentPage(1);
  }

  function handleSortChange(newSort: 'newest' | 'oldest') {
    setSort(newSort);
    setCurrentPage(1);
  }

  return (
    <section className="flex-1 flex flex-col">
      <header className="mb-10">
        <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
          Upgrade Requests
        </h2>
        <p className="text-[#8C7355] font-['Noto_Serif'] italic text-sm">
          Manage and verify royal tier account elevations.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        <div className="md:col-span-7 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-wrap items-center gap-6 xl:col-span8">
          <Filters
            status={statusFilter}
            sort={sort}
            onStatusChange={handleStatusChange}
            onSortChange={handleSortChange}
          />
        </div>
        <div className="md:col-span-5 bg-primary-container/10 p-6 rounded-xl border border-primary-container/20 flex items-center justify-between xl:col-span4">
          <StatsCard />
        </div>
      </section>

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