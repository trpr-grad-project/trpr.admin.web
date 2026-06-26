export default function PlacesLoading() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="h-28 rounded-2xl bg-surface-container animate-pulse border border-outline-variant/10"
        />
      ))}
    </div>
  );
}