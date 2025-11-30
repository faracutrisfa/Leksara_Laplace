import SectionHeading from "../../components/docs/SectionHeading";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function ReviewCleaner() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 02 — ReviewCleaner --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="02" title="ReviewCleaner" />

        <div className={introTextClass}>
          <p>
            Clean and standardize text, expanding contractions, normalizing
            slang and words, shortening elongations, replacing acronyms, and
            converting ratings—making raw text consistent and ready for NLP or
            analysis. Functions: replace_rating, shorten_elongation,
            replace_acronyms, normalize_slangs, expand_contraction,
            word_normalization
          </p>
        </div>
      </section>
    </article>
  );
}
