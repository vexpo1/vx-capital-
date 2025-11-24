export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="38" height="34" viewBox="0 0 90 80" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 20 L45 5 L70 20 L70 55 M20 20 L20 55 L45 70"
              fill="none"
              stroke="#7A0C0C"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-2xl font-bold text-gray-800">VX CAPITAL</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-gray-700 hover:text-[#7A0C0C] transition-colors">
            Servicios
          </a>
          <a href="#sectores" className="text-gray-700 hover:text-[#7A0C0C] transition-colors">
            Sectores
          </a>
          <a
            href="#diagnostico"
            className="bg-[#7A0C0C] text-white px-6 py-2.5 rounded-lg hover:bg-[#5a0909] transition-colors font-medium"
          >
            Solicitar valoración
          </a>
        </div>
      </nav>
    </header>
  );
}
