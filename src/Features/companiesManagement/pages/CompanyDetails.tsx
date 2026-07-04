import { ArrowLeft } from "lucide-react";
import CompanyGuidesSection from "../components/CompanyGuidesSection";
import CompanyDescription from "../components/CompanyDescription";
import CompanyActionsCard from "../components/CompanyActionsCard";
import CompanyInfoCard from "../components/CompanyInfoCard";
import CompanyHeader from "../components/CompanyHeader";

export default function CompanyDetails() {
  return (
    <section className="flex-1">
      {/* Header */}
      <section className="mb-12">
        <div className="flex items-center gap-6">
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant/70 hover:bg-surface-container transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 text-primary" />
          </button>

          <CompanyHeader />
        </div>
      </section>

      <div className="space-y-8">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-8">
          {/* Company Information */}
          <CompanyInfoCard />

          {/* Quick Actions */}
          <CompanyActionsCard />
        </div>

        {/* Description */}
        <CompanyDescription />
      </div>

      <CompanyGuidesSection />
    </section>
  );
}
