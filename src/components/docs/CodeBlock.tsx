import { useState } from "react";
import { Icon } from "@iconify/react";

interface CodeBlockProps {
  label?: string;
  lang?: string;
  children: string;
  shadowBlue?: boolean;
}

export default function CodeBlock({
  label,
  lang = "BASH",
  children,
  shadowBlue = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const headerText = label ?? lang;

  return (
    <div
      className={[
        "my-6 overflow-hidden rounded-xl border bg-white",
        "border-primary-600",
        shadowBlue ? "shadow-[0_10px_10px_rgba(24,68,144,0.80)]" : "shadow-sm",
      ].join(" ")}
    >
      <div className="flex items-center justify-between rounded-lg bg-primary-500 px-4 py-2 font-medium text-white">
        <div className="flex items-center gap-2">
          <span>{headerText}</span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-white"
        >
          {copied ? (
            <span className="font-normal text-xs">copied</span>
          ) : (
            <Icon icon="bi:copy" width={16} />
          )}
        </button>
      </div>

      <pre className="overflow-x-auto whitespace-pre-wrap p-4 font-code text-xs lg:text-[15px] leading-relaxed text-primary-700">
        <code>{children}</code>
      </pre>
    </div>
  );
}
