import SectionHeading from "../../components/docs/SectionHeading";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function CartBoard() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 01 — CartBoard --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="01" title="CartBoard" />

        <div className={introTextClass}>
          <p>
            Provides data-aware utilities for managing and analyzing structured
            datasets. Helps user flags PII, non-alphabeticals, ratings, detect
            noises, acquire statistics of the data given. Functions: get_flags,
            get_stats, noise_detect
          </p>
        </div>
      </section>
    </article>
  );
}
