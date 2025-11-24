export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-6 mt-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
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
              <h3 className="text-2xl font-bold text-gray-900">VX CAPITAL</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Asesoramiento profesional en compraventa de PYMES españolas.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4 text-lg">Legal</h4>
            <div className="space-y-2">
              <a
                href="#aviso"
                className="block text-gray-600 hover:text-[#7A0C0C] transition-colors"
              >
                Aviso legal
              </a>
              <a
                href="#privacidad"
                className="block text-gray-600 hover:text-[#7A0C0C] transition-colors"
              >
                Política de privacidad
              </a>
              <a
                href="#cookies"
                className="block text-gray-600 hover:text-[#7A0C0C] transition-colors"
              >
                Política de cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
