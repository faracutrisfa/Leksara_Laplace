import type { ReactNode } from "react";

interface DocListProps {
  items: ReactNode[];
}

export default function DocList({ items }: DocListProps) {
  return (
    <ul className="mt-3 ml-6 list-disc space-y-1 text-neutral-600">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}