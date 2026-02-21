"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Como personaliza la IA mi itinerario?",
    a: "Nuestra IA analiza tus preferencias, presupuesto, fechas y estilo de viaje para crear un plan unico. Puedes ajustarlo en cualquier momento y la IA se adapta en tiempo real.",
  },
  {
    q: "Puedo modificar el itinerario durante el viaje?",
    a: "Por supuesto. La app te permite cambiar planes sobre la marcha, y nuestra IA recalcula todo automaticamente: reservas, tiempos, rutas.",
  },
  {
    q: "Que tipo de soporte ofrecen?",
    a: "Combinamos asistencia automatizada con un equipo humano disponible 24/7 para cualquier emergencia o consulta durante tu viaje.",
  },
  {
    q: "Es gratuita la app?",
    a: "La planificacion basica es gratuita. Para funciones premium como reservas automaticas, soporte prioritario y el diario de viaje, ofrecemos planes accesibles.",
  },
  {
    q: "En que destinos esta disponible?",
    a: "Actualmente cubrimos mas de 120 paises. Estamos en constante expansion para ofrecerte las mejores experiencias en cualquier rincon del mundo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-6 flex items-center"
    >
      <div className="max-w-2xl mx-auto w-full">
        <p className="text-sm uppercase tracking-widest text-white/50 font-mono mb-4">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-12 text-balance">
          Resolvemos tus dudas
        </h2>

        <div className="space-y-0 divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between gap-4 group"
                aria-expanded={open === i}
              >
                <span className="text-white text-sm md:text-base group-hover:text-white/80 transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 text-white/40 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-white/60 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
