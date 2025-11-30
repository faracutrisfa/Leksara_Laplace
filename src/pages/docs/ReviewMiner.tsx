import SectionHeading from "../../components/docs/SectionHeading";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function ReviewMiner() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 03 — ReviewMiner --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="03" title="ReviewMiner" />

        <div className={introTextClass}>
          <p>
            Utilities for language-aware preprocessing of Indonesian text.
            Functions:    remove_tags, case_normal, remove_stopwords,
            remove_whitespace, remove_punctuation, remove_digits, replace_url,
            remove_emoji
          </p>
        </div>
      </section>
    </article>
  );
}
