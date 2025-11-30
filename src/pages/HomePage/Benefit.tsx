import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import Benefit1 from "../../../public/assets/benefit/benefit1.webp";
import Benefit2 from "../../../public/assets/benefit/benefit2.webp";
import Benefit3 from "../../../public/assets/benefit/benefit3.webp";
import Benefit4 from "../../../public/assets/benefit/benefit4.webp";
import Benefit5 from "../../../public/assets/benefit/benefit5.webp";

const BENEFITS = [
  {
    image: Benefit1,
    title: "Automate Text Preprocessing",
    description:
      "Clean raw text automatically with a single command, saving your team hours of manual work.",
  },
  {
    image: Benefit2,
    title: "Standardize Cleaning Pipelines",
    description: "Ensure consistent, reproducible results across all projects.",
  },
  {
    image: Benefit3,
    title: "Flexible Customization",
    description:
      "Tailor each preprocessing step for slang, domain-specific terms, or sensitive data.",
  },
  {
    image: Benefit4,
    title: "Seamless Integration",
    description:
      "Plug directly into Pandas and your existing ML workflows without hassle.",
  },
  {
    image: Benefit5,
    title: "Time Savings",
    description:
      "Focus on modeling, insights, and innovation instead of repetitive tasks.",
  },
] as const;

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
    transition: { duration: 0.45 },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function Benefit() {
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
            className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-lg font-semibold text-primary-600"
            variants={badgeVariants}
          >
            <Icon icon="material-symbols:dashboard-rounded" width={18} />
            <span>Benefit</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
        >
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-4xl">
            How <span className="text-primary-500">Leksara</span> Empowers Your
            Workflow
          </h2>

          <p className="mx-auto max-w-4xl text-xs font-semibold text-neutral-600 md:text-sm lg:text-lg">
            Leksara transforms the way Data Scientists and Machine Learning
            Engineers handle raw Indonesian text. By automating repetitive
            preprocessing steps, it eliminates hours of manual cleaning and
            ensures consistent, high-quality results across projects.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-10 gap-x-10 lg:gap-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={gridVariants}
        >
          {BENEFITS.map((item) => (
            <motion.div
              key={item.title}
              className="flex max-w-xs w-1/2 flex-col items-center px-2 text-center md:w-1/3"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 h-28 w-auto select-none object-contain"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
              />
              <h3 className="text-sm font-bold text-neutral-900 sm:text-base md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-neutral-600 sm:text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
