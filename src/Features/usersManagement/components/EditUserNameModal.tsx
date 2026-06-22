import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { useUpdateUserNameMutation } from "../../../store/api/usersApi";

interface EditUserNameModalProps {
  userId: string;
  initialFirstName: string;
  initialLastName: string;
  onClose: () => void;
}

export default function EditUserNameModal({
  userId,
  initialFirstName,
  initialLastName,
  onClose,
}: EditUserNameModalProps) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [updateUserName, { isLoading }] = useUpdateUserNameMutation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  async function handleSave() {
    await updateUserName({ userId, firstName, lastName });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-surface w-full max-w-lg rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 pt-8 pb-4 border-b border-outline-variant/20">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-on-surface">Edit User Name</h2>
            </div>
            <button onClick={onClose} 
            className="text-secondary rounded-full w-9 h-9 flex items-center justify-center hover:bg-secondary-container transition cursor-pointer">
              <X />
            </button>
          </div>
        </div>

        <div className="px-8 py-8 space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-primary font-bold">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border-b border-outline-variant/50 bg-transparent text-on-surface p-3 focus:outline-none focus:border-primary transition-colors"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-primary font-bold">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border-b border-outline-variant/50 bg-transparent text-on-surface p-3 focus:outline-none focus:border-primary transition-colors"
              type="text"
            />
          </div>
        </div>

        <div className="px-8 pb-8 flex flex-col sm:flex-row-reverse gap-4">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="flex-1 bg-primary text-surface py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading && <Loader2 size={18} className="animate-spin" />}
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 border border-outline-variant/30 text-secondary py-3 rounded-lg font-medium hover:bg-surface-container transition-all cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}