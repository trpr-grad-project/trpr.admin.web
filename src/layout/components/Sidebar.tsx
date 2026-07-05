import { NavLink, useNavigate } from "react-router-dom";
import {
  LogOut,
  ArrowUpFromLine,
  Landmark,
  UsersRound,
  MapPinned,
  MessageCircleMore,
  Route,
  Building2,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Sidebar() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <aside className="hidden md:flex fixed left-0 h-screen w-72 bg-surface border-r border-outline-variant flex-col py-8 z-50">
      {/* Logo */}
      <div
        className="px-8 mb-12 cursor-pointer"
        onClick={() => navigate("/requests")}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container shadow-md">
            <Landmark />
          </div>
          <h2 className="text-xl text-primary-container tracking-[0.2em] font-['Noto_Serif'] font-black">
            TOURA ADMIN
          </h2>
        </div>
      </div>

      {/* Links */}
      <nav className="flex-1 space-y-1">
        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
              isActive
                ? "bg-surface-container text-primary-container border-r-4 border-primary-container"
                : "text-secondary hover:text-primary-container hover:bg-surface-container"
            }`
          }
        >
          <ArrowUpFromLine />
          <span className="font-['Noto_Serif'] font-semibold">
            Upgrade Requests
          </span>
        </NavLink>

        <NavLink
          to="/trips"
          className={({ isActive }) =>
            `px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
              isActive
                ? "bg-surface-container text-primary-container border-r-4 border-primary-container"
                : "text-secondary hover:text-primary-container hover:bg-surface-container"
            }`
          }
        >
          <Route />
          <span className="font-['Noto_Serif'] font-semibold">Trips</span>
        </NavLink>

        <NavLink
          to="/places"
          className={({ isActive }) =>
            `px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
              isActive
                ? "bg-surface-container text-primary-container border-r-4 border-primary-container"
                : "text-secondary hover:text-primary-container hover:bg-surface-container"
            }`
          }
        >
          <MapPinned />
          <span className="font-['Noto_Serif'] font-semibold">Places</span>
        </NavLink>

        <NavLink
          to="/companies"
          className={({ isActive }) =>
            `px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
              isActive
                ? "bg-surface-container text-primary-container border-r-4 border-primary-container"
                : "text-secondary hover:text-primary-container hover:bg-surface-container"
            }`
          }
        >
          <Building2 />
          <span className="font-['Noto_Serif'] font-semibold">Companies</span>
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
              isActive
                ? "bg-surface-container text-primary-container border-r-4 border-primary-container"
                : "text-secondary hover:text-primary-container hover:bg-surface-container"
            }`
          }
        >
          <UsersRound />
          <span className="font-['Noto_Serif'] font-semibold">Users</span>
        </NavLink>

        <NavLink
          to="/support"
          className={({ isActive }) =>
            `px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
              isActive
                ? "bg-surface-container text-primary-container border-r-4 border-primary-container"
                : "text-secondary hover:text-primary-container hover:bg-surface-container"
            }`
          }
        >
          <MessageCircleMore />
          <span className="font-['Noto_Serif'] font-semibold">Support</span>
        </NavLink>
      </nav>

      {/* Bottom */}
      <div className="px-6 mt-auto">
        <div className="mt-8 border-t border-outline-variant pt-4">
          <button
            onClick={handleLogout}
            className="text-secondary hover:text-primary-container px-6 py-4 flex items-center gap-4 transition-colors cursor-pointer w-full"
          >
            <LogOut />
            <span className="font-['Noto_Serif'] font-semibold text-lg">
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
