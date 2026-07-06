import { useState } from "react";
import type { CompanyGuide } from "../../../types/company";
import GuidesModal from "./GuidesModal";

interface Props {
  guides: CompanyGuide[];
}

export default function CompanyGuidesSection({ guides }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleGuides = guides.slice(0, 3);
  const remainingGuides = guides.length - visibleGuides.length;

  return (
    <>
      <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-2xl shadow-secondary/5 p-10 mt-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold font-['Noto_Serif'] text-on-surface">
            Guides
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {visibleGuides.map((guide) => (
            <div
              key={guide.id}
              className="border border-outline-variant/20 bg-surface-container-low rounded-xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-container/20 text-primary flex items-center justify-center text-lg font-bold shrink-0">
                  {guide.firstName.charAt(0)}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-on-surface text-lg truncate">
                    {guide.firstName} {guide.lastName}
                  </h4>

                  <p className="text-sm text-secondary truncate">
                    {guide.userName}
                  </p>
                </div>
                {guide.rating && (
                  <span className="ml-auto px-2 py-1 rounded-full bg-warning-container/20 text-sm font-bold">
                    ⭐ {guide.rating}
                  </span>
                )}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                    Email
                  </p>

                  <p className="text-on-surface truncate">
                    {guide.email ?? "-"}
                  </p>
                </div>

                <div className="ml-auto">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                    Phone
                  </p>

                  <p className="text-on-surface">{guide.phoneNumber ?? "-"}</p>
                </div>
              </div>
            </div>
          ))}

          {remainingGuides > 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-dashed border-primary/30 rounded-xl bg-surface-container-low hover:bg-primary/5 transition-all flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <span className="text-4xl font-bold text-primary">
                +{remainingGuides}
              </span>

              <span className="mt-2 text-lg font-bold text-on-surface">
                More Guides
              </span>

              <span className="text-sm text-secondary mt-1">
                Click to View All
              </span>
            </button>
          )}
        </div>
      </section>

      <GuidesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        guides={guides}
      />
    </>
  );
}
