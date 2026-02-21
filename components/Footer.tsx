import Logo from "./Logo";

const links = [
  { label: "Sobre nosotros", href: "#about" },
  { label: "Como funciona", href: "#acompaniamiento" },
  { label: "La App", href: "#app" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-sm py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-white/50 font-mono">
              Planifica, vive, recuerda
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Locations */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono">
            {"Berl\u00edn \u00b7 Londres \u00b7 Alicante"}
          </p>
          <p className="text-xs text-white/30 font-mono">
            Idea by Rubik Sota &middot; 62955 4870
          </p>
          <p className="text-xs text-white/20 font-mono">
            {new Date().getFullYear()} Travelia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
