import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto vale mi empresa?',
    answer:
      'Depende del EBITDA, recurrencia de ingresos, estabilidad de clientes, riesgos y comparables de su sector. Realizamos un análisis técnico para ofrecer un rango de valoración realista.',
  },
  {
    question: '¿En cuánto tiempo puedo venderla?',
    answer:
      'El proceso suele durar entre 3 y 6 meses, dependiendo del interés comprador, el sector y la preparación de documentación.',
  },
  {
    question: '¿Qué buscan los fondos de inversión?',
    answer:
      'Suelen priorizar empresas con estabilidad, márgenes positivos, equipos profesionalizados, procesos claros y potencial de crecimiento.',
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-4">
            Preguntas frecuentes
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-[#7A0C0C] rounded-full"></span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#7A0C0C] transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-6 h-6 text-[#7A0C0C] flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-[#7A0C0C] flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
