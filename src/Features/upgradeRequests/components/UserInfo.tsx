interface UserInfoProps {
  userName: string;
  createdAtUtc: string;
  languages: string[];
}

export default function UserInfo({ userName, createdAtUtc, languages }: UserInfoProps) {
  return (
    <div className="grid grid-cols-3 gap-8 pb-8 border-b border-outline-variant/20">
      <div>
        <p className="text-label-sm text-[#8C7355] mb-1">USER NAME</p>
        <p className="font-bold text-xl text-[#2D2926]">{userName}</p>
      </div>
      <div>
        <p className="text-label-sm text-[#8C7355] mb-1">DATE SUBMITTED</p>
        <p className="font-bold text-xl text-[#2D2926]">
          {new Date(createdAtUtc).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
      <div>
        <p className="text-label-sm text-[#8C7355] mb-1">LANGUAGES</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {languages.map((lang) => (
            <span
              key={lang}
              className="bg-surface-container px-2 py-1 rounded text-xs font-semibold text-secondary"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}