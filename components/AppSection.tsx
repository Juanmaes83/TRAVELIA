import Image from "next/image";

const valueBlocks = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
    title: "Planificaci\u00f3n Maestra",
    description:
      "Te asistimos desde el inicio con ideas inspiradoras, un checklist de maleta inteligente, gesti\u00f3n de documentaci\u00f3n esencial y todas tus reservas centralizadas.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
        />
      </svg>
    ),
    title: "Navegaci\u00f3n y Seguridad",
    description:
      "Recibe rutas marcadas con Google Maps para seguir el itinerario del d\u00eda sin desviaciones, junto con tel\u00e9fonos de seguridad y puntos de inter\u00e9s clave.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    title: "Diario de Viaje Multimedia",
    description:
      "Captura la magia del momento. Dentro de la app, puedes escribir tu diario, marcando el lugar, las personas y a\u00f1adiendo mensajes, im\u00e1genes o v\u00eddeos para guardar cada recuerdo al instante.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    title: "Memorias Premium con Travelia",
    description:
      "Al finalizar tu aventura, accede a la posibilidad de descargar un v\u00eddeo profesional y un cat\u00e1logo visual de tu viaje, creando recuerdos inolvidables de forma autom\u00e1tica.",
  },
];

export default function AppSection() {
  return (
    <section
      id="app"
      className="bg-black/50 backdrop-blur-sm py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <p className="text-sm uppercase tracking-widest text-white/50 font-mono mb-4">
          La app
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 text-balance">
          Todo tu viaje en una sola aplicaci&oacute;n
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-16 max-w-2xl">
          Desde la inspiraci&oacute;n hasta el recuerdo, nuestra aplicaci&oacute;n te
          acompa&ntilde;a en cada fase del viaje. Es la herramienta que centraliza tu
          aventura, eliminando el estr&eacute;s y enfoc&aacute;ndote solo en disfrutar.
        </p>

        {/* Phone mockup + intro */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="relative w-64 md:w-72 flex-shrink-0">
            {/* Phone frame */}
            <div className="relative rounded-[2.5rem] border-[6px] border-white/10 overflow-hidden shadow-2xl shadow-black/50 aspect-[9/19]">
              <Image
                src="/images/app-mockup.jpg"
                alt="Travelia app mostrando un itinerario de viaje personalizado"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-white/5 rounded-full blur-3xl -z-10" />
          </div>

          <div className="flex-1">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 text-balance">
              Nuestro Gran Valor Estrella: Travelia, Tu Asistente Total de Viaje
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              Nuestra plataforma va mucho m&aacute;s all&aacute; de un simple itinerario,
              convirti&eacute;ndose en tu asistente personal de viaje, capaz de gestionar
              cada detalle para que tu experiencia sea fluida y memorable.
            </p>
          </div>
        </div>

        {/* 4 value cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {valueBlocks.map((block) => (
            <div
              key={block.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-white/20 transition-colors duration-300">
                  {block.icon}
                </span>
                <h4 className="font-serif text-lg text-white">{block.title}</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        {/* Memorias Premium image strip */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/memorias-premium.jpg"
              alt="Memorias premium de viaje con Travelia: album de fotos, videos y recuerdos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg">
              Tus recuerdos, editados profesionalmente
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/travel-enjoy.jpg"
              alt="Viajero disfrutando de una vista costera con la app Travelia"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg">
              {"Viaja sin estr\u00e9s, disfruta cada momento"}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-mono uppercase tracking-wider hover:bg-white/90 transition-colors duration-300"
          >
            Descargar App
          </a>
        </div>
      </div>
    </section>
  );
}
