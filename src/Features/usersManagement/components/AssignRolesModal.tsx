import { useEffect, useState } from "react";
import { X, Loader2, ChevronDown } from "lucide-react";
import { useUpdateUserRolesMutation } from "../../../store/api/usersApi";

const AVAILABLE_ROLES = ["Admin", "Company", "Guide"];

interface AssignRolesModalProps {
  userId: string;
  currentRoles: string[];
  onClose: () => void;
}

export default function AssignRolesModal({
  userId,
  currentRoles,
  onClose,
}: AssignRolesModalProps) {
  const [updateRoles, { isLoading }] = useUpdateUserRolesMutation();

  const [selectedRoles, setSelectedRoles] =
    useState<string[]>(currentRoles);

  const [selectedToAdd, setSelectedToAdd] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleRemoveRole(role: string) {
    setSelectedRoles((prev) => prev.filter((r) => r !== role));
  }

  function handleAddRole() {
    if (
      !selectedToAdd ||
      selectedRoles.some(
        (r) => r.toLowerCase() === selectedToAdd.toLowerCase(),
      )
    ) {
      return;
    }

    setSelectedRoles((prev) => [...prev, selectedToAdd]);
    setSelectedToAdd("");
  }

  async function handleApply() {
    const rolesToSend = selectedRoles.filter(
      (role) => role.toLowerCase() !== "user",
    );

    await updateRoles({
      userId,
      roles: rolesToSend,
    });

    onClose();
  }

  const availableToAdd = AVAILABLE_ROLES.filter(
    (role) =>
      !selectedRoles.some(
        (selected) =>
          selected.toLowerCase() === role.toLowerCase(),
      ),
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg bg-surface rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-on-surface">
                Manage Roles
              </h2>
            </div>

            <button
              onClick={onClose}
              className="text-secondary rounded-full w-9 h-9 flex items-center justify-center hover:bg-secondary-container transition cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Current Roles */}
          <section className="space-y-4">
            <h4 className="text-sm uppercase text-primary border-b border-outline-variant/30 pb-2">
              Current Roles
            </h4>

            <div className="flex flex-wrap gap-3">
              {selectedRoles.length > 0 ? (
                selectedRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-xl border border-outline-variant/30"
                  >
                    <span className="text-on-surface text-sm font-medium">
                      {role}
                    </span>

                    <button
                      onClick={() => handleRemoveRole(role)}
                      className="text-secondary hover:text-error transition-colors cursor-pointer"
                    >
                      ×
                    </button>
                  </div>
                ))
              ) : (
                <div className="px-3 py-1.5 rounded-xl border border-outline-variant/30 bg-surface-container">
                  <span className="text-on-surface text-sm font-medium">
                    User
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* Add Role */}
          <section className="space-y-4">
            <h4 className="text-sm uppercase text-primary border-b border-outline-variant/30 pb-2">
              Add New Role
            </h4>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <select
                  value={selectedToAdd}
                  onChange={(e) => setSelectedToAdd(e.target.value)}
                  className="w-full appearance-none border border-outline-variant/50 bg-surface-container-lowest text-on-surface p-3 pr-10 rounded-lg outline-none focus:border-primary cursor-pointer"
                >
                  <option value="">Select a role...</option>

                  {availableToAdd.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface pointer-events-none"
                />
              </div>

              <button
                onClick={handleAddRole}
                disabled={!selectedToAdd}
                className="px-4 py-3 bg-primary-container text-on-primary-container rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Add
              </button>
            </div>
          </section>

          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 border border-outline-variant/30 text-secondary py-3 rounded-lg font-medium hover:bg-surface-container transition-all cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleApply}
              disabled={isLoading}
              className="flex-1 bg-primary text-surface py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isLoading && (
                <Loader2 size={18} className="animate-spin" />
              )}

              {isLoading ? "Applying..." : "Apply Roles"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}