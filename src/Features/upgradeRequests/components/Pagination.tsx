import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, pageSize, totalCount, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalCount);

  const getVisiblePages = (): number[] => {
    if (page <= 2) return Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1);
    if (page >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages].filter(p => p > 0);
    return [page - 1, page, page + 1];
  };

  const visiblePages = getVisiblePages();
  const showStartEllipsis = visiblePages[0] > 1;
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-[#8C7355] font-['Noto_Serif'] italic">
        Showing {from} to {to} of {totalCount} requests
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-[#8C7355] hover:bg-surface-container transition-colors disabled:opacity-50 cursor-pointer"
        >
          <ChevronLeft />
        </button>

        {showStartEllipsis && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-container transition-colors font-bold cursor-pointer"
            >
              1
            </button>
            <span className="px-2 text-[#8C7355]">...</span>
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
            <span className="px-2 text-[#8C7455]">...</span>
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
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-[#8C7355] hover:bg-surface-container transition-colors disabled:opacity-50 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}