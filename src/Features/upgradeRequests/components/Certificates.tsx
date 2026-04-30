import { Eye, File } from "lucide-react";
import type { Document } from "../../../types/upgradeRequest";

interface CertificatesProps {
  certificates: Document[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-secondary uppercase tracking-widest">
        Certificates
      </p>

      <div className="bg-white border border-outline-variant/30 rounded-lg overflow-hidden">
        <div className="divide-y divide-outline-variant/10">
          {certificates.map((cert) => (
            <div
              key={cert.name}
              className="p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-3">
                <File className="text-primary" />
                <div>
                  <p className="text-sm font-bold text-[#2D2926]">
                    {cert.name}
                  </p>
                  <p className="text-[10px] text-secondary">
                    Uploaded{" "}
                    {new Date(cert.uploadedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    • {cert.size}
                  </p>
                </div>
              </div>
              <button
                onClick={() => window.open(cert.url, "_blank")}
                className="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-colors cursor-pointer"
              >
                <Eye />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
