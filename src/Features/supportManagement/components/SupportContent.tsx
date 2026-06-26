import { MessageSquareText, ScrollText } from "lucide-react";

interface SupportContentProps {
  subject: string;
  description: string;
}

export default function SupportContent({
  subject,
  description,
}: SupportContentProps) {
  return (
    <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden">
      <div className="p-8 space-y-8">
        {/* Subject */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MessageSquareText className="text-primary w-5 h-5" />

            <h2 className="text-on-surface font-semibold text-lg">
              Subject
            </h2>
          </div>

          <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-5">
            <p className="text-on-surface font-semibold text-lg">
              {subject}
            </p>
          </div>
        </div>

        <div className="border-t border-outline-variant/20"></div>

        {/* Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ScrollText className="text-primary w-5 h-5" />

            <h2 className="text-on-surface font-semibold text-lg">
              Description
            </h2>
          </div>

          <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-6">
            <p className="text-on-surface leading-8 whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}