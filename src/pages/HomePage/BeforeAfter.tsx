import { Icon } from "@iconify/react";
import CodeBlock from "../../components/docs/CodeBlock";

import Before1 from "../../../public/assets/before_after/before1.svg";
import Before2 from "../../../public/assets/before_after/before2.svg";
import After1 from "../../../public/assets/before_after/after1.svg";
import After2 from "../../../public/assets/before_after/after2.svg";

export default function BeforeAfter() {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600">
            <Icon icon="material-symbols:dashboard-rounded" width={18} />
            <span>BeforeAfter</span>
          </div>
        </div>

        <h2 className="mt-6 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900">
          <span className="text-primary-500">Before</span> Vs After Leksara
        </h2>

        <p className="mt-4 mx-auto max-w-4xl text-center text-xs md:text-sm lg:text-lg font-semibold text-neutral-600">
          See how Leksara transforms messy, unstructured text into clean,
          ready-to-analyze data — instantly.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                Before:
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Messy data, messy code. Repetitive scripts, endless regex, and
                hours lost cleaning slang, emojis, and random symbols.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img
                src={Before1}
                alt="Before example 1"
                className="w-full max-w-md select-none"
                draggable={false}
              />
              <img
                src={Before2}
                alt="Before example 2"
                className="w-full max-w-md select-none"
                draggable={false}
              />
            </div>

            <CodeBlock shadowBlue label="Quick example" lang="PYTHON">
              {`from leksara import Leksara

cleaner = Leksara()

texts = [
    "Ga nyangka bgt! produk ini bener2 bagusss 🤩🤩",
    "udh coba bbrp kali tp msh gagal :((("
]

# Manual loops, regex, custom functions...
cleaned = []
for t in texts:
    t = t.lower()
    # TODO: handle emojis, elongation, slang, dll
    cleaned.append(t)

print(cleaned)`}
            </CodeBlock>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">After:</h3>
              <p className="mt-1 text-sm text-neutral-600">
                One-line automation, customizable pipelines, and reproducible
                results that save time and boost productivity.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 -mt-0.5">
              <img
                src={After1}
                alt="After example 1"
                className="w-full max-w-md select-none"
                draggable={false}
              />
              <img
                src={After2}
                alt="After example 2"
                className="w-full max-w-md select-none"
                draggable={false}
              />
            </div>

            <CodeBlock shadowBlue label="Quick example" lang="PYTHON">
              {`from leksara import Leksara

cleaner = Leksara()

texts = [
    "Ga nyangka bgt! produk ini bener2 bagusss 🤩🤩",
    "udh coba bbrp kali tp msh gagal :((("
]

cleaned = cleaner.clean(texts)

for original, result in zip(texts, cleaned):
    print(f"Original : {original}")
    print(f"Cleaned  : {result}\\n")`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
