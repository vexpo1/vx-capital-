export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Compra y venta profesional de PYMES españolas
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          Asesoramiento experto en fusiones, adquisiciones y valoraciones empresariales.
          Experiencia real como empresario y comprador.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#diagnostico"
            className="bg-[#7A0C0C] text-white px-8 py-4 rounded-lg hover:bg-[#5a0909] transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Valorar mi empresa gratis
          </a>

          <a
            href="#servicios"
            className="border-2 border-[#7A0C0C] text-[#7A0C0C] px-8 py-4 rounded-lg hover:bg-[#7A0C0C] hover:text-white transition-all font-semibold text-lg"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
