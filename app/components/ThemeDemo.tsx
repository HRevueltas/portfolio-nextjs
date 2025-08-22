'use client';

import { useSystemTheme } from '../../hooks/useSystemTheme';

export default function ThemeDemo() {
  const { theme, systemTheme, isLight, isDark } = useSystemTheme();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-high-contrast)] font-body transition-colors duration-300">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-48 font-800 leading-56 mb-4">
            Detección Automática de Tema
          </h1>
          <p className="text-20 leading-32 text-gray-11 max-w-2xl mx-auto">
            Este componente detecta automáticamente el tema de tu sistema operativo
            y cambia los colores sin necesidad de botones manuales.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-gray-1 border border-gray-6 rounded-3 p-8 mb-8 shadow-medium">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-24 font-600 text-gray-12">Estado del Tema</h2>
            <div className={`w-4 h-4 rounded-full ${isDark ? 'bg-amber-9' : 'bg-blue-9'}`} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-16 font-600 text-gray-12 mb-2">Tema Detectado</h3>
              <p className="text-32 font-700 capitalize text-gray-12 mb-1">{theme}</p>
              <p className="text-14 text-gray-11">
                {isLight ? '☀️ Modo claro activo' : '🌙 Modo oscuro activo'}
              </p>
            </div>
            
            <div>
              <h3 className="text-16 font-600 text-gray-12 mb-2">Tema del Sistema</h3>
              <p className="text-32 font-700 capitalize text-gray-12 mb-1">{systemTheme}</p>
              <p className="text-14 text-gray-11">
                Detectado automáticamente
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-1 border border-blue-6 rounded-3 p-8 mb-8">
          <h2 className="text-20 font-600 text-blue-12 mb-4">
            Cómo Probar la Detección Automática
          </h2>
          <div className="space-y-3 text-blue-11">
            <p className="flex items-start gap-3">
              <span className="font-600 text-blue-9">1.</span>
              <span>Ve a la configuración de tu sistema operativo</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="font-600 text-blue-9">2.</span>
              <span>Cambia entre tema claro y oscuro</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="font-600 text-blue-9">3.</span>
              <span>Observa cómo esta página cambia automáticamente</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="font-600 text-blue-9">4.</span>
              <span>¡No hay botones ni configuración manual necesaria!</span>
            </p>
          </div>
        </div>

        {/* Color Demonstration */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-3 hover:bg-gray-4 rounded-2 p-4 transition-colors duration-200">
            <div className="w-8 h-8 bg-gray-9 rounded-1 mb-3" />
            <h3 className="text-14 font-600 text-gray-12">Grises</h3>
            <p className="text-12 text-gray-11">Neutros adaptativos</p>
          </div>
          
          <div className="bg-blue-3 hover:bg-blue-4 rounded-2 p-4 transition-colors duration-200">
            <div className="w-8 h-8 bg-blue-9 rounded-1 mb-3" />
            <h3 className="text-14 font-600 text-blue-12">Azul</h3>
            <p className="text-12 text-blue-11">Color primario</p>
          </div>
          
          <div className="bg-green-3 hover:bg-green-4 rounded-2 p-4 transition-colors duration-200">
            <div className="w-8 h-8 bg-green-9 rounded-1 mb-3" />
            <h3 className="text-14 font-600 text-green-12">Verde</h3>
            <p className="text-12 text-green-11">Estados exitosos</p>
          </div>
          
          <div className="bg-amber-3 hover:bg-amber-4 rounded-2 p-4 transition-colors duration-200">
            <div className="w-8 h-8 bg-amber-9 rounded-1 mb-3" />
            <h3 className="text-14 font-600 text-amber-12">Ámbar</h3>
            <p className="text-12 text-amber-11">Acentos cálidos</p>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-2 rounded-3 p-6">
          <h3 className="text-16 font-600 text-gray-12 mb-4">Implementación CSS</h3>
          <pre className="font-mono text-14 leading-20 text-gray-11 overflow-x-auto">
            <code>{`/* Tailwind CSS 4 - Detección automática de tema */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #000000;
    --color-high-contrast: #ffffff;
    --color-gray-1: hsl(0 0% 8.5%);
    --color-gray-12: hsl(0 0% 93.0%);
    /* ... más variables de tema oscuro */
  }
}

/* Uso en componentes */
.bg-adaptive { 
  background: var(--color-bg); 
}
.text-adaptive { 
  color: var(--color-high-contrast); 
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
