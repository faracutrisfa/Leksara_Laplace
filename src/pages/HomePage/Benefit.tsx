import { Icon } from "@iconify/react";
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

export default function Benefit() {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-lg font-semibold text-primary-600">
            <Icon icon="material-symbols:dashboard-rounded" width={18} />
            <span>Benefit</span>
          </div>
        </div>

        <h2 className="mt-6 text-center text-2xl sm:text-4xl font-semibold text-neutral-900">
          How <span className="text-primary-500">Leksara</span> Empowers Your
          Workflow
        </h2>

        <p className="mt-4 mx-auto max-w-4xl text-center text-xs md:text-sm lg:text-lg font-semibold text-neutral-600">
          Leksara transforms the way Data Scientists and Machine Learning
          Engineers handle raw Indonesian text. By automating repetitive
          preprocessing steps, it eliminates hours of manual cleaning and
          ensures consistent, high-quality results across projects.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-10 lg:gap-y-16">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="w-1/2 md:w-1/3 flex flex-col items-center text-center px-2 max-w-xs"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 h-28 w-auto object-contain select-none"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
              />
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
