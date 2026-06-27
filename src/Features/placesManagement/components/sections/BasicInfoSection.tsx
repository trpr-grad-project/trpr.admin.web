import { FileText } from "lucide-react";
import type { SavePlaceRequest } from "../../../../types/place";

interface BasicInfoSectionProps {
  form: SavePlaceRequest;
  setForm: React.Dispatch<React.SetStateAction<SavePlaceRequest>>;
  errors: Partial<Record<keyof SavePlaceRequest, string>>;
}

export default function BasicInfoSection({
  form,
  setForm,
  errors,
}: BasicInfoSectionProps) {
  return (
    <div className="rounded-2xl border border-outline-variant/20 p-6 bg-surface-container-low">
      <div className="flex items-center gap-2 mb-5">
        <FileText className="w-5 h-5 text-primary" />

        <h4 className="font-bold text-lg text-on-surface">
          Basic Information
        </h4>
      </div>

      <div className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Title
          </label>

          <input
            type="text"
            value={form.title}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            placeholder="Enter place title"
            className={`w-full px-4 py-3 rounded-xl bg-surface text-on-surface outline-none transition
              ${
                errors.title
                  ? "border border-error focus:border-error"
                  : "border border-outline-variant/30 focus:border-primary"
              }`}
          />

          {errors.title && (
            <p className="mt-2 text-sm text-error">
              {errors.title}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Description
          </label>

          <textarea
            rows={5}
            value={form.description}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeholder="Describe the place..."
            className={`w-full px-4 py-3 rounded-xl bg-surface text-on-surface outline-none resize-none transition
              ${
                errors.description
                  ? "border border-error focus:border-error"
                  : "border border-outline-variant/30 focus:border-primary"
              }`}
          />

          {errors.description && (
            <p className="mt-2 text-sm text-error">
              {errors.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}