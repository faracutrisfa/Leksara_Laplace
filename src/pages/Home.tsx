export default function Home() {
  return (
    <div className="bg-linear-to-b from-sky-50 to-white">
      <section className="container py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold">
            Leksara Automates Your <span className="text-primary-600">Text Cleaning</span>
          </h1>

          <p className="text-slate-600">
            Python toolkit for preprocessing, cleaning, and analyzing customer reviews.
          </p>

          <a
            href="/docs/getting-started"
            className="bg-primary-600 text-white px-6 py-3 rounded-full inline-block"
          >
            Get Started
          </a>
        </div>

        <div className="hidden lg:block h-80 bg-white border shadow rounded-3xl" />
      </section>
    </div>
  );
}
