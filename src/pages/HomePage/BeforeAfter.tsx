import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import CodeBlock from "../../components/docs/CodeBlock";
import CardReview from "../../components/CardReview";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: -12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const headingGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const stackVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function BeforeAfter() {
  return (
    <section className="relative">
      <div className="container">
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={sectionVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600"
            variants={badgeVariants}
          >
            <Icon icon="material-symbols:dashboard-rounded" width={18} />
            <span>BeforeAfter</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingGroupVariants}
        >
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-4xl">
            <span className="text-primary-500">Before</span> Vs After Leksara
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-xs font-semibold text-neutral-600 md:text-sm lg:text-lg">
            See how Leksara transforms messy, unstructured text into clean,
            ready-to-analyze data — instantly.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-10 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={gridVariants}
        >
          <motion.div className="space-y-6" variants={columnVariants}>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                Before:
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Messy data, messy code. Repetitive scripts, endless regex, and
                hours lost cleaning slang, emojis, and random symbols.
              </p>
            </div>

            <motion.div
              className="mt-4 flex flex-col gap-4 sm:gap-5 lg:gap-6"
              variants={stackVariants}
            >
              <div className="flex justify-start w-full">
                <div className="max-w-md w-fit">
                  <CardReview
                    variant="original"
                    name="Fransisco"
                    text="Barangnya bagus banget murah tapi kualitas mantap, pesanan telat 1 hari tapi masih ok lah."
                  />
                </div>
              </div>

              <div className="flex justify-end w-full">
                <div className="max-w-md w-fit">
                  <CardReview
                    variant="original"
                    name="Fransisco"
                    text="gak sesuai gambar, kecewa bgt."
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={stackVariants}>
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
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={columnVariants}>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">After:</h3>
              <p className="mt-1 text-sm text-neutral-600">
                One-line automation, customizable pipelines, and reproducible
                results that save time and boost productivity.
              </p>
            </div>

            <motion.div
              className="mt-4 flex flex-col gap-4 sm:gap-5 lg:gap-6"
              variants={stackVariants}
            >
              <div className="flex justify-start w-full">
                <div className="max-w-md w-fit">
                  <CardReview
                    variant="cleaned"
                    name="Fransisco"
                    text="Barangnya bagus, harga terjangkau dan kualitas tetap baik."
                  />
                </div>
              </div>

              <div className="flex justify-end w-full">
                <div className="max-w-md w-fit">
                  <CardReview
                    variant="cleaned"
                    name="Fransisco"
                    text="Tidak sesuai gambar, membuat pembeli kecewa."
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={stackVariants}>
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
