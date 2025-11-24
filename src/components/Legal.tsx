export function Legal() {
  return (
    <>
      <section id="aviso" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Aviso Legal</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Este sitio web es propiedad de VX Capital. La información ofrecida tiene carácter
            informativo y no constituye asesoramiento jurídico, financiero o fiscal. El uso del
            sitio implica la aceptación de este aviso legal.
          </p>
        </div>
      </section>

      <section id="privacidad" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Política de privacidad</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            VX Capital cumple con el Reglamento General de Protección de Datos (RGPD). Sus datos
            serán utilizados exclusivamente para contactar y ofrecer la información solicitada.
            Puede ejercer sus derechos de acceso, rectificación y eliminación según la normativa
            vigente.
          </p>
        </div>
      </section>

      <section id="cookies" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Política de cookies</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              En cumplimiento con la Directiva 2009/136/CE y el Reglamento (UE) 2016/679 (RGPD), VX Capital
              informa sobre el uso de cookies en este sitio web.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">¿Qué son las cookies?</h3>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita
                un sitio web. Se utilizan para mejorar la funcionalidad del sitio y proporcionar información
                sobre cómo se utiliza.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tipos de cookies que utilizamos</h3>

              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Cookies necesarias</h4>
                  <p>
                    Son esenciales para el correcto funcionamiento del sitio web. Permiten la navegación
                    y el uso de las funciones básicas. Sin estas cookies, el sitio no puede funcionar
                    correctamente.
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Base legal:</strong> Interés legítimo (Art. 6.1.f RGPD)
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Cookies analíticas</h4>
                  <p>
                    Recopilan información sobre cómo los usuarios utilizan el sitio web de forma anónima.
                    Nos ayudan a comprender qué páginas son más populares y cómo los visitantes se mueven
                    por el sitio.
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Base legal:</strong> Consentimiento del usuario (Art. 6.1.a RGPD)
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Cookies de marketing</h4>
                  <p>
                    Se utilizan para rastrear a los visitantes en los sitios web con el fin de mostrar
                    anuncios relevantes y atractivos. También pueden limitar el número de veces que ve
                    un anuncio.
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Base legal:</strong> Consentimiento del usuario (Art. 6.1.a RGPD)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Control de cookies</h3>
              <p>
                Puede aceptar, rechazar o configurar las cookies haciendo clic en el botón de configuración
                del banner de cookies. También puede gestionar las cookies directamente desde su navegador:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                <li>Firefox: Opciones → Privacidad y seguridad → Cookies</li>
                <li>Safari: Preferencias → Privacidad → Cookies</li>
                <li>Edge: Configuración → Privacidad → Cookies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tus derechos</h3>
              <p>
                Conforme al RGPD, tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento,
                oponerse y a la portabilidad de sus datos. Para ejercer estos derechos, puede contactarnos
                mediante el formulario de contacto de esta web.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Actualizaciones</h3>
              <p>
                Esta política de cookies puede ser actualizada. Le recomendamos revisarla periódicamente
                para estar informado sobre cómo utilizamos las cookies.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
