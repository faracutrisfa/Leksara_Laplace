interface SectionHeadingProps {
  index: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  index,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 ${className}`}
    >
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl font-bold text-primary-600 leading-none">
          {index}
        </span>
        <div className="mt-2 h-0.5 w-20 bg-primary-600" />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold text-primary-600">
        {title}
      </h2>
    </div>
  );
}
