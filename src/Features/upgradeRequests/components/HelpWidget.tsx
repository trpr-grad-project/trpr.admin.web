import { Info } from "lucide-react";

export default function HelpWidget() {
  return (
    <>
      <Info className="text-tertiary w-5 h-5 col-span-1" />
      <div className="col-span-8">
        <p className="font-bold text-on-surface text-sm uppercase tracking-tight">
          Review Protocol
        </p>
        <p className="text-xs text-secondary mt-2 leading-relaxed">
          Ensure all ID and license numbers match government databases before
          approval. Refer to Section 4.2 of the Guide Code.
        </p>
      </div>
    </>
  );
}
