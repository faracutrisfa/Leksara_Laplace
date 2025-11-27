export default function Hero() {
  return (
    <section className="bg-primary-50 ">
      <div className="container grid items-center gap-10 pt-24 pb-16 lg:grid-cols-2 lg:pt-32 lg:pb-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold lg:text-5xl">
            Leksara Automates Your{" "}
            <span className="text-primary-600">Text Cleaning</span>
          </h1>

          <p className="text-slate-600 max-w-xl">
            Python toolkit for preprocessing, cleaning, and analyzing customer
            reviews.
          </p>

          <a
            href="/docs/getting-started"
            className="inline-block rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700"
          >
            Get Started
          </a>
        </div>

        <div className="hidden h-80 rounded-3xl border bg-white shadow lg:block" />
      </div>
    </section>
  );
}
