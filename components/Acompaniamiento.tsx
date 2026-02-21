const steps = [
  {
    number: "01",
    title: "Planifica",
    description:
      "Dinos qu\u00e9 tipo de experiencia buscas y nuestra IA crear\u00e1 un itinerario \u00fanico, totalmente adaptado a tu estilo.",
  },
  {
    number: "02",
    title: "Vive",
    description:
      "Durante tu viaje, recibe recomendaciones en tiempo real, reservas autom\u00e1ticas y soporte 24/7.",
  },
  {
    number: "03",
    title: "Recuerda",
    description:
      "Al volver, recibe un diario de viaje visual con tus mejores momentos, rutas y descubrimientos.",
  },
];

export default function Acompaniamiento() {
  return (
    <section
      id="acompaniamiento"
      className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-6 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-sm uppercase tracking-widest text-white/50 font-mono mb-4">
          {"C\u00f3mo funciona"}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-16 text-balance">
          {"Te acompa\u00f1amos en cada paso"}
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <span className="block text-4xl font-mono text-white/20 mb-4 group-hover:text-white/40 transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
