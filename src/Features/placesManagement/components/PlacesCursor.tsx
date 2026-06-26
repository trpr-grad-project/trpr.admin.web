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
    <div className="flex justify-center py-8">
      <button
        onClick={onLoadMore}
        disabled={isFetching}
        className="px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
      >
        {isFetching ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}