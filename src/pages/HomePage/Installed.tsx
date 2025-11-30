import { useState, useCallback, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import CodeBlock from "../../components/docs/CodeBlock";

const STEPS = [
  {
    number: "01",
    label: "Use Python newer installed",
    title: "Quick Installation Guide",
    desc: "Once the installation is complete, you can verify that Leksara was installed correctly by importing it in Python and checking its version.",
    code: `pip install leksara`,
  },
  {
    number: "02",
    label: "Use Python newer installed",
    title: "Virtual Environment Guide",
    desc: "We highly recommend installing Leksara inside a virtual environment to keep your project dependencies isolated and clean. Here is a quick guide to create one using venv.",
    code: `python -m venv leksara_env     # Linux/macOS & Windows
source leksara_env/bin/activate  # Linux/macOS
leksara_env\\Scripts\\activate   # Windows
pip install leksara`,
  },
  {
    number: "03",
    label: "Use Python newer installed",
    title: "Installation Requirement",
    desc: "Ensure you have Python 3.8 or newer installed. Leksara is published on PyPI, allowing for a simple and straightforward installation using pip.",
    code: `import leksara

print(leksara.__version__)`,
  },
] as const;

type Step = (typeof STEPS)[number];
type StepVariant = "active" | "muted";

const leftCardVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const rightColVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
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

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const activeStepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

export default function Installed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollLockedRef = useRef(false);
  const wheelAreaRef = useRef<HTMLDivElement | null>(null);
  const totalSteps = STEPS.length;

  const goNext = useCallback(() => {
    setActiveIndex((prevIdx) => (prevIdx + 1) % totalSteps);
  }, [totalSteps]);

  const goPrev = useCallback(() => {
    setActiveIndex((prevIdx) => (prevIdx - 1 + totalSteps) % totalSteps);
  }, [totalSteps]);

  const lockScroll = useCallback(() => {
    scrollLockedRef.current = true;
    window.setTimeout(() => {
      scrollLockedRef.current = false;
    }, 350);
  }, []);

  useEffect(() => {
    const el = wheelAreaRef.current;
    if (!el) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (scrollLockedRef.current) return;

      if (event.deltaY > 0) {
        goNext();
      } else if (event.deltaY < 0) {
        goPrev();
      }

      lockScroll();
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, [goNext, goPrev, lockScroll]);

  const prevIndex = (activeIndex - 1 + totalSteps) % totalSteps;
  const nextIndex = (activeIndex + 1) % totalSteps;

  const active = STEPS[activeIndex];
  const prev = STEPS[prevIndex];
  const next = STEPS[nextIndex];

  const indicatorTop = `${((activeIndex + 0.5) / totalSteps) * 100}%`;

  return (
    <section className="relative">
      <div className="container">
        <div className="flex justify-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={badgeVariants}
          >
            <Icon icon="material-symbols:dashboard-rounded" width={18} />
            <span>Installed</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
        >
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-4xl">
            How to <span className="text-primary-500">Install</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-xs text-neutral-600 md:text-sm lg:text-lg">
            See how Leksara turns hours of manual text cleaning into a seamless,
            automated process — so your team can focus on insights, modeling,
            and innovation.
          </p>
        </motion.div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-primary-50/70 px-8 py-10 lg:px-12 lg:py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={leftCardVariants}
          >
            <div className="absolute left-5.5 top-8 bottom-8 w-1 rounded-full bg-primary-200" />

            <motion.div
              layout
              className="absolute left-[22px] w-1 rounded-full bg-primary-500"
              style={{ top: indicatorTop, height: "56px" }}
              transition={{ duration: 0.25 }}
            />

            <Icon
              icon="mdi:star-four-points"
              width={18}
              className="absolute left-20 top-6 text-[#5D59F7]"
            />
            <Icon
              icon="mdi:sparkles"
              width={20}
              className="absolute bottom-10 right-16 text-[#FB5B35]"
            />

            <div className="ml-10 max-w-md">
              <CodeBlock shadowBlue lang="BASH">
                {active.code}
              </CodeBlock>
            </div>
          </motion.div>

          <motion.div
            ref={wheelAreaRef}
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={rightColVariants}
          >
            <div className="space-y-8">
              <StepRow
                step={prev}
                variant="muted"
                onSelect={() => setActiveIndex(prevIndex)}
              />

              <motion.div
                key={active.number}
                variants={activeStepVariants}
                initial="hidden"
                animate="visible"
              >
                <StepRow
                  step={active}
                  variant="active"
                  onSelect={() => setActiveIndex(activeIndex)}
                />
              </motion.div>

              <StepRow
                step={next}
                variant="muted"
                onSelect={() => setActiveIndex(nextIndex)}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface StepRowProps {
  step: Step;
  variant: StepVariant;
  onSelect?: () => void;
}

function StepRow({ step, variant, onSelect }: StepRowProps) {
  const isActive = variant === "active";

  return (
    <div
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : -1}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (!onSelect) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={[
        "grid cursor-pointer grid-cols-[60px_auto] items-start gap-6 px-5 transition-all duration-300",
        isActive
          ? "translate-x-0 scale-[1.05]"
          : "-translate-x-3 scale-[0.95] opacity-40",
      ].join(" ")}
    >
      <div className="flex flex-col items-start text-start">
        <span
          className={[
            "font-bold transition-all duration-300",
            isActive
              ? "text-4xl text-primary-500"
              : "text-3xl text-neutral-400",
          ].join(" ")}
        >
          {step.number}
        </span>

        <p className="mt-1 whitespace-pre-line text-[10px] text-neutral-400">
          {step.label}
        </p>

        <span
          className={[
            "mt-3 w-16 border-t-2 transition-colors duration-300",
            isActive ? "border-primary-600" : "border-primary-200",
          ].join(" ")}
        />
      </div>

      <div>
        <h3
          className={[
            "transition-all duration-300",
            isActive
              ? "text-lg font-semibold text-neutral-900"
              : "text-base font-medium text-neutral-500",
          ].join(" ")}
        >
          {step.title}
        </h3>

        <p
          className={[
            "mt-1 leading-relaxed transition-all duration-300",
            isActive
              ? "text-sm text-neutral-600"
              : "text-xs text-neutral-500 line-clamp-2",
          ].join(" ")}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}
