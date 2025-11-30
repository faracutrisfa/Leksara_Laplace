import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import CodeBlock from "../../components/docs/CodeBlock";
import WelcomeCard from "../../components/features/WelcomeCard";
import ReviewCard from "../../components/features/ReviewCard";

type UsageSlide = {
  id: "basic" | "social" | "support";
  label: string;
  title: string;
  description: string;
  code: string;
};

const SLIDES: UsageSlide[] = [
  {
    id: "basic",
    label: "Basic Usage",
    title: "Clean raw review text for e-commerce analysis.",
    description:
      "Bima has a DataFrame of raw product reviews and wants to clean it quickly using the pre-built preset for e-commerce.",
    code: `from leksara import Leksara

df['cleaned_review'] = Leksara(
    df['review_text'],
    preset='ecommerce_review'
)

print(df[['review_id', 'cleaned_review']])`,
  },
  {
    id: "social",
    label: "Advanced Usage",
    title: "Mask and normalize customer chat logs.",
    description:
      "Bima is working with customer chat logs and needs to perform a very specific cleaning task: masking sensitive phone numbers while also applying some basic normalization.",
    code: `from leksara import Leksara

cleaner = Leksara(preset="chat_masking")
cleaned = cleaner.clean(chats)

print(cleaned.head())`,
  },
  {
    id: "support",
    label: "Advanced Usage",
    title: "Custom pipeline for support tickets.",
    description:
      "Dimas groups thousands of support tickets and needs a custom pipeline that masks phone numbers while still normalizing the text.",
    code: `from leksara import user_brush
from leksara.functions import to_lowercase
from leksara.patterns import replace_phone

custom_pipeline = {
    "patterns": [replace_phone],
    "functions": [to_lowercase],
}

df["safe_message"] = user_brush(
    df["chat_message"],
    pipeline=custom_pipeline,
)

print(df[["chat_id", "safe_message"]])`,
  },
];

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45 },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 1,
  }),
};

export default function Features() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const active = SLIDES[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600 sm:text-base"
            variants={badgeVariants}
          >
            <Icon icon="material-symbols:dashboard-rounded" width={18} />
            <span>Features</span>
          </motion.div>

          <motion.h2
            variants={headingVariants}
            className="mt-6 text-center text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-4xl"
          >
            <span className="text-primary-500">Usage</span> Example
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="mx-auto mt-4 max-w-3xl text-center text-xs font-medium text-neutral-600 sm:text-sm lg:text-base"
          >
            See how Leksara turns hours of manual text cleaning into a seamless,
            automated process — so your team can focus on insights, modeling,
            and innovation.
          </motion.p>
        </motion.div>

        <div className="relative mt-10 sm:mt-12">
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[440px] lg:min-h-[460px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45 }}
              >
                <UsageSlideContent
                  slide={active}
                  slideIndex={index}
                  total={SLIDES.length}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary-500" : "w-2 bg-primary-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface UsageSlideContentProps {
  slide: UsageSlide;
  slideIndex: number;
  total: number;
}

function UsageSlideContent({
  slide,
  slideIndex,
  total,
}: UsageSlideContentProps) {
  const currentNumber = (slideIndex + 1).toString().padStart(2, "0");
  const nextNumber = (((slideIndex + 1) % total) + 1)
    .toString()
    .padStart(2, "0");

  const isBasic = slide.id === "basic";

  const layoutClass = isBasic
    ? "md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
    : "md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]";

  const inputOrder = isBasic ? "" : "md:order-2";
  const outputOrder = isBasic ? "" : "md:order-1";

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
          <span className="text-2xl font-semibold text-primary-500 sm:text-3xl md:text-4xl">
            {currentNumber}
          </span>
          <span className="h-0.5 w-10 bg-primary-200" />
        </div>

        <div className="flex-1 text-left">
          <p className="text-xs font-semibold text-primary-500 sm:text-sm">
            {slide.label}
          </p>
          <p className="mt-1 max-w-2xl text-sm text-neutral-700 sm:text-base">
            {slide.title}
          </p>
          <p className="mt-1 max-w-2xl text-xs text-neutral-500 sm:text-sm">
            {slide.description}
          </p>
        </div>

        <div className="hidden flex-col items-end md:flex">
          <span className="text-2xl font-semibold text-primary-200 sm:text-3xl md:text-4xl">
            {nextNumber}
          </span>
          <span className="mt-2 h-0.5 w-10 bg-primary-200" />
        </div>
      </div>

      <div
        className={`grid items-start gap-6 rounded-3xl bg-neutral-50/80 px-4 py-6 sm:gap-8 sm:px-6 sm:py-7 lg:px-8 lg:py-8 ${layoutClass}`}
      >
        <div
          className={`relative rounded-2xl bg-linear-to-b from-primary-100 to-white/80 p-5 sm:p-7 lg:p-8 ${inputOrder}`}
        >
          <p className="text-base font-semibold text-primary-500 sm:text-2xl">
            01 / Input
          </p>
          <h3 className="mt-1 text-lg font-semibold text-neutral-900 sm:text-xl lg:text-2xl">
            Masukkan kode berikut
          </h3>

          <div className="relative mt-4 sm:mt-5">
            <div className="hidden lg:block pointer-events-none absolute -right-6 -top-10 rotate-15">
              <WelcomeCard />
            </div>

            <CodeBlock shadowBlue>{slide.code}</CodeBlock>
          </div>
        </div>

        <div className={`p-5 sm:p-7 lg:p-8 ${outputOrder}`}>
          <p className="text-base font-semibold text-primary-500 sm:text-2xl">
            02 / Output
          </p>
          <h3 className="mt-1 text-lg font-semibold text-neutral-900 sm:text-xl lg:text-2xl">
            Hasil Original Vs Cleaned
          </h3>

          <div className="mt-4 flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <div className="flex w-full justify-start">
              <ReviewCard variant="original" />
            </div>

            <div className="flex w-full justify-end">
              <ReviewCard variant="cleaned" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
