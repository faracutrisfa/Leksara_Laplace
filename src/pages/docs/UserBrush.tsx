import SectionHeading from "../../components/docs/SectionHeading";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function UserBrush() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 04 — UserBrush --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="04" title="UserBrush" />

        <div className={introTextClass}>
          <p>
            Utilities for PII-aware cleaning: mask or remove phone numbers,
            emails, addresses, and national IDs (NIK). All functions support
            ‘mode="remove" (delete)’ or ‘mode="replace"’ (mask with a token).
            Patterns and dictionaries are loaded from bundled resources.
            Functions: replace_phone, replace_email, replace_address,
            replace_id.
          </p>
        </div>
      </section>
    </article>
  );
}
