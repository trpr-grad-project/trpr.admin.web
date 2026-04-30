interface RequestTitleAndDescProps {
  title: string;
  description: string;
}

export default function RequestTitleAndDesc({ title, description }: RequestTitleAndDescProps) {
  return (
    <div>
      <p className="text-label-sm text-primary mb-2 uppercase font-bold tracking-tight">
        Request Title
      </p>
      <h3 className="font-h2 text-3xl text-primary-container mb-4 font-['Noto_Serif']">
        {title}
      </h3>
      <p className="text-secondary leading-relaxed bg-surface-container-low p-4 rounded-lg border border-outline-variant/10">
        {description}
      </p>
    </div>
  );
}