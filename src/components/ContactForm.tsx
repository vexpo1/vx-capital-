import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get('nombre') as string,
      empresa: formData.get('empresa') as string,
      cif: formData.get('cif') as string,
      empleados: parseInt(formData.get('empleados') as string),
      facturacion: parseFloat(formData.get('facturacion') as string),
      beneficio: parseFloat(formData.get('beneficio') as string),
      telefono: formData.get('telefono') as string,
      email: formData.get('email') as string,
    };

    const { error: submitError } = await supabase.from('contact_submissions').insert([data]);

    setIsSubmitting(false);

    if (submitError) {
      setError('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      console.error('Error submitting form:', submitError);
      return;
    }

    setShowPopup(true);
    e.currentTarget.reset();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section id="diagnostico" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-4">
              ¿Tu empresa es vendible?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-[#7A0C0C] rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-700 mt-6">
              Completa el formulario para realizar un primer análisis y contactarte en menos de 24
              horas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-gray-900 font-medium mb-2">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="empresa" className="block text-gray-900 font-medium mb-2">
                Nombre de la empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="cif" className="block text-gray-900 font-medium mb-2">
                CIF
              </label>
              <input
                id="cif"
                name="cif"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="empleados" className="block text-gray-900 font-medium mb-2">
                Número de empleados
              </label>
              <input
                id="empleados"
                name="empleados"
                type="number"
                required
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="facturacion" className="block text-gray-900 font-medium mb-2">
                Facturación año anterior (€)
              </label>
              <input
                id="facturacion"
                name="facturacion"
                type="number"
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="beneficio" className="block text-gray-900 font-medium mb-2">
                Beneficio año anterior (€)
              </label>
              <input
                id="beneficio"
                name="beneficio"
                type="number"
                required
                step="0.01"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-gray-900 font-medium mb-2">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                pattern="[0-9]{9}"
                placeholder="Ej: 612345678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent outline-none transition-all"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#7A0C0C] text-white px-8 py-4 rounded-lg hover:bg-[#5a0909] transition-all font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar formulario'}
            </button>
          </form>
        </div>
      </section>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 animate-in fade-in duration-300"
          onClick={closePopup}
        >
          <div
            className="bg-white p-10 rounded-xl max-w-md text-center shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-[#7A0C0C] mb-4">
              Formulario enviado correctamente
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Gracias por contactar. Nos pondremos en contacto contigo en menos de 24 horas.
            </p>
            <button
              onClick={closePopup}
              className="bg-[#7A0C0C] text-white px-8 py-3 rounded-lg hover:bg-[#5a0909] transition-all font-semibold"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <a
        href="#diagnostico"
        className="fixed bottom-6 right-6 bg-[#7A0C0C] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#5a0909] transition-all font-semibold md:hidden z-40"
      >
        Solicitar valoración
      </a>
    </>
  );
}
