interface BlockHeadingProps {
  index: string;
  title: string;
  signature?: string;
  description?: string;
}

export default function BlockHeading({
  index,
  title,
  signature,
  description,
}: BlockHeadingProps) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex items-center justify-center h-9 w-10 rounded-lg shadow-primary-600 shadow-sm bg-blue-50 text-blue-600 font-semibold text-sm">
        {index}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        {signature && (
          <p className="text-primary-500 text-sm font-medium mt-0.5">
            {signature}
          </p>
        )}

        {description && (
          <p className="text-neutral-500 mt-1 text-[13px] sm:text-[14px] max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
