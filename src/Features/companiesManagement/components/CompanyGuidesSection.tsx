export default function CompanyGuidesSection() {
  return (
    <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-2xl shadow-secondary/5 p-10 mt-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold font-['Noto_Serif'] text-on-surface">
          Guides
        </h3>

        <button className="text-primary font-semibold hover:underline underline-offset-4 transition cursor-pointer">
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="border border-outline-variant/20 bg-surface-container-low rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-container/20 text-primary flex items-center justify-center text-lg font-bold shrink-0">
              A
            </div>

            <div className="min-w-0">
              <h4 className="font-bold text-on-surface text-lg truncate">
                Ahmed Ali
              </h4>

              <p className="text-sm text-secondary truncate">@ahmed_ali</p>
            </div>

            <span className="ml-auto px-2.5 py-1 rounded-full bg-warning-container/20 text-warning text-sm font-bold text-on-surface">
              ⭐ 4.8
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                Email
              </p>

              <p className="text-on-surface truncate">ahmed@gmail.com</p>
            </div>

            <div className="ml-auto">
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                Phone
              </p>

              <p className="text-on-surface">+20 1012345678</p>
            </div>
          </div>
        </div>
        <div className="border border-outline-variant/20 bg-surface-container-low rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-container/20 text-primary flex items-center justify-center text-lg font-bold shrink-0">
              A
            </div>

            <div className="min-w-0">
              <h4 className="font-bold text-on-surface text-lg truncate">
                Ahmed Ali
              </h4>

              <p className="text-sm text-secondary truncate">@ahmed_ali</p>
            </div>

            <span className="ml-auto px-2.5 py-1 rounded-full bg-warning-container/20 text-warning text-sm font-bold text-on-surface">
              ⭐ 4.8
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                Email
              </p>

              <p className="text-on-surface truncate">ahmed@gmail.com</p>
            </div>

            <div className="ml-auto">
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                Phone
              </p>

              <p className="text-on-surface">+20 1012345678</p>
            </div>
          </div>
        </div>{" "}
        <div className="border border-outline-variant/20 bg-surface-container-low rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-container/20 text-primary flex items-center justify-center text-lg font-bold shrink-0">
              A
            </div>

            <div className="min-w-0">
              <h4 className="font-bold text-on-surface text-lg truncate">
                Ahmed Ali
              </h4>

              <p className="text-sm text-secondary truncate">@ahmed_ali</p>
            </div>

            <span className="ml-auto px-2.5 py-1 rounded-full bg-warning-container/20 text-warning text-sm font-bold text-on-surface">
              ⭐ 4.8
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                Email
              </p>

              <p className="text-on-surface truncate">ahmed@gmail.com</p>
            </div>

            <div className="ml-auto">
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                Phone
              </p>

              <p className="text-on-surface">+20 1012345678</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
