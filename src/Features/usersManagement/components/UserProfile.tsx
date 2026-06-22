import { FileUser } from "lucide-react";
import type { UserProfile as UserProfileType } from "../../../types/user";

interface UserProfileProps {
  profile: UserProfileType | null;
}

export default function UserProfile({ profile }: UserProfileProps) {
  if (!profile) return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/20">
      <header className="mb-6 flex gap-2 items-center">
        <FileUser className="text-primary" />
        <h3 className="text-primary font-bold text-2xl">Profile</h3>
      </header>
      <p className="text-secondary text-sm">No profile available.</p>
    </div>
  );

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/20">
      <header className="mb-6 flex gap-2 items-center">
        <FileUser className="text-primary" />
        <h3 className="text-primary font-bold text-2xl">Profile</h3>
      </header>

      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">Bio</p>
        <p className="text-on-surface leading-relaxed">
          {profile.bio || 'No bio available.'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">Languages</p>
          <div className="flex flex-wrap gap-2">
            {profile.languages.length > 0 ? profile.languages.map(l => (
              <span key={l.id} className="px-3 py-1 rounded-full border border-outline-variant/30 bg-surface-container text-secondary text-sm font-medium">
                {l.name}
              </span>
            )) : <span className="text-secondary text-sm">None</span>}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">Interests</p>
          <div className="flex flex-wrap gap-2">
            {profile.interests.length > 0 ? profile.interests.map(i => (
              <span key={i.id} className="px-3 py-1 rounded-full border border-tertiary-container/30 bg-tertiary-container/15 text-tertiary text-sm font-medium">
                {i.name}
              </span>
            )) : <span className="text-secondary text-sm">None</span>}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">Vibes</p>
          <div className="flex flex-wrap gap-2">
            {profile.vibes.length > 0 ? profile.vibes.map(v => (
              <span key={v.id} className="px-3 py-1 rounded-full border border-primary-container/20 bg-primary-container/15 text-primary-container text-sm font-medium">
                {v.name}
              </span>
            )) : <span className="text-secondary text-sm">None</span>}
          </div>
        </div>
      </div>
    </div>
  );
}