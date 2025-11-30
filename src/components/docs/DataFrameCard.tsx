import type { ReactNode } from "react";

interface DataFrameCardProps {
  columns: string[];
  rows: (ReactNode | string | number | boolean)[][];
}

export default function DataFrameCard({ columns, rows }: DataFrameCardProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-primary-400 bg-primary-50 text-sm">
      <div className="overflow-x-auto">
        <table
          className="min-w-full border-separate"
          style={{ borderSpacing: "4px 4px" }}
        >
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={[
                    "bg-primary-500 px-4 py-2 text-left font-semibold text-white",
                    "border-b border-primary-400",
                    i === 0 ? "rounded-tl-lg" : "",
                    i === columns.length - 1 ? "rounded-tr-lg" : "",
                  ].join(" ")}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rIndex) => {
              const isLastRow = rIndex === rows.length - 1;

              return (
                <tr key={rIndex}>
                  {row.map((cell, cIndex) => {
                    const isFirst = cIndex === 0;
                    const isLast = cIndex === row.length - 1;

                    return (
                      <td
                        key={cIndex}
                        className={[
                          "bg-white px-4 py-3 align-top text-primary-800",
                          "border border-primary-200 border-t-primary-100",
                          isLastRow && isFirst ? "rounded-bl-lg" : "",
                          isLastRow && isLast ? "rounded-br-lg" : "",
                        ].join(" ")}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
