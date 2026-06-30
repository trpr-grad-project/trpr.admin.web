import { X } from "lucide-react";
import type { ApiPlace } from "../../../types/place";
import type { PlacesFormData } from "../../../types/place";
import { useState, useEffect } from "react";
import type { SavePlaceRequest } from "../../../types/place";
import MapPickerModal from "../../../Components/UI/MapPickerModal";
import BasicInfoSection from "./sections/BasicInfoSection";
import ClassificationSection from "./sections/ClassificationSection";
import LocationSection from "./sections/LocationSection";
import {
  useCreatePlaceMutation,
  useUpdatePlaceMutation,
} from "../../../store/api/placesApi";

interface PlaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  place?: ApiPlace;
  formData: PlacesFormData;
}

const initialForm: SavePlaceRequest = {
  title: "",
  description: "",
  categoryId: "",
  governorateId: "",
  latitude: "",
  longitude: "",
  tagIds: [],
};

export default function PlaceModal({
  isOpen,
  onClose,
  place,
  formData,
}: PlaceModalProps) {
  const isEdit = !!place;

  const [createPlace, { isLoading: isCreating }] = useCreatePlaceMutation();

  const [updatePlace, { isLoading: isUpdating }] = useUpdatePlaceMutation();

  const isSaving = isCreating || isUpdating;

  const [errors, setErrors] = useState<
    Partial<Record<keyof SavePlaceRequest, string>>
  >({});

  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const [form, setForm] = useState<SavePlaceRequest>(initialForm);

  const categories = formData?.categories ?? [];
  const governorates = formData?.governorates ?? [];
  const tags = formData?.tags ?? [];

  useEffect(() => {
    if (!isOpen) return;

    setErrors({});
    setIsTagsOpen(false);
    setIsMapOpen(false);

    if (place) {
      setForm({
        title: place.title,
        description: place.description,
        categoryId: place.categoryId,
        governorateId: place.governorateId,
        latitude: place.latitude,
        longitude: place.longitude,
        tagIds: place.tags.map((tag) => tag.id),
      });
    } else {
      setForm(initialForm);
    }

    setErrors({});
    setIsTagsOpen(false);
    setIsMapOpen(false);
  }, [isOpen, place]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function handleLocationChange(lat: string, lng: string) {
    setForm((prev) => ({
      ...prev,
      latitude: lat,
      longitude: lng,
    }));
  }

  function validateForm() {
    const newErrors: Partial<Record<keyof SavePlaceRequest, string>> = {};

    if (!form.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!form.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!form.categoryId) {
      newErrors.categoryId = "Category is required";
    }

    if (!form.governorateId) {
      newErrors.governorateId = "Governorate is required";
    }

    if (!form.latitude) {
      newErrors.latitude = "Please choose a location";
    }

    if (!form.longitude) {
      newErrors.longitude = "Please choose a location";
    }

    if (form.tagIds.length === 0) {
      newErrors.tagIds = "Please select at least one tag";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function resetModal() {
    setForm(initialForm);
    setErrors({});
    setIsTagsOpen(false);
    setIsMapOpen(false);
  }

  async function handleSave() {
    if (!validateForm()) return;

    try {
      if (isEdit && place) {
        await updatePlace({
          id: place.id,
          body: form,
        }).unwrap();
      } else {
        await createPlace(form).unwrap();
      }

      resetModal();
      onClose();
    } catch (err) {
      console.error(err);
    }
  }

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
        <div className="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/20">
            <div>
              <h3 className="text-2xl font-bold text-on-surface">
                {isEdit ? "Edit Place" : "Add New Place"}
              </h3>
            </div>

            <button
              onClick={() => {
                resetModal();
                onClose();
              }}
              className="text-secondary rounded-full w-9 h-9 flex items-center justify-center hover:bg-secondary-container transition cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            <BasicInfoSection form={form} setForm={setForm} errors={errors} />

            <ClassificationSection
              form={form}
              setForm={setForm}
              categories={categories}
              governorates={governorates}
              tags={tags}
              isTagsOpen={isTagsOpen}
              setIsTagsOpen={setIsTagsOpen}
              errors={errors}
            />

            <LocationSection
              form={form}
              onOpenMap={() => setIsMapOpen(true)}
              errors={errors}
            />
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-outline-variant/20 bg-surface-container-low">
            <div className="max-w-lg mx-auto flex gap-12">
              <button
                onClick={() => {
                  resetModal();
                  onClose();
                }}
                className="flex-1 border border-outline-variant/30 text-secondary py-3.5 px-6 rounded-xl font-semibold hover:bg-surface-container transition-all cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 bg-primary text-on-primary py-3.5 px-6 rounded-xl font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                {isSaving
                  ? "Saving..."
                  : isEdit
                    ? "Save Changes"
                    : "Save Place"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MapPickerModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        onConfirm={() => setIsMapOpen(false)}
        latitude={form.latitude}
        longitude={form.longitude}
        onLocationChange={handleLocationChange}
      />
    </>
  );
}
