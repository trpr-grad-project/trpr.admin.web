import type { Document } from "../../../types/upgradeRequest";
import { useState } from "react";
import ImageModal from "../../../Components/UI/ImageModal";


interface CertificatesProps {
  certificates: Document[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-secondary uppercase tracking-widest">
        Certificates
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.name}
            className="bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden group hover:border-primary transition-allC"
          >
            {/* IMAGE */}
            <div 
            className="aspect-video overflow-hidden cursor-zoom-in"
            onClick={() => setSelectedImage(cert.url)}>
              <img
                src={cert.url}
                alt={cert.name}
                className="w-full h-full object-cover group-hover:transition-transform duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 bg-surface-container-low">
              <p className="text-sm font-bold text-on-surface truncate">
                {cert.name}
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
