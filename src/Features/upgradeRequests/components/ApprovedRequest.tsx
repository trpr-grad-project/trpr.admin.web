import { CircleCheck } from "lucide-react";

interface ApprovedRequestProps {
  reviewedAt: string;
  reviewedBy: string;
}

export default function ApprovedRequest({
  reviewedAt,
  reviewedBy,
}: ApprovedRequestProps) {
  return (
    <div className="pt-10">
      <div className="p-8 rounded-lg border border-success-container/50 bg-success-container/20 flex items-start gap-4">
        <CircleCheck className="text-success w-8 h-8 mt-3" />

        <div className="space-y-3">
          <h4 className="font-h3 text-xl text-success font-bold">
            Decision Recorded
          </h4>

          <p className="text-body-md text-on-surface">
            This request was approved on{" "}
            <strong>
              {new Date(reviewedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </strong>{" "}
            by <strong>{reviewedBy}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
