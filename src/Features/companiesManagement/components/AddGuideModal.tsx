import { useState } from "react";
import { X, Search } from "lucide-react";

import { useGetCompanyGuidesQuery } from "../../../store/api/companiesApi"; // TODO: adjust path to match your project structure
import { useAddGuideToCompanyMutation } from "../../../store/api/companiesApi"; // TODO: adjust path to match your project structure

interface Props {
  isOpen: boolean;
  onClose: () => void;
  companyId: string; // TODO: pass this in from the company details page (e.g. useParams())
}

export default function AddGuideModal({ isOpen, onClose, companyId }: Props) {
  const [search, setSearch] = useState("");
  const [selectedGuideId, setSelectedGuideId] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { data: guides, isLoading: isLoadingGuides } =
    useGetCompanyGuidesQuery();

  const [addGuideToCompany, { isLoading: isAdding }] =
    useAddGuideToCompanyMutation();

  if (!isOpen) return null;

  const filteredGuides = (guides ?? []).filter((guide) => {
    const fullName = `${guide.firstName} ${guide.lastName}`.toLowerCase();
    const term = search.toLowerCase();

    return (
      fullName.includes(term) ||
      guide.userName.toLowerCase().includes(term) ||
      (guide.email ?? "").toLowerCase().includes(term)
    );
  });

  function resetAndClose() {
    setSearch("");
    setSelectedGuideId("");
    setErrorMessage(null);
    onClose();
  }

  async function handleAddGuide() {
    if (!selectedGuideId) return;

    setErrorMessage(null);

    try {
      await addGuideToCompany({
        companyId,
        guideId: selectedGuideId,
      }).unwrap();

      resetAndClose();
    } catch (err) {
      console.error(err);
      setErrorMessage("Couldn't add this guide. Please try again.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-surface rounded-2xl border border-outline-variant/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/20">
          <div>
            <h2 className="text-3xl font-bold font-['Noto_Serif'] text-on-surface">
              Add Guide
            </h2>

            <p className="text-secondary mt-1">
              Select one guide to add to this company.
            </p>
          </div>

          <button
            onClick={resetAndClose}
            className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center cursor-pointer"
          >
            <X className="text-primary" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guide..."
              className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-low pl-11 pr-4 py-3 outline-none focus:border-primary text-on-surface"
            />
          </div>

          <div className="border border-outline-variant/20 rounded-xl overflow-hidden">
            <div className="max-h-80 overflow-y-auto">
              {isLoadingGuides ? (
                <div className="p-8 text-center text-secondary">
                  Loading guides...
                </div>
              ) : filteredGuides.length === 0 ? (
                <div className="p-8 text-center text-secondary">
                  No guides found.
                </div>
              ) : (
                filteredGuides.map((guide) => (
                  <label
                    key={guide.id}
                    className="flex items-center gap-4 px-5 py-4 border-b border-outline-variant/10 hover:bg-surface-container cursor-pointer"
                  >
                    <input
                      type="radio"
                      checked={selectedGuideId === guide.id}
                      onChange={() => setSelectedGuideId(guide.id)}
                      className="cursor-pointer"
                    />

                    <div>
                      <p className="font-semibold text-on-surface">
                        {guide.firstName} {guide.lastName}
                      </p>

                      <p className="text-sm text-secondary">
                        {guide.email ?? guide.userName}
                      </p>
                    </div>
                  </label>
                ))
              )}
            </div>
          </div>

          {errorMessage && (
            <p className="text-sm text-error">{errorMessage}</p>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-outline-variant/20 bg-surface-container-low">
          <div className="flex gap-4">
            <button
              onClick={resetAndClose}
              className="flex-1 border border-outline-variant/30 text-secondary py-3 rounded-xl font-semibold hover:bg-surface-container transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleAddGuide}
              disabled={!selectedGuideId || isAdding}
              className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isAdding ? "Adding..." : "Add Guide"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}