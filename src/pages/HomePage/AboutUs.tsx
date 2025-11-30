import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import Card from "../../components/Card";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: -16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const contentContainerVariants: Variants = {
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

const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const dividerVariants: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.4 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function AboutUs() {
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
            <span>About us</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-5 flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={contentContainerVariants}
        >
          <motion.h2
            className="text-2xl font-semibold text-neutral-900 sm:text-4xl"
            variants={contentItemVariants}
          >
            What is <span className="text-primary-500">Leksara</span>
          </motion.h2>

          <motion.div
            className="hidden h-20 w-1 bg-primary-600 md:block"
            variants={dividerVariants}
          />

          <motion.p
            className="max-w-4xl text-xs font-semibold text-neutral-2 md:text-sm lg:text-lg"
            variants={contentItemVariants}
          >
            Leksara is a Python toolkit designed to help Data Scientists and
            Machine Learning Engineers clean and preprocess Indonesian text data
            efficiently.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <Card />
        </motion.div>
      </div>
    </section>
  );
}
