import { useEffect } from "react";
import { Loader2, X, TriangleAlert } from "lucide-react";

interface DeleteUserModalProps {
  userName: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading: boolean;
}

export default function DeleteUserModal({
  userName,
  onConfirm,
  onCancel,
  isLoading,
}: DeleteUserModalProps) {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        className="relative w-full max-w-lg bg-surface rounded-xl shadow-2xl overflow-hidden border border-outline-variant/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="w-16 h-16 bg-error/10 text-error rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-error/20">
            <TriangleAlert className="w-8 h-8" />
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-on-surface mb-4">
              Irreversible Action
            </h3>

            <p className="text-primary font-semibold leading-relaxed">
              Are you sure you want to delete this user? This action is permanent and will remove all data associated with{" "}
              <span className="font-bold text-on-surface">{userName}</span> from the records.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="w-full py-4 bg-error text-surface font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading && <Loader2 size={20} className="animate-spin" />}
              {isLoading ? "Deleting..." : "Delete Permanently"}
            </button>

            <button
              onClick={onCancel}
              disabled={isLoading}
              className="w-full py-3.5 bg-transparent text-primary font-semibold rounded-lg border-2 border-outline-variant hover:bg-outline/15 transition-all cursor-pointer disabled:opacity-60"
            >
              Keep User
            </button>
          </div>
        </div>

        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-error rounded-full w-9 h-9 flex items-center justify-center hover:bg-error-container/50 transition cursor-pointer"
        >
          <X />
        </button>
      </div>
    </div>
  );
}