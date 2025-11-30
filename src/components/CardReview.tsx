import { Icon } from "@iconify/react";
import DEFAULT_AVATAR from "../../public/assets/avatar.jpg";

type Variant = "original" | "cleaned";


interface UsageReviewCardProps {
  variant?: Variant;
  name?: string;
  text?: string;
  avatarUrl?: string;
}

export default function CardReview({
  variant = "original",
  name = "Fransisco",
  text,
  avatarUrl = DEFAULT_AVATAR,
}: UsageReviewCardProps) {
  const isOriginal = variant === "original";

  const defaultText = isOriginal
    ? "brgnya ORI & Pengiriman Cepat. Mantull👍"
    : "Barangnya original pengiriman cepat mantab";

  const displayText = text ?? defaultText;

  return (
    <div
      className="
        inline-flex flex-col items-center
        w-[260px] sm:w-[280px] md:w-[300px]
        scale-[0.8] sm:scale-[0.9] md:scale-100
        transition-transform
      "
    >
      <div
        className="
          relative flex items-center gap-3
          rounded-[10px] bg-white px-4 py-3
          shadow-lg
        "
      >
        <div
          className={[
            "absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-md",
            isOriginal ? "bg-red-500" : "bg-primary-500",
          ].join(" ")}
        >
          <Icon
            icon={isOriginal ? "ic:round-close" : "entypo:check"}
            width={18}
          />
        </div>

        <div className="shrink-0">
          <img
            src={avatarUrl}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
            draggable={false}
          />
        </div>

        <div className="text-xs sm:text-sm leading-snug">
          <p className="font-semibold text-neutral-900">{name}</p>
          <p className="mt-0.5 text-neutral-500">{displayText}</p>
        </div>
      </div>
    </div>
  );
}
