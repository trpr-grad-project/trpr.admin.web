import { useParams, useNavigate } from "react-router-dom";
import { ChevronRight, ShieldCheck, ArrowLeft } from "lucide-react";
import RequestsHistory from "../components/RequestsHistory";
import HelpWidget from "../components/HelpWidget";
import UserInfo from "../components/UserInfo";
import NationalID from "../components/NationalID";
import Certificates from "../components/Certificates";
import ApproveRequest from "../components/ApproveRequest";
import ApprovedRequest from "../components/ApprovedRequest";
import DenyRequest from "../components/DenyRequest";
import DeniedRequest from "../components/DeniedRequest";
import { useGetUpgradeRequestDetailsQuery } from "../../../store/api/upgradeRequestsApi";

function getStatusBadgeStyles(status: string): string {
  switch (status) {
    case "Approved":
      return "bg-success-container/20 text-success border-success-container/50";
    case "Rejected":
      return "bg-error-container text-error border-error-container/30";
    default:
      return "bg-tertiary/10 text-secondary border-tertiary-container/30";
  }
}

function getDotStyles(status: string): string {
  switch (status) {
    case "Approved":
      return "bg-green-600";
    case "Rejected":
      return "bg-error";
    default:
      return "bg-tertiary";
  }
}

export default function RequestDetails() {
  const { requestId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetUpgradeRequestDetailsQuery(requestId!);

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-20 text-secondary">
        Loading...
      </div>
    );

  if (isError || !data || data.length === 0)
    return (
      <div className="flex items-center justify-center py-20 text-error">
        Something went wrong. Please try again.
      </div>
    );

  const request = data.find(r => r.id === requestId) ?? data[0];
  const idFront = request.documents.find((d) => d.type === "IDFront")?.file ?? null;
  const idBack = request.documents.find((d) => d.type === "IDBack")?.file ?? null;
  const certificates = request.documents
    .filter((d) => d.type === "Certificate")
    .map((d) => ({ name: "Certificate", url: d.file }));

  return (
    <section className="flex-1 relative">
      <header className="flex justify-between items-end">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary uppercase text-sm tracking-[0.2em]">
            <span className="font-semibold">Requests</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-bold">
              #{request.id.slice(0, 8)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant/70 hover:bg-surface-container transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
            </button>
            <h2 className="text-on-surface font-bold font-['Noto_Serif'] text-[40px]">
              Request Details
            </h2>
          </div>
        </div>

        <div className="flex gap-4">
          <span
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 border ${getStatusBadgeStyles(request.status)}`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${getDotStyles(request.status)}`}
            ></span>
            {request.status}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8 items-start mt-10">
        <section className="col-span-8 space-y-8">
          <div className="bg-surface rounded-lg border border-outline-variant/30 overflow-hidden">
            <div className="p-8 space-y-8">
              <UserInfo
                userName={`${request.user.firstName} ${request.user.lastName}`}
                createdAtUtc={request.createdAt}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-h3 text-xl text-on-surface flex items-center gap-2 font-bold">
              <ShieldCheck className="text-primary" />
              Verification Documents
            </h4>
            <div className="space-y-8">
              {(idFront || idBack) && (
                <NationalID front={idFront ?? ""} back={idBack} />
              )}
              {certificates.length > 0 && (
                <Certificates certificates={certificates} />
              )}
            </div>
          </div>

          {request.status === "Pending" && (
            <div className="pt-10">
              <div className="p-8 rounded-lg border border-outline-variant/30 space-y-6 bg-surface">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ApproveRequest requestId={request.id} />
                  <DenyRequest requestId={request.id} />
                </div>
              </div>
            </div>
          )}

          {request.status === "Approved" && (
            <ApprovedRequest
              reviewedAt={request.reviewedAt!}
              reviewedBy={request.adminId!}
            />
          )}

          {request.status === "Rejected" && (
            <DeniedRequest
              reviewedAt={request.reviewedAt!}
              reviewedBy={request.adminId!}
              rejectionReason={request.rejectionReason!}
            />
          )}
        </section>

        <section className="col-span-4 space-y-8">
          <div className="bg-surface border border-outline-variant/30 rounded-lg p-6">
            <RequestsHistory requests={data} currentRequestId={requestId!} />
          </div>
          <div className="bg-surface-container-low rounded-lg p-6 border border-outline-variant/30 grid grid-cols-9">
            <HelpWidget />
          </div>
        </section>
      </div>
    </section>
  );
}