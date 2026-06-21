import { Trash2 } from "lucide-react";

export default function DeleteUser() {
  return (
    <div className="pt-2">
      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-error/30 bg-error/5 text-error cursor-pointer hover:bg-error/10 transition-all font-bold">
        <Trash2 size={18} />
        Delete User
      </button>
      <p className="text-[10px] text-secondary text-center mt-3 uppercase tracking-widest opacity-70">
        This action cannot be undone
      </p>
    </div>
  );
}