export default function CompaniesTable() {
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
          <tr className="hover:bg-surface-container-lowest/50 transition-colors">
            <td className="px-8 py-6 font-['Noto_Serif'] font-bold text-on-surface">
              #A12BC34D
            </td>

            <td className="px-8 py-6 font-semibold text-on-surface">
              Nile Travel
            </td>

            <td className="px-8 py-6 text-on-surface">niletravel@gmail.com</td>

            <td className="px-8 py-6">
              <div
                className="max-w-72 truncate text-on-surface"
                title="Premium travel company specializing in cultural and historical tours across Egypt."
              >
                Premium travel company specializing in cultural and historical
                tours across Egypt.
              </div>
            </td>

            <td className="px-8 py-6 text-right">
              <button className="px-4 py-2 text-primary-container font-bold border border-primary-container/30 rounded-lg hover:bg-primary-container hover:text-surface transition-all cursor-pointer">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
