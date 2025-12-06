import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import Tech1 from "../../../public/assets/hero/cover1.svg";
import Tech2 from "../../../public/assets/hero/cover2.svg";
import Tech3 from "../../../public/assets/hero/cover3.svg";
import Tech4 from "../../../public/assets/hero/cover4.svg";
import BigTech from "../../../public/assets/hero/big_cover.svg";
import BlurCover from "../../../public/assets/hero/blur_cover.png";
import BlurCover2 from "../../../public/assets/hero/blur_cover2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

interface CircleIconProps {
  icon: string;
  className?: string;
  iconClassName?: string;
}

interface TechImageProps {
  src: string;
  alt: string;
  delay: number;
  direction?: number;
  floatDelay?: number;
}

interface SocialItem {
  label: string;
  icon: string;
  href: string;
}

const CircleIcon = ({
  icon,
  className = "",
  iconClassName = "",
}: CircleIconProps) => (
  <span
    className={`flex h-10 w-10 items-center justify-center rounded-full ${className}`}
  >
    <Icon icon={icon} className={iconClassName} />
  </span>
);

const PrimaryCta = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{
      y: -2,
      boxShadow: "0 16px 32px rgba(37,99,235,0.35)",
    }}
    whileTap={{ scale: 0.97 }}
    className="inline-flex items-center gap-2 rounded-2xl bg-primary-50 px-6 py-2.5 text-sm font-semibold text-primary-700 shadow-md shadow-primary-700 sm:text-sm"
  >
    {children}
  </motion.button>
);

const Badge = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
    className="relative z-20 rounded-full border border-primary-100 bg-white px-4 py-2 text-xs font-medium text-primary-700 shadow-[0_8px_24px_rgba(15,76,192,0.08)]"
  >
    Data Science
  </motion.div>
);

const BigTechBackground = () => (
  <div className="pointer-events-none absolute inset-0 left-1/2 right-1/2 top-1/2 -mx-[50vw] hidden w-screen items-center justify-center lg:top-1/3 lg:flex">
    <motion.div
      className="absolute inset-0 rounded-[40px] bg-linear-to-b from-primary-100/80 via-white to-primary-50/60 blur-3xl"
      animate={{ opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.img
      src={BigTech}
      alt="Leksara central pipeline"
      className="relative w-screen"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    />
  </div>
);

const TechImage = ({
  src,
  alt,
  delay,
  direction = 1,
  floatDelay = 0,
}: TechImageProps) => (
  <motion.div
    className="relative z-50"
    initial={{ opacity: 0, x: direction * 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <motion.img
      src={src}
      alt={alt}
      className="w-full max-h-[260px] md:max-h-none object-contain"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      animate={{ y: [0, direction * -10, 0] }}
      transition={{ ...floatTransition, delay: floatDelay }}
    />
  </motion.div>
);

const Heading = ({ className = "" }: { className?: string }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.6, delay: 0.1 }}
    className={`relative z-10 text-center ${className}`}
  >
    <h1 className="px-4 text-xl font-semibold text-primary-600 sm:text-2xl md:text-3xl lg:px-0 xl:text-5xl">
      Leksara Automates Your ✨{" "}
      <span className="text-slate-900">Text Cleaning</span>
    </h1>
    <p className="mx-auto mt-2 max-w-lg px-6 text-[11px] leading-relaxed text-neutral-500 sm:mt-3 sm:text-xs md:text-sm lg:mt-4 lg:max-w-2xl lg:px-0 lg:text-[15px]">
      Leksara accelerates your data workflow with an automatic, fully
      configurable text-cleaning pipeline for e-commerce and social media data.
    </p>
  </motion.div>
);

const techImages: TechImageProps[] = [
  {
    src: Tech1,
    alt: "Analytics dashboard",
    delay: 0.2,
    direction: -1,
    floatDelay: 0,
  },
  {
    src: Tech4,
    alt: "Search dashboard",
    delay: 0.2,
    direction: 1,
    floatDelay: 0.8,
  },
  {
    src: Tech2,
    alt: "Metrics card",
    delay: 0.3,
    direction: -1,
    floatDelay: 0.5,
  },
  {
    src: Tech3,
    alt: "Monitoring widget",
    delay: 0.3,
    direction: 1,
    floatDelay: 1.1,
  },
];

const MobileLayout = () => (
  <div className="relative z-10 pt-6 sm:pt-8 lg:hidden">
    <Heading className="mb-6 sm:mb-8" />

    <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 px-3">
      {techImages.map((tech) => (
        <div key={tech.alt} className="flex items-center justify-center">
          <div className="w-full max-w-[150px]">
            <TechImage {...tech} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DesktopLayout = () => (
  <div className="relative z-10 hidden lg:block">
    <div className="grid grid-cols-[280px_1fr_280px] items-start gap-8">
      <TechImage {...techImages[0]} />
      <Heading className="pt-8" />
      <TechImage {...techImages[1]} />
    </div>
    <div className="grid grid-cols-[280px_1fr_280px] items-end gap-8 px-24">
      <TechImage {...techImages[2]} />
      <div className="h-0" />
      <TechImage {...techImages[3]} />
    </div>
  </div>
);

const SOCIALS: SocialItem[] = [
  {
    label: "YouTube",
    icon: "mdi:youtube",
    href: "https://youtube.com/@bccfilkomub?si=s9In3Cpvejn2W7wI",
  },
  {
    label: "Instagram",
    icon: "mdi:instagram",
    href: "http://instagram.com/bccfilkom",
  },
  {
    label: "TikTok",
    icon: "ri:tiktok-fill",
    href: "https://www.tiktok.com/@bccfilkom",
  },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/company/bccfilkomub",
  },
];

const InfoCard = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <CircleIcon
        icon="ri:instagram-fill"
        className="bg-primary-200"
        iconClassName="text-xl text-primary-700"
      />
      <CircleIcon
        icon="ri:instagram-fill"
        className="bg-primary-700"
        iconClassName="text-xl text-primary-50"
      />
    </div>
    <p className="text-xs leading-relaxed text-neutral-600 md:text-sm">
      Clean and preprocess Indonesian raw text in one line of code fast,
      consistent, and ready for data analysis or machine learning.
    </p>
  </div>
);

const CenterCard = () => (
  <a
    href="/docs/getting-started"
    className="flex flex-col items-center justify-between gap-4 text-primary-700"
  >
    <PrimaryCta>
      Get Started
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-700">
        <Icon
          icon="mingcute:arrow-up-line"
          className="rotate-90 text-sm text-primary-50"
        />
      </span>
    </PrimaryCta>

    <div className="text-center leading-snug">
      <p className="text-[18px] font-semibold text-primary-500 sm:text-xl lg:text-[26px]">
        Less Cleaning, More
      </p>
      <p className="text-[18px] font-semibold text-primary-500 sm:text-xl lg:text-[26px]">
        Modeling.
      </p>
    </div>

    <p className="text-[11px] text-neutral-400 md:text-xs">
      Proving Solutions for best platform
    </p>
  </a>
);

const StatsCard = () => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex justify-center">
      <button className="inline-flex items-center rounded-full border-2 border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-600 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        Our Value
      </button>
    </div>

    <div className="flex items-start gap-3">
      <span className="text-3xl font-semibold tracking-tight text-primary-600 lg:text-5xl">
        90+
      </span>
      <p className="text-xs leading-relaxed text-neutral-600 lg:text-sm">
        Data Scientists and Engineers trust Leksara to simplify their text
        preprocessing workflows.
      </p>
    </div>
  </div>
);

const SocialMarquee = () => (
  <div className="mt-8 overflow-hidden lg:mt-12">
    <div className="relative flex">
      <motion.div
        className="flex shrink-0 gap-8 lg:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...SOCIALS, ...SOCIALS].map((item, idx) => (
          <a
            key={`${item.label}-${idx}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 opacity-60 transition hover:opacity-100 lg:gap-4"
          >
            <Icon
              icon={item.icon}
              className="text-2xl text-neutral-400 lg:text-3xl"
            />
            <span className="whitespace-nowrap text-lg font-medium text-neutral-400 lg:text-xl">
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  </div>
);

const MidStrip = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="container relative z-40 mx-auto w-full"
  >
    <div className="md:hidden">
      <div className="mx-auto w-full max-w-sm px-6 pt-8 text-center space-y-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <CircleIcon
              icon="ri:instagram-fill"
              className="bg-primary-200"
              iconClassName="text-xl text-primary-700"
            />
            <CircleIcon
              icon="ri:instagram-fill"
              className="bg-primary-700"
              iconClassName="text-xl text-primary-50"
            />
          </div>

          <p className="text-xs leading-relaxed text-neutral-600">
            Clean and preprocess Indonesian raw text in one line of code—fast,
            consistent, and ready for analysis.
          </p>
        </div>

        <a
          href="/docs/getting-started"
          className="flex flex-col items-center gap-4"
        >
          <PrimaryCta>
            Get Started
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-700">
              <Icon
                icon="mingcute:arrow-up-line"
                className="rotate-90 text-sm text-primary-50"
              />
            </span>
          </PrimaryCta>

          <div>
            <p className="text-lg font-semibold text-primary-500">
              Less Cleaning, More
            </p>
            <p className="text-lg font-semibold text-primary-500">Modeling.</p>
          </div>

          <p className="text-[11px] text-neutral-400">
            Proving Solutions for best platform
          </p>
        </a>

        <div className="flex flex-col items-center gap-3">
          <button className="inline-flex items-center rounded-full border-2 border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-600 shadow-sm">
            Our Value
          </button>

          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-primary-600">90+</span>
            <p className="text-xs text-neutral-600 text-left">
              Data Scientists and Engineers trust Leksara to simplify their
              workflows.
            </p>
          </div>
        </div>

        <div className="overflow-hidden pt-4">
          <motion.div
            className="flex gap-8 opacity-60"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...SOCIALS, ...SOCIALS].map((item, idx) => (
              <a
                key={`${item.label}-${idx}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:opacity-100"
              >
                <Icon icon={item.icon} className="text-xl text-neutral-400" />
                <span className="text-sm text-neutral-400">{item.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

    <div className="hidden md:block">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12 md:py-10 lg:py-1 xl:gap-24 2xl:py-6">
          <InfoCard />
          <CenterCard />
          <StatsCard />
        </div>
        <SocialMarquee />
      </div>
    </div>
  </motion.div>
);

const BlurOverlay = () => (
  <div
    className="
      pointer-events-none
      absolute inset-x-0
      -top-32 sm:-top-40 md:-top-48 lg:-top-56
      z-30
      h-[260px] sm:h-80 md:h-[360px] lg:h-[420px]
    "
  >
    <img
      src={BlurCover2}
      alt="Blur effect"
      className="hidden h-full w-full object-cover object-top lg:block"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
    />
    <img
      src={BlurCover}
      alt="Blur effect"
      className="h-full w-full object-cover object-top lg:hidden"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
    />
  </div>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-50">
      <div className="pointer-events-none absolute inset-x-0 top-24 sm:top-28 md:top-32 h-[360px] sm:h-[400px] md:h-[420px] rounded-[999px] bg-linear-to-b from-primary-100/80 via-primary-50/40 to-transparent blur-3xl" />

      <div className="container relative z-0 mx-auto flex flex-col items-center px-4 pb-0 pt-24 sm:pt-28 md:pt-32">
        <Badge />

        <div className="relative w-full">
          <BigTechBackground />

          <div className="relative mx-auto max-w-7xl">
            <div className="relative min-h-[440px] sm:min-h-[500px] md:min-h-[540px] lg:min-h-[760px]">
              <MobileLayout />
              <DesktopLayout />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 sm:mt-2 lg:-mt-20 xl:-mt-24 bg-white">
        <BlurOverlay />
        <MidStrip />
      </div>
    </section>
  );
}
