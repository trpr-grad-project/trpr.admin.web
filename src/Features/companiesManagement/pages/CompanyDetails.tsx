import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";

import { useGetCompanyByIdQuery } from "../../../store/api/companiesApi";

import CompanyGuidesSection from "../components/CompanyGuidesSection";
import CompanyDescription from "../components/CompanyDescription";
import CompanyActionsCard from "../components/CompanyActionsCard";
import CompanyInfoCard from "../components/CompanyInfoCard";
import CompanyHeader from "../components/CompanyHeader";
import CreateTripModal from "../components/CreateTripModal";

export default function CompanyDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { companyId } = useParams();

  const [isCreateTripOpen, setIsCreateTripOpen] = useState(false);

  const {
    data: company,
    isLoading,
    isError,
  } = useGetCompanyByIdQuery(companyId!);

  if (isLoading) {
    return (
      <section className="flex-1 flex items-center justify-center">
        <p className="text-secondary text-lg">Loading company...</p>
      </section>
    );
  }

  if (isError || !company) {
    return (
      <section className="flex-1 flex items-center justify-center">
        <p className="text-error text-lg">Failed to load company.</p>
      </section>
    );
  }

  return (
    <>
      <section className="flex-1">
        {/* Header */}
        <section className="mb-12">
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                const from = searchParams.get("from");

                if (from) {
                  navigate(`/companies?${decodeURIComponent(from)}`);
                } else {
                  navigate("/companies");
                }
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant/70 hover:bg-surface-container transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
            </button>

            <CompanyHeader company={company} />
          </div>
        </section>

        <div className="space-y-8">
          <div className="grid grid-cols-13 gap-8">
            <CompanyInfoCard company={company} />

            <CompanyActionsCard
              onCreateTrip={() => setIsCreateTripOpen(true)}
            />
          </div>

          <CompanyDescription description={company.description} />
        </div>

        <CompanyGuidesSection guides={company.guides} />
      </section>

      <CreateTripModal
        isOpen={isCreateTripOpen}
        onClose={() => setIsCreateTripOpen(false)}
      />
    </>
  );
}