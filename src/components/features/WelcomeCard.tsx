export default function WelcomeCard() {
  return (
    <div
      className="
        pointer-events-none select-none
        w-[200px] sm:w-[220px] md:w-60
        rounded-[14px] bg-white
        px-4 py-3 md:px-5 md:py-4
        shadow-xl border border-primary-50
        transition-transform
        scale-[0.75] sm:scale-[0.85] md:scale-100
      "
    >
      <div className="text-center space-y-2">
        <div className="text-2xl sm:text-3xl">🖐️</div>

        <p className="text-xs sm:text-sm font-semibold text-neutral-900">
          Welcome to Leksara
        </p>

        <p className="text-[10px] sm:text-[11px] leading-snug text-neutral-500">
          Clean, normalize, and prepare your data — faster and smarter 🚀
        </p>
      </div>
    </div>
  );
}