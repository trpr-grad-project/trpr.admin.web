import { ChevronDown, Search } from "lucide-react";

export default function SupportManagement() {
  return (
    <section className="flex-1 flex flex-col">
      <header className="mb-10">
        <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
          Support Management
        </h2>
        <p className="text-secondary font-['Noto_Serif'] italic text-sm">
          Manage and review support requests submitted by TouRA users.
        </p>
      </header>

      <section className="mb-10 bg-surface-container border border-outline-variant/20 rounded-xl p-6">
        {/* Subject Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />

          <input
            type="text"
            placeholder="Search by subject..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest
            text-on-surface outline-none transition-colors
            focus:border-primary"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* User Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />

            <input
              type="text"
              placeholder="Search by user name..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/30
            bg-surface-container-lowest text-on-surface shadow-sm outline-none
            focus:border-primary"
            />
          </div>

          {/* Status */}
          <div className="relative">
            <select
              className="w-full appearance-none px-4 py-3 rounded-xl border border-outline-variant/30
        bg-surface-container-lowest text-on-surface shadow-sm outline-none
        focus:border-primary"
            >
              <option>All Statuses</option>
              <option>Open</option>
              <option>Pending</option>
              <option>Resolved</option>
              <option>Closed</option>
            </select>

            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary pointer-events-none" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 border-t border-outline-variant/20 pt-5">
          <button
            className="px-5 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest font-semibold w-33
            hover:bg-surface-container-low hover:border-primary/30 transition-all cursor-pointer"
          >
            Reset Filters
          </button>

          <button
            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold w-36
            hover:opacity-90 transition-all cursor-pointer">
            Apply Filters
          </button>
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-secondary/5 border border-outline-variant/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/30">
                <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
                  Support ID
                </th>

                <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
                  Username
                </th>

                <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
                  Subject
                </th>

                <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
                  Date Submitted
                </th>

                <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary">
                  Status
                </th>

                <th className="px-8 py-5 text-xs font-label-sm uppercase tracking-widest text-secondary text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-outline-variant/10">
              <tr className="hover:bg-surface-container-lowest/50 transition-colors">
                <td className="px-8 py-6 font-['Noto_Serif'] font-bold text-on-surface">
                  #SUP-1001
                </td>

                <td className="px-8 py-6 text-on-surface">
                  ahmed.hassan@gmail.com
                </td>

                <td className="px-8 py-6">
                  <div className="max-w-65 truncate font-semibold text-on-surface">
                    Unable to complete booking because the payment process keeps
                    failing after confirmation
                  </div>
                </td>

                <td className="px-8 py-6 text-on-surface">26 Jun 2026</td>

                <td className="px-8 py-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm bg-primary-container text-on-primary-container">
                    Open
                  </span>
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

        <div className="px-8 py-6 bg-surface-container-low rounded-b-xl"></div>
      </section>
    </section>
  );
}
