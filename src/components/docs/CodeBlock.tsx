import { useState } from "react";
import { Icon } from "@iconify/react";

interface CodeBlockProps {
  lang?: string;
  children: string;
}

export default function CodeBlock({ lang = "BASH", children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-primary-600 bg-white shadow-sm">
      <div className="flex items-center justify-between bg-primary-500 rounded-lg px-4 py-2 font-medium text-white">
        <span>{lang}</span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-white"
        >
          {copied ? (
            <span className="font-normal text-sm">copied</span>
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
