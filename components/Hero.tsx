import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <Logo />
        <p className="mt-2 text-sm text-white/70 font-mono">
          Planifica, vive, recuerda
        </p>
      </div>

      <div className="max-w-xl">
        <p className="mb-4 text-sm tracking-widest uppercase text-white/60 font-mono">
          Viajes que piensan contigo
        </p>
        <a
          href="#about"
          className="inline-block border border-white/60 text-white px-8 py-3 rounded-full text-sm font-mono uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
        >
          Descubrir mas
        </a>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-white/50"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
