import { ChevronDown, Loader2 } from "lucide-react";

interface PlacesCursorProps {
  hasNextPage: boolean;
  isFetching: boolean;
  onLoadMore: () => void;
}

export default function PlacesCursor({
  hasNextPage,
  isFetching,
  onLoadMore,
}: PlacesCursorProps) {
  if (!hasNextPage) {
    return (
      <div className="text-center py-8 text-secondary">
        No more places to load.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-8">
      <button
        onClick={onLoadMore}
        disabled={isFetching}
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-low border border-outline-variant/20 text-on-surface font-semibold
        hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
        {isFetching ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            <ChevronDown className="w-5 h-5" />
            Load More Places
          </>
        )}
      </button>
    </div>
  );
}
