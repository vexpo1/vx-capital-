import { TrendingUp, Users, FileText, Target } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Valoración de empresas',
    description:
      'Análisis técnico basado en EBITDA, comparables y metodologías empleadas por fondos de inversión para estimar el valor real de tu PYME.',
  },
  {
    icon: Users,
    title: 'Intermediación en compraventa',
    description:
      'Búsqueda activa de compradores cualificados, negociación de términos y acompañamiento durante todo el proceso hasta el cierre.',
  },
  {
    icon: FileText,
    title: 'Preparación documental',
    description:
      'Auditoría, memorándum de venta, presentaciones ejecutivas y organización de la documentación financiera, legal y operativa.',
  },
  {
    icon: Target,
    title: 'Estrategia de salida',
    description:
      'Diseño de planes para maximizar el valor de venta, optimización de estructuras previas al cierre y asesoramiento fiscal básico.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-4">
            Servicios principales
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-[#7A0C0C] rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#7A0C0C] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#7A0C0C] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
