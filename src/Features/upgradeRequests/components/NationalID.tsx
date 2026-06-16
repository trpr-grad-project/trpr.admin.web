import { useState } from "react";
import ImageModal from "../../../Components/UI/ImageModal";

interface NationalIDProps {
  front: string | null;
  back: string | null;
}

function IDCard({ src, alt }: { src: string | null; alt: string }) {
  return (
    <div className="group relative bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/30 aspect-video hover:border-primary transition-all cursor-zoom-in flex items-center justify-center duration-200">
      {src ? (
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      ) : (
        <div className="text-center text-secondary/40">
          <span className="material-symbols-outlined text-4xl">image</span>
          <p className="text-[10px] mt-2 font-bold uppercase">No Data</p>
        </div>
      )}
    </div>
  );
}

export default function NationalID({ front, back }: NationalIDProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
        National ID Card{" "}
        <span className="text-[10px] bg-outline-variant/20 px-2 py-0.5 rounded">
          Front &amp; Back
        </span>
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div onClick={() => front && setSelectedImage(front)}>
          <IDCard src={front} alt="National ID Front" />
        </div>
        <div onClick={() => back && setSelectedImage(back)}>
          <IDCard src={back} alt="National ID Back" />
        </div>
      </div>

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}