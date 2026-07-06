import { useRef } from "react";
import { X } from "lucide-react";

import { useUploadImagesMutation } from "../../../../store/api/companiesApi";

import type { CreateCompanyTripDto } from "../../../../types/company";
import type { FieldErrors } from "../CreateTripModal";

interface Props {
  trip: CreateCompanyTripDto;
  setTrip: React.Dispatch<React.SetStateAction<CreateCompanyTripDto>>;
  errors: FieldErrors;
}

const IMAGE_BASE_URL = "http://srv1807577.hstgr.cloud:9000/uploads";

export default function ImagesSection({ trip, setTrip, errors }: Props) {
  const [uploadImages, { isLoading }] = useUploadImagesMutation();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  async function handleUpload(files: FileList | null) {
    if (!files) return;

    try {
      const uploadedNames: string[] = [];

      for (const file of Array.from(files)) {
        const response = await uploadImages(file).unwrap();

        uploadedNames.push(...response);
      }

      setTrip((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedNames],
      }));
    } catch (err) {
      console.error(err);
    }
  }

  function removeImage(index: number) {
    setTrip((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  }

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold font-['Noto_Serif'] text-on-surface">
        Trip Images
      </h3>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleUpload(e.target.files)}
      />

      <div
        className={`
          border-2
          border-dashed
          rounded-2xl
          p-8
          text-center
          bg-surface-container-low
          space-y-5
          ${errors.images ? "border-error" : "border-outline-variant/30"}
        `}
      >
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          className="
            px-5
            py-2
            rounded-xl
            bg-primary
            text-on-primary
            font-semibold
            hover:bg-primary/90
            disabled:opacity-50
            cursor-pointer
          "
        >
          {isLoading ? "Uploading..." : "Browse Images"}
        </button>

        {trip.images.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-5">
            {trip.images.map((image, index) => (
              <div key={image} className="relative group">
                <img
                  src={`${IMAGE_BASE_URL}/${image}`}
                  alt="trip"
                  className="
                    w-full
                    h-32
                    object-cover
                    rounded-xl
                  "
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="
                    absolute
                    top-2
                    right-2
                    w-7
                    h-7
                    rounded-full
                    bg-black/60
                    text-white
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {errors.images && (
        <p className="text-xs text-error -mt-3">{errors.images}</p>
      )}
    </section>
  );
}