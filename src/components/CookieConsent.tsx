import { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] animate-in fade-in duration-300" />

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-[#7A0C0C] z-[70] animate-in slide-in-from-bottom duration-500">
        {!showSettings ? (
          <div className="max-w-7xl mx-auto p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7A0C0C] rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Utilizamos cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Este sitio web utiliza cookies propias y de terceros para mejorar tu
                  experiencia de navegación, realizar análisis estadísticos y mostrarte contenido
                  personalizado. Puedes aceptar todas las cookies, rechazar las opcionales o
                  configurar tus preferencias.
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Para más información, consulta nuestra{' '}
                  <a href="#cookies" className="text-[#7A0C0C] underline hover:text-[#5a0909]">
                    Política de Cookies
                  </a>
                  .
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-[#7A0C0C] text-white px-6 py-3 rounded-lg hover:bg-[#5a0909] transition-all font-semibold"
                  >
                    Aceptar todas
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="border-2 border-[#7A0C0C] text-[#7A0C0C] px-6 py-3 rounded-lg hover:bg-[#7A0C0C] hover:text-white transition-all font-semibold flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Configurar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Configuración de cookies</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Cerrar configuración"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">
                      Cookies necesarias (obligatorias)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Estas cookies son esenciales para el funcionamiento básico del sitio web y
                      no se pueden desactivar.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="w-5 h-5 rounded accent-[#7A0C0C] cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Cookies analíticas</h4>
                    <p className="text-sm text-gray-600">
                      Nos permiten analizar el uso del sitio web para mejorar su rendimiento y
                      funcionalidad. Recopilan información anónima sobre cómo los visitantes usan
                      el sitio.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? 'bg-[#7A0C0C]' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Cookies de marketing</h4>
                    <p className="text-sm text-gray-600">
                      Se utilizan para rastrear a los visitantes en los sitios web y mostrar
                      anuncios más relevantes y atractivos. También pueden limitar el número de
                      veces que ves un anuncio.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? 'bg-[#7A0C0C]' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={savePreferences}
                className="bg-[#7A0C0C] text-white px-8 py-3 rounded-lg hover:bg-[#5a0909] transition-all font-semibold"
              >
                Guardar preferencias
              </button>
              <button
                onClick={acceptAll}
                className="border-2 border-[#7A0C0C] text-[#7A0C0C] px-8 py-3 rounded-lg hover:bg-[#7A0C0C] hover:text-white transition-all font-semibold"
              >
                Aceptar todas
              </button>
              <button
                onClick={acceptNecessary}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold"
              >
                Solo necesarias
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
