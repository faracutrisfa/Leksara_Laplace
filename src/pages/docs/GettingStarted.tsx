import CodeBlock from "../../components/docs/CodeBlock";
import SectionHeading from "../../components/docs/SectionHeading";

const OVERVIEW_POINTS = [
  "Dealing with e-commerce data",
  "Working with messy and uncleaned data",
  "Handling informal, slangs, acronyms, non-alphabeticals",
  "Helps flags noises and non-alphabeticals within the dataset",
];

const MODULES = [
  {
    name: "CartBoard",
    description:
      "Provides quick text diagnostics, including condition flags, statistical summaries, and noise detection.",
  },
  {
    name: "ReviewCleaner",
    description:
      "Performs basic text cleaning like removing HTML, normalizing case, eliminating stopwords, whitespace, and unwanted symbols.",
  },
  {
    name: "UserBrush",
    description:
      "Advanced cleaning for personally identifiable information (PII), safely removing or replacing phone numbers, addresses, emails, and NIK.",
  },
  {
    name: "ReviewMiner",
    description:
      "Specialized for user reviews, handles rating normalization, slang & contraction expansion, acronym processing, and word-level normalization while preserving key tokens.",
  },
  {
    name: "ReviewChain",
    description:
      "Configurable pipeline to automate cleaning workflows with presets, custom steps, and optional benchmarking.",
  },
];

const envListClass = "mt-4 ml-6 list-disc space-y-1 text-neutral-4 font-medium";
const bodyTextClass =
  "mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function GettingStarted() {
  return (
    <article className="text-sm sm:text-base text-slate-700 leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Getting Started with Leksara
      </h1>

      {/* Overview ----------------------------------------------------------- */}
      <section className="mt-6">
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-2">
          Overview
        </h2>

        <ol className="mt-3 ml-5 list-decimal space-y-3">
          <li>
            Leksara is a toolkit in Python to effectively help Data Scientists
            and ML Engineers in preprocessing and cleaning raw text data from
            e-commerce domains. Leksara is mainly designed to be used for:
            <ul className="mt-2 ml-6 list-[lower-alpha] space-y-1">
              {OVERVIEW_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        </ol>
      </section>

      {/* 01 — Environment --------------------------------------------------- */}
      <section id="environment" className="mt-10">
        <SectionHeading index="01" title="Environment" />

        <ul className={envListClass}>
          <li>
            <strong>Python:</strong> 3.9, 3.10, 3.11, 3.12
          </li>
          <li>
            <strong>Operating Systems:</strong> Windows (PowerShell), macOS,
            Ubuntu
          </li>
          <li>
            <strong>Pandas:</strong> Version 1.5 or higher
          </li>
        </ul>

        <p className={bodyTextClass}>
          Since Leksara relies solely on pure-Python dependencies, installation
          requires no compiler on any supported platform.
        </p>

        <div className="mt-6">
          <CodeBlock lang="BASH">
            {`# Installation
pip install --upgrade pip
pip install leksara`}
          </CodeBlock>
        </div>
      </section>

      {/* 02 — Leksara Modules ---------------------------------------------- */}
      <section id="modules" className="mt-12 sm:mt-14">
        <SectionHeading index="02" title="Leksara Modules" />

        <p className="mt-3">
          <strong>Leksara has five key modules:</strong>
        </p>

        <ul className="mt-3 ml-6 space-y-1">
          {MODULES.map((module) => (
            <li key={module.name} className="flex items-start gap-2">
              <span className="text-primary-500 text-lg">•</span>
              <p>
                <span className="font-semibold text-primary-600">
                  {module.name} :
                </span>
                <span className="text-neutral-4 font-medium">
                  {" "}
                  {module.description}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
