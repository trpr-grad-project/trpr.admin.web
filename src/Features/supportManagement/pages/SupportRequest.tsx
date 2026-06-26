import {
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetSupportByIdQuery } from "../../../store/api/supportApi";
import SupportAndUserInfo from "../components/SupportAndUserInfo";
import SupportContent from "../components/SupportContent";


export default function SupportRequest() {
  const { supportId } = useParams();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const {
    data: support,
    isLoading,
    isError,
  } = useGetSupportByIdQuery(supportId!);

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-20 text-secondary">
        Loading...
      </div>
    );

  if (isError || !support)
    return (
      <div className="flex items-center justify-center py-20 text-error">
        Something went wrong. Please try again.
      </div>
    );

  return (
    <section className="flex-1">
      <header>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary uppercase text-sm tracking-[0.2em]">
            <span className="font-semibold">Support</span>

            <ChevronRight className="w-3 h-3" />

            <span className="text-primary font-bold">
              #{support.id.slice(0, 8)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const from = searchParams.get("from") || "";
                navigate(`/support?${decodeURIComponent(from)}`);
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant/70 hover:bg-surface-container transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
            </button>

            <h2 className="text-on-surface font-bold font-['Noto_Serif'] text-[40px]">
              Support Request
            </h2>
          </div>
        </div>
      </header>

      <div className="space-y-10 mt-10">
        <SupportAndUserInfo support={support} />

        <SupportContent
          subject={support.subject}
          description={support.description}
        />
      </div>
    </section>
  );
}