import { useState } from "react";
import { Icon } from "@iconify/react";

interface CodeBlockProps {
  label?: string;
  lang?: string;
  children: string;
  shadowBlue?: boolean;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function highlightCode(code: string): string {
  return code
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("#")) {
        return `<span class="text-neutral-4">${escapeHtml(line)}</span>`;
      }

      const hashIndex = line.indexOf(" #");
      if (hashIndex !== -1) {
        const before = line.slice(0, hashIndex);
        const comment = line.slice(hashIndex);

        const beforeEscaped = escapeHtml(before);
        const commentEscaped = escapeHtml(comment);

        return `${beforeEscaped}<span class="text-neutral-4">${commentEscaped}</span>`;
      }

      return escapeHtml(line);
    })
    .join("\n");
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
  const highlighted = highlightCode(children);

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
          type="button"
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

      <pre className="overflow-x-auto whitespace-pre-wrap p-4 font-code text-xs leading-relaxed text-primary-700 lg:text-[15px]">
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
}
