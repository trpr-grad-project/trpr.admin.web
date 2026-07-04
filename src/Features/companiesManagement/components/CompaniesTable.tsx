import { Link } from "react-router-dom";
import type { Company } from "../../../types/company";

interface Props {
  companies: Company[];
}

export default function CompaniesTable({ companies }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low border-b border-outline-variant/30">
            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Company ID
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Company Name
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Identifier
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
              Description
            </th>

            <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-outline-variant/10">
          {companies.map((company) => (
            <tr
              key={company.id}
              className="hover:bg-surface-container-lowest/50 transition-colors"
            >
              <td className="px-8 py-6 font-['Noto_Serif'] font-bold text-on-surface">
                #{company.id.slice(0, 8).toUpperCase()}
              </td>

              <td className="px-8 py-6 font-semibold text-on-surface">
                {company.name}
              </td>

              <td className="px-8 py-6 text-on-surface">
                {company.identifier}
              </td>

              <td className="px-8 py-6">
                <div
                  className="max-w-72 truncate text-on-surface"
                  title={company.description}
                >
                  {company.description}
                </div>
              </td>

              <td className="px-8 py-6 text-right">
                <Link
                  to={`/companies/${company.id}`}
                  className="inline-block px-4 py-2 text-primary-container font-bold border border-primary-container/30 rounded-lg hover:bg-primary-container hover:text-surface transition-all"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}