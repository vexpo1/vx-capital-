import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '34645079743';
  const message = encodeURIComponent(
    '¡Hola! Me gustaría recibir información sobre la valoración de mi empresa.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all z-50 group hover:scale-110 animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute left-full ml-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chatea con nosotros
      </span>
    </a>
  );
}
