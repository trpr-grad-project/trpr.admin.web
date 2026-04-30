import { Settings, Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-8 h-20">
      {/* Left */}
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold tracking-tighter text-primary-container font-['Noto_Serif']">
          TouRA
        </h1>

        <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
          <Search className="text-[#8C7355] mr-2" />
          <input
            className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-sm text-[#8C7355] font-medium placeholder-[#8C7355] w-64"
            placeholder="Search ..."
            type="text"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-on-surface">
        <button className="relative">
          <Bell className="text-[#8C7355] hover:text-primary-container transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-container rounded-full border-2 border-surface"></span>
        </button>

        <button>
          <Settings className="text-[#8C7355] hover:text-primary-container transition-colors" />
        </button>

        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-container">
          <img
            alt="Administrator Portrait"
            className="w-full h-full object-cover"
            data-alt="Close-up professional portrait of a distinguished man in a desert-colored linen suit with soft natural lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoACTFaNQukmxgTaIkZzE4aYxSy2X4OtmAKYgVGnSEw2wwgSma7oaZ4SUZwjxQZvJoqZ6R1pUzyJGRve5KJd67SWc7MFelEJ9FLWumMbfDWZqMWlc7jGE-oCysN6rvkbucIW5ZRNYPu43jc-r5CO5PM4CG7rKDhstH_oXVBTulhaVoyrzpgZGP1gFd_LYl-16IpPNoW0ooQ816FIRPe-w_hXEl5wBNatTjbNRNM-QrHPpuhRZ7dQdayIgF2JKd_lT7kTkRm6lvu5gt"
          />
        </div>
      </div>
    </header>
  );
}
