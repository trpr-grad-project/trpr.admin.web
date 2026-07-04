export default function CompanyInfoCard() {
  return (
    <section className="col-span-9 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-2xl shadow-secondary/5 p-10">
      <h3 className="text-2xl font-bold font-['Noto_Serif'] text-on-surface mb-8">
        Company Information
      </h3>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-primary mb-2">
            ID
          </p>

          <p className="text-lg font-semibold text-on-surface">7852552554</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-primary mb-2">
            Identifier
          </p>

          <p className="text-lg font-semibold text-on-surface">
            niletravel@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
