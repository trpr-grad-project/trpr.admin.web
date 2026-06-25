import type { Document } from "../../../types/upgradeRequest";
import { useState } from "react";
import ImageModal from "../../../Components/UI/ImageModal";

interface DocumentsProps {
  title: string;
  documents: Document[];
}

export default function Documents({
  title,
  documents,
}: DocumentsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-secondary uppercase tracking-widest">
        {title}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div
            key={`${doc.name}-${doc.url}`}
            className="bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden group hover:border-primary transition-all"
          >
            {/* IMAGE */}
            <div
              className="aspect-video overflow-hidden cursor-zoom-in"
              onClick={() => setSelectedImage(doc.url)}
            >
              <img
                src={doc.url}
                alt={doc.name}
                className="w-full h-full object-cover group-hover:transition-transform duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 bg-surface-container-low">
              <p className="text-sm font-bold text-on-surface truncate">
                {doc.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}