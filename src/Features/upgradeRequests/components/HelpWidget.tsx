import { Info } from "lucide-react";

export default function HelpWidget() {
  return (
    <>
      <Info className="text-tertiary w-5 h-5 col-span-1" />
      <div className="col-span-8">
        <p className="font-bold text-on-surface text-sm uppercase tracking-tight">
          Review Guidelines
        </p>
        <p className="text-xs text-secondary mt-2 leading-relaxed">
          Review all applicant information carefully before taking action. When
          rejecting a request, provide a specific and detailed explanation for
          the decision.
        </p>
      </div>
    </>
  );
}
