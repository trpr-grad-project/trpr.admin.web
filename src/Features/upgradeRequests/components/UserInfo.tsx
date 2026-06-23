interface UserInfoProps {
  userName: string;
  createdAtUtc: string;
}

export default function UserInfo({ userName, createdAtUtc }: UserInfoProps) {
  return (
    <div className="grid grid-cols-2  pb-8 border-b border-outline-variant/20">
      <div>
        <p className="text-label-sm text-secondary mb-1">FULL NAME</p>
        <p className="font-bold text-xl text-on-surface">{userName}</p>
      </div>
      <div>
        <p className="text-label-sm text-secondary mb-1">DATE SUBMITTED</p>
        <p className="font-bold text-xl text-on-surface">
          {new Date(createdAtUtc).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
}