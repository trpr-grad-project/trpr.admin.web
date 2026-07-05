interface Props {
  description: string;
}

export default function CompanyDescription({ description }: Props) {
  return (
    <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-2xl shadow-secondary/5 p-10">
      <h3 className="text-2xl font-bold font-['Noto_Serif'] text-on-surface mb-8">
        Description
      </h3>

      <p className="text-secondary leading-8 text-[15px] whitespace-pre-line">
        {description}
      </p>
    </section>
  );
}