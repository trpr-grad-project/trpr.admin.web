export default function CompanyHeader() {
  return (
    <div className="flex items-center gap-6">
      <img
        src="https://placehold.co/180x180/png?text=Logo"
        alt="Company Logo"
        className="w-24 h-24 rounded-2xl border border-outline-variant/20 object-cover"
      />

      <div>
        <h1 className="text-[42px] font-bold font-['Noto_Serif'] text-on-surface">
          Nile Travel
        </h1>
      </div>
    </div>
  );
}
