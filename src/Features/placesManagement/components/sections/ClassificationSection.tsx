import { Building2, Tag } from "lucide-react";
import type {
  PlaceLookup,
  SavePlaceRequest,
} from "../../../../types/place";

interface ClassificationSectionProps {
  form: SavePlaceRequest;
  setForm: React.Dispatch<React.SetStateAction<SavePlaceRequest>>;

  categories: PlaceLookup[];
  governorates: PlaceLookup[];
  tags: PlaceLookup[];

  isTagsOpen: boolean;
  setIsTagsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  errors: Partial<Record<keyof SavePlaceRequest, string>>;
}

export default function ClassificationSection({
  form,
  setForm,
  categories,
  governorates,
  tags,
  isTagsOpen,
  setIsTagsOpen,
  errors,
}: ClassificationSectionProps) {
  function toggleTag(id: string) {
    setForm((prev) => ({
      ...prev,
      tagIds: prev.tagIds.includes(id)
        ? prev.tagIds.filter((t) => t !== id)
        : [...prev.tagIds, id],
    }));
  }

  return (
    <div className="rounded-2xl border border-outline-variant/20 p-6 bg-surface-container-low">
      <div className="flex items-center gap-2 mb-5">
        <Building2 className="w-5 h-5 text-primary" />

        <h4 className="font-bold text-lg text-on-surface">
          Classification
        </h4>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Category */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Category
          </label>

          <select
            value={form.categoryId}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                categoryId: e.target.value,
              }))
            }
            className={`w-full appearance-none px-4 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface outline-none transition
              ${
                errors.categoryId
                  ? "border border-error focus:border-error"
                  : "border border-outline-variant/30 focus:border-primary"
              }`}
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>

          {errors.categoryId && (
            <p className="mt-2 text-sm text-error">
              {errors.categoryId}
            </p>
          )}
        </div>

        {/* Governorate */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Governorate
          </label>

          <select
            value={form.governorateId}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                governorateId: e.target.value,
              }))
            }
            className={`w-full appearance-none px-4 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface outline-none transition
              ${
                errors.governorateId
                  ? "border border-error focus:border-error"
                  : "border border-outline-variant/30 focus:border-primary"
              }`}
          >
            <option value="">Select Governorate</option>

            {governorates.map((gov) => (
              <option
                key={gov.id}
                value={gov.id}
              >
                {gov.name}
              </option>
            ))}
          </select>

          {errors.governorateId && (
            <p className="mt-2 text-sm text-error">
              {errors.governorateId}
            </p>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6">
        <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-secondary font-bold mb-3">
          <Tag className="w-4 h-4" />
          Tags
        </label>

        <button
          type="button"
          onClick={() => setIsTagsOpen(!isTagsOpen)}
          className={`w-full text-left px-4 py-3 rounded-xl transition
            ${
              errors.tagIds
                ? "border border-error bg-surface-container-lowest"
                : "border border-outline-variant/30 bg-surface-container-lowest"
            }`}
        >
          {form.tagIds.length > 0
            ? `${form.tagIds.length} Selected`
            : "Select Tags"}
        </button>

        {errors.tagIds && (
          <p className="mt-2 text-sm text-error">
            {errors.tagIds}
          </p>
        )}

        {isTagsOpen && (
          <div className="mt-3 rounded-xl border border-outline-variant/20 p-3 bg-surface max-h-56 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`px-3 py-2 rounded-full border transition ${
                    form.tagIds.includes(tag.id)
                      ? "bg-primary text-on-primary border-primary"
                      : "border-outline-variant text-on-surface hover:border-primary"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}