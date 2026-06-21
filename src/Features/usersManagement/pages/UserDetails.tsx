import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../../store/api/usersApi";
import UserHeader from "../components/UserHeader";
import AccountInfo from "../components/AccountInfo";
import UserProfile from "../components/UserProfile";
import AssignedRoles from "../components/AssignedRoles";
import DeleteUser from "../components/DeleteUser";

export default function UserDetails() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const { data: user, isLoading, isError } = useGetUserByIdQuery(userId!);

  if (isLoading) return (
    <div className="flex items-center justify-center py-20 text-secondary">Loading...</div>
  );

  if (isError || !user) return (
    <div className="flex items-center justify-center py-20 text-error">Something went wrong.</div>
  );

  return (
    <section className="flex-1">
      <section className="mb-12">
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant/70 hover:bg-surface-container transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
          </button>
          <UserHeader user={user} />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <AccountInfo user={user} />
          <UserProfile profile={user.profile} />
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <AssignedRoles roles={user.roles} />
          <DeleteUser />
        </div>
      </section>
    </section>
  );
}