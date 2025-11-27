import { Icon } from "@iconify/react";

export default function BeforeAfter() {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-lg font-semibold text-primary-600">
            <Icon icon="material-symbols:dashboard-rounded" width={18} />
            <span>BeforeAfter</span>
          </div>
        </div>

        <h2 className="mt-6 text-center text-2xl sm:text-4xl font-semibold text-neutral-900">
          <span className="text-primary-500">Before</span> VS After Leksara
        </h2>

        <p className="mt-4 mx-auto max-w-4xl text-center text-xs md:text-sm lg:text-lg font-semibold text-neutral-600">
          See how Leksara transforms messy, unstructured text into clean,
          ready-to-analyze data — instantly.
        </p>
      </div>
    </section>
  );
}
