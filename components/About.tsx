export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-6 flex items-center"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/50 font-mono mb-4">
          Sobre nosotros
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 text-balance">
          Viajes dise&ntilde;ados para quienes buscan algo m&aacute;s
        </h2>
        <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
          <p>
            No somos una agencia de viajes convencional. Creamos experiencias de
            viaje profundamente personales, donde cada detalle est&aacute; pensado para
            que solo tengas que vivirlas.
          </p>
          <p>
            Desde la planificaci&oacute;n hasta el recuerdo, nuestra plataforma te
            acompa&ntilde;a en cada momento, combinando inteligencia artificial con un
            toque humano que marca la diferencia.
          </p>
          <p>
            Creemos que viajar no es solo moverse de un lugar a otro. Es
            transformarse. Y queremos ser parte de esa transformaci&oacute;n.
          </p>
        </div>
      </div>
    </section>
  );
}
