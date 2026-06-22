import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface EditUserNameModalProps {
  initialFirstName: string;
  initialLastName: string;
  onSave: (first: string, last: string) => void;
  onClose: () => void;
}

export default function EditUserNameModal({
  initialFirstName,
  initialLastName,
  onSave,
  onClose,
}: EditUserNameModalProps) {

  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
 
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSave = () => {
    onSave(firstName, lastName);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-4 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">Edit User Name</h2>
              <p className="text-gray-500 text-sm">
                Update the identity credentials for this account.
              </p>
            </div>

            <button onClick={onClose} className="text-gray-500 hover:text-black">
              <X />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-8 space-y-6">
          {/* First Name */}
          <div className="space-y-2">
            <label className="text-xs uppercase text-gray-500">
              First Name
            </label>

            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border-b p-3 focus:outline-none focus:border-black"
              type="text"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label className="text-xs uppercase text-gray-500">
              Last Name
            </label>

            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border-b p-3 focus:outline-none focus:border-black"
              type="text"
            />
          </div>

          {/* Info */}
          <div className="flex items-center gap-3 p-4 bg-blue-50 border rounded-lg">
            <span className="text-blue-600">ℹ️</span>
            <p className="text-sm text-gray-600 italic">
              Changing the legal name may require re-verification for bookings.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 flex flex-col sm:flex-row-reverse gap-4">
          <button
            onClick={handleSave}
            className="flex-1 bg-black text-white py-3 rounded-lg"
          >
            Save Changes
          </button>

          <button
            onClick={onClose}
            className="flex-1 border py-3 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}