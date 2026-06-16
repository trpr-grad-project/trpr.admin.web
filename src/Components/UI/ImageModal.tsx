import { useEffect } from "react";

interface ImageModalProps {
  image: string | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [image]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <img
        src={image}
        alt="preview"
        className="h-[95vh] max-w-[70vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
}