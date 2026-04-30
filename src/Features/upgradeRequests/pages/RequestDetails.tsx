import { useParams } from "react-router-dom";
import { ChevronRight, ShieldCheck } from "lucide-react";
import PastRequests from "../components/PastRequests";
import HelpWidget from "../components/HelpWidget";
import UserInfo from "../components/UserInfo";
import RequestTitleAndDesc from "../components/RequestTitleAndDesc";
import NationalID from "../components/NationalID";
import Certificates from "../components/Certificates";
import ApproveRequest from "../components/ApproveRequest";
import ApprovedRequest from "../components/ApprovedRequest";
import DenyRequest from "../components/DenyRequest";
import DeniedRequest from "../components/DeniedRequest";
import {
  allMockRequests,
  mockPastRequests,
} from "../../../mocks/upgradeRequests.mock";
import type { RequestStatus } from "../../../types/upgradeRequest";

function getStatusBadgeStyles(status: RequestStatus): string {
  switch (status) {
    case "pending":
      return "bg-tertiary/20 text-on-tertiary-fixed border-tertiary-container/30";
    case "approved":
      return "bg-green-100 text-green-600 border-green-200";
    case "denied":
      return "bg-error-container text-error border-error-container/30";
  }
}

function getDotStyles(status: RequestStatus): string {
  switch (status) {
    case "pending":
      return "bg-tertiary";
    case "approved":
      return "bg-green-600";
    case "denied":
      return "bg-error";
  }
}

export default function RequestDetails() {
  const { requestId } = useParams();
  const request =
    allMockRequests.find((r) => r.id === requestId) ?? allMockRequests[0];

  return (
    <section className="flex-1 relative">
      {/* HEADER */}
      <header className="flex justify-between items-end">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#8C7355] uppercase text-sm tracking-[0.2em]">
            <span className="font-semibold">Requests</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-bold">{request.id}</span>
          </div>

          <h2 className="text-[#2D2926] font-bold font-['Noto_Serif'] text-[40px]">
            Request Details
          </h2>
        </div>

        <div className="flex gap-4">
          <span
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 border ${getStatusBadgeStyles(
              request.status,
            )}`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${getDotStyles(
                request.status,
              )}`}
            ></span>
            {request.status}
          </span>
        </div>
      </header>

      {/* BODY */}
      <div className="grid grid-cols-12 gap-8 items-start mt-10">
        {/* LEFT */}
        <section className="col-span-8 space-y-8">
          {/* USER INFO */}
          <div className="bg-white rounded-lg border border-outline-variant/30 overflow-hidden">
            <div className="p-8 space-y-8">
              <UserInfo
                userName={request.userName}
                createdAtUtc={request.createdAtUtc}
                languages={request.languages}
              />

              <RequestTitleAndDesc
                title={request.title}
                description={request.description}
              />
            </div>
          </div>

          {/* DOCUMENTS */}
          <div className="space-y-6">
            <h4 className="font-h3 text-xl text-[#2D2926] flex items-center gap-2 font-bold">
              <ShieldCheck className="text-primary" />
              Verification Documents
            </h4>

            <div className="space-y-8">
              <NationalID
                front={request.nationalIdFront}
                back={request.nationalIdBack}
              />

              <Certificates certificates={request.certificates} />
            </div>
          </div>

          {/* ACTIONS (ONLY IF PENDING) */}
          {request.status === "pending" && (
            <div className="pt-10">
              <div className="p-8 rounded-lg border border-outline-variant/30 space-y-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ApproveRequest />
                  <DenyRequest />
                </div>
              </div>
            </div>
          )}

          {request.status === "approved" && (
            <ApprovedRequest
              reviewedAt={request.reviewedAt!}
              reviewedBy={request.reviewedBy!}
            />
          )}

          {request.status === "denied" && (
            <DeniedRequest
              reviewedAt={request.reviewedAt!}
              reviewedBy={request.reviewedBy!}
              rejectionReason={request.rejectionReason!}
            />
          )}
        </section>

        {/* RIGHT */}
        <section className="col-span-4 space-y-8">
          <div className="bg-white border border-outline-variant/30 rounded-lg p-6">
            <PastRequests pastRequests={mockPastRequests} />
          </div>

          <div className="bg-surface-container-low rounded-lg p-6 border border-outline-variant/30 flex items-start gap-4">
            <HelpWidget />
          </div>
        </section>
      </div>
    </section>
  );
}
