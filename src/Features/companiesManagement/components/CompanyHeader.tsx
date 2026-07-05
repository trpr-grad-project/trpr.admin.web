import type { Company } from "../../../types/company";

interface Props {
  company: Company;
}

export default function CompanyHeader({ company }: Props) {
  return (
    <div className="flex items-center gap-6">
      <img
        src={company.logo}
        alt={company.name}
        className="w-24 h-24 rounded-2xl border border-outline-variant/20 object-cover"
      />

      <div>
        <h1 className="text-[42px] font-bold font-['Noto_Serif'] text-on-surface">
          {company.name}
        </h1>
      </div>
    </div>
  );
}