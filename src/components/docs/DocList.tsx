import type { ReactNode } from "react";

type ParamItem = {
  name: string;
  type?: string;
  defaultValue?: string;
  description?: string;
  children?: string[]; 
};

interface DocListProps {
  items: ReactNode[] | ParamItem[];
  variant?: "list" | "params";
}

export default function DocList({ items, variant = "list" }: DocListProps) {
  if (variant === "list") {
    return (
      <ul className="mt-3 ml-6 list-disc space-y-1 text-primary-400">
        {(items as ReactNode[]).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-3 ml-6 list-disc text-primary-500">
      {(items as ParamItem[]).map((item, i) => (
        <li key={i} className="marker:text-primary-500">
          <div className="leading-relaxed">

            <p className="font-semibold text-primary-500 text-sm">
              {item.name}
              {item.type && (
                <span className="text-primary-500">: {item.type}</span>
              )}
              {item.defaultValue && (
                <span className="text-primary-500"> = {item.defaultValue}</span>
              )}
            </p>

            {item.description && (
              <p className="text-neutral-3 text-[13px] mt-0.5">
                {item.description}
              </p>
            )}

            {item.children && (
              <ul className="mt-1 ml-5 space-y-1 text-neutral-500 text-[13px]">
                {item.children.map((child, idx) => (
                  <li key={idx}>{child}</li>
                ))}
              </ul>
            )}

          </div>
        </li>
      ))}
    </ul>
  );
}
