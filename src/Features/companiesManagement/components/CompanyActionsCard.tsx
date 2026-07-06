interface Props {
  onCreateTrip: () => void;
}

export default function CompanyActionsCard({ onCreateTrip }: Props) {
  return (
    <section className="col-span-4">
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-2xl shadow-secondary/5 p-8 h-fit">
        <h3 className="text-xl font-bold font-['Noto_Serif'] text-on-surface mb-5">
          Company Operations
        </h3>

        <div className="space-y-4">
          <button className="w-full py-2.5 rounded-xl bg-primary text-on-primary font-bold hover:opacity-90 transition cursor-pointer">
            Add Guide
          </button>

          <button
            onClick={onCreateTrip}
            className="w-full py-2.5 rounded-xl border border-primary text-primary font-bold bg-surface-container-lowest hover:bg-surface-container-low transition cursor-pointer"
          >
            Create Trip
          </button>
        </div>
      </div>
    </section>
  );
}