import {
  Factory,
  Monitor,
  TrendingUp,
  Truck,
  Heart,
  ShoppingCart,
  Home,
  GraduationCap,
} from 'lucide-react';

const sectors = [
  { icon: Factory, name: 'Industria y fabricación' },
  { icon: Monitor, name: 'Tecnología y software' },
  { icon: TrendingUp, name: 'Servicios profesionales' },
  { icon: Truck, name: 'Logística y transporte' },
  { icon: Heart, name: 'Salud y clínicas' },
  { icon: ShoppingCart, name: 'Alimentación y distribución' },
  { icon: Home, name: 'Construcción e instalaciones' },
  { icon: GraduationCap, name: 'Educación y formación' },
];

export function Sectors() {
  return (
    <section id="sectores" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-4">
            Sectores con mayor demanda compradora
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-[#7A0C0C] rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#7A0C0C] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 border-2 border-gray-200 group-hover:border-[#7A0C0C] transition-colors">
                  <Icon className="w-8 h-8 text-[#7A0C0C]" />
                </div>
                <strong className="text-gray-900 font-semibold text-lg">{sector.name}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
