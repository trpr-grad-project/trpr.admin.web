interface NationalIDProps {
  front: string;
  back: string | null;
}

export default function NationalID({ front, back }: NationalIDProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
        National ID Card{" "}
        <span className="text-[10px] bg-outline-variant/20 px-2 py-0.5 rounded">
          Front &amp; Back
        </span>
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="group relative bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/30 aspect-video hover:border-primary transition-all cursor-zoom-in">
          <img
            className="w-full h-full object-cover"
            src={front}
            alt="National ID Front"
          />
        </div>

        <div className="group relative bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/30 aspect-video hover:border-primary transition-all cursor-zoom-in flex items-center justify-center">
          {back ? (
            <img
              className="w-full h-full object-cover"
              src={back}
              alt="National ID Back"
            />
          ) : (
            <div className="text-center text-secondary/40">
              <span className="material-symbols-outlined text-4xl">image</span>
              <p className="text-[10px] mt-2 font-bold uppercase">
                Back View (No Data)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}