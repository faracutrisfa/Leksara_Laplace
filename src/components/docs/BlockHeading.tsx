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
    <div className="flex items-start gap-3 sm:gap-4">
      <div
        className="
          flex-none inline-flex items-center justify-center
          h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11
          rounded-lg bg-primary-50 text-primary-600
          font-semibold text-xs sm:text-sm
          shadow-primary-700 shadow-sm
        "
      >
        {index}
      </div>

      <div className="min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">
          {title}
        </h3>

        {signature && (
          <p className="mt-0.5 text-xs sm:text-sm font-medium text-primary-500">
            {signature}
          </p>
        )}

        {description && (
          <p className="mt-1 max-w-3xl text-[12px] sm:text-[13px] text-neutral-500 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
