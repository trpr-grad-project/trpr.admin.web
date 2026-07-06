import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PlaceSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search places..."
        className="
          w-full
          rounded-xl
          border
          border-outline-variant/30
          bg-surface
          py-3
          pl-11
          pr-4
          outline-none
          text-on-surface
          focus:border-primary
        "
      />
    </div>
  );
}