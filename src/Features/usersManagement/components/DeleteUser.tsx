import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation } from "../../../store/api/usersApi";
import DeleteUserModal from "./DeleteUserModal";

interface DeleteUserProps {
  userId: string;
  userName: string;
}

export default function DeleteUser({ userId, userName }: DeleteUserProps) {
  const [showModal, setShowModal] = useState(false);
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const navigate = useNavigate();

  async function handleConfirm() {
    await deleteUser(userId);
    navigate("/users");
  }

  return (
    <div className="pt-2">
      <button
        onClick={() => setShowModal(true)}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-error/30 bg-error/5 text-error cursor-pointer hover:bg-error/10 transition-all font-bold"
      >
        <Trash2 size={18} />
        Delete User
      </button>

      <p className="text-[10px] text-secondary text-center mt-3 uppercase tracking-widest opacity-70">
        This action cannot be undone
      </p>

      {showModal && (
        <DeleteUserModal
          userName={userName}
          onConfirm={handleConfirm}
          onCancel={() => setShowModal(false)}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
