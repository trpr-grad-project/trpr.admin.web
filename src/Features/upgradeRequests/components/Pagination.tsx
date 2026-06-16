import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
interface PaginationProps {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export default function Pagination({
  page,
  pageSize,
  totalCount,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const from = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalCount);

  const getVisiblePages = (): number[] => {
    if (page <= 2)
      return Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1);

    if (page >= totalPages - 1)
      return [totalPages - 2, totalPages - 1, totalPages].filter((p) => p > 0);

    return [page - 1, page, page + 1];
  };

  const visiblePages = getVisiblePages();
  const showStartEllipsis = visiblePages[0] > 1;
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
      {/* Left */}
      <div className="flex items-center gap-3">
        <span className="text-[13px] font-medium uppercase text-secondary">
          Page Size
        </span>

        <div className="relative">
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="appearance-none h-10 w-20 rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 pr-8 text-sm font-medium text-on-surface outline-none focus:ring-2 focus:ring-primary-container cursor-pointer"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-on-surface">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Center */}
      <p className="text-center text-[13px] font-medium uppercase tracking-wide text-secondary">
        Showing {from}-{to} of {totalCount} results
      </p>

      {/* Right */}
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-secondary hover:bg-surface-container transition-colors disabled:opacity-50 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        {showStartEllipsis && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-container transition-colors font-bold cursor-pointer"
            >
              1
            </button>

            <span className="px-1 text-secondary">...</span>
          </>
        )}

        {visiblePages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors cursor-pointer ${
              p === page
                ? "bg-primary-container text-on-primary-container shadow-md"
                : "border border-outline-variant/30 text-on-surface hover:bg-surface-container"
            }`}
          >
            {p}
          </button>
        ))}

        {showEndEllipsis && (
          <>
            <span className="px-1 text-secondary">...</span>

            <button
              onClick={() => onPageChange(totalPages)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-container transition-colors font-bold cursor-pointer"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-secondary hover:bg-surface-container transition-colors disabled:opacity-50 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
