interface MapControlsProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export default function MapControls({
  onCancel,
  onConfirm,
}: MapControlsProps) {
  return (
    <div className="flex justify-end gap-4 px-6 py-5 border-t border-outline-variant/20 bg-surface-container-low">
      <button
        onClick={onCancel}
        className="px-6 py-3 rounded-xl border border-outline-variant/30 text-secondary font-semibold hover:bg-surface-container transition-all cursor-pointer"
      >
        Cancel
      </button>

      <button
        onClick={onConfirm}
        className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold hover:opacity-90 transition-all cursor-pointer"
      >
        Confirm Location
      </button>
    </div>
  );
}