import { Icon } from "@iconify/react";
import Card from "../../components/Card";

export default function AboutUs() {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-lg font-semibold text-primary-600">
            <Icon icon="material-symbols:dashboard-rounded" width={18} />
            <span>About us</span>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center text-center md:flex-row md:items-center md:justify-center md:text-left gap-5">
          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900">
            What is <span className="text-primary-500">Leksara</span>
          </h2>

          <div className="hidden md:block h-20 w-1 bg-primary-600" />

          <p className="max-w-4xl text-xs md:text-sm lg:text-lg text-neutral-2 font-semibold">
            Leksara is a Python toolkit designed to help Data Scientists and
            Machine Learning Engineers clean and preprocess Indonesian text data
            efficiently.
          </p>
        </div>

        <div>
          <Card />
        </div>
      </div>
    </section>
  );
}
