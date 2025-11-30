import { Icon } from "@iconify/react";
import CodeBlock from "../../components/docs/CodeBlock";
import CardReview from "../../components/CardReview";
import ReviewCard from "../../components/features/ReviewCard";

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

        <h2 className="mt-6 text-center text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-4xl">
          <span className="text-primary-500">Before</span> Vs After Leksara
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-center text-xs font-semibold text-neutral-600 md:text-sm lg:text-lg">
          See how Leksara transforms messy, unstructured text into clean,
          ready-to-analyze data — instantly.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
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

            <div className="mt-4 flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <div className="self-start w-full max-w-xs sm:max-w-sm">
                <CardReview
                  variant="original"
                  name="Fransisco"
                  text="Barangnya bagus banget murah tapi kualitas mantap', 'pesanan telat hr tapi masih ok lah'"
                />
              </div>

              <div className="self-end w-full max-w-xs sm:max-w-sm">
                <CardReview
                  variant="original"
                  name="Fransisco"
                  text="gak sesuai gambar kecewa"
                />
              </div>
            </div>

            <CodeBlock shadowBlue label="Before Leksara" lang="PYTHON">
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

            <div className="mt-4 flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <div className="self-start w-full max-w-xs sm:max-w-sm">
                <CardReview
                  variant="cleaned"
                  name="Fransisco"
                  text="Barangnya bagus banget murah tapi kualitas mantap'"
                />
              </div>

              <div className="self-end w-full max-w-xs sm:max-w-sm">
                <CardReview
                  variant="cleaned"
                  name="Fransisco"
                  text="Tidak sesuai gambar kecewa"
                />
              </div>
            </div>

            <CodeBlock shadowBlue label="After Leksara" lang="PYTHON">
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
