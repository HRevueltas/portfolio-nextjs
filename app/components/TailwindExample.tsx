// Ejemplo de uso de las variables de tema personalizadas con Tailwind CSS 4
// Este archivo muestra cómo usar tu configuración de diseño migrada de Stitches

import React from "react";
import Paragraph from "./Parragraph";

const ExampleComponent = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-high-contrast)] font-body">
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-48 font-800 leading- mb-6">
            Portfolio con Tailwind CSS 4
          </h1>
          <Paragraph>
            Este es un ejemplo de cómo usar tu sistema de diseño personalizado
            con las nuevas variables de tema de Tailwind CSS 4.
          </Paragraph>

          {/* Buttons usando tus colores personalizados */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-blue-9 hover:bg-blue-10 text-white rounded-2 font-600 transition-all duration-200">
              Botón Primario
            </button>
            <button className="px-6 py-3 bg-gray-3 hover:bg-gray-4 text-gray-12 rounded-2 font-600 transition-all duration-200">
              Botón Secundario
            </button>
            <button className="px-6 py-3 bg-green-9 hover:bg-green-10 text-white rounded-2 font-600 transition-all duration-200">
              Botón Éxito
            </button>
            <button className="px-6 py-3 bg-red-9 hover:bg-red-10 text-white rounded-2 font-600 transition-all duration-200">
              Botón Peligro
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-32 font-700 leading-40 mb-8 text-center">
            Ejemplos de Tarjetas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Light */}
            <div className="bg-gray-1 border border-gray-6 rounded-3 p-6 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="w-12 h-12 bg-blue-9 rounded-2 flex items-center justify-center mb-4">
                <span className="text-white font-600">01</span>
              </div>
              <h3 className="text-20 font-600 leading-24 mb-2 text-gray-12">
                Sistema de Espaciado
              </h3>
              <Paragraph>
                Utiliza nuestro sistema de espaciado consistente con valores
                desde 8px hasta 88px.
              </Paragraph>
              <Paragraph>
                El cual te permite mejorar tu layout.
              </Paragraph>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-3 text-blue-11 rounded-1 text-12 font-500">
                  spacing-1
                </span>
                <span className="px-3 py-1 bg-blue-3 text-blue-11 rounded-1 text-12 font-500">
                  spacing-8
                </span>
              </div>
            </div>

            {/* Card 2 - Accent */}
            <div className="bg-amber-1 border border-amber-6 rounded-3 p-6 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="w-12 h-12 bg-amber-9 rounded-2 flex items-center justify-center mb-4">
                <span className="text-black font-600">02</span>
              </div>
              <h3 className="text-20 font-600 leading-24 mb-2 text-amber-12">
                Tipografía
              </h3>
              <p className="text-16 leading-24 text-amber-11 mb-4">
                Sistema tipográfico escalable con fuentes personalizadas y pesos
                específicos.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-amber-3 text-amber-11 rounded-1 text-12 font-500">
                  font-body
                </span>
                <span className="px-3 py-1 bg-amber-3 text-amber-11 rounded-1 text-12 font-500">
                  font-mono
                </span>
              </div>
            </div>

            {/* Card 3 - Success */}
            <div className="bg-green-1 border border-green-6 rounded-3 p-6 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="w-12 h-12 bg-green-9 rounded-2 flex items-center justify-center mb-4">
                <span className="text-white font-600">03</span>
              </div>
              <h3 className="text-20 font-600 leading-24 mb-2 text-green-12">
                Colores Semánticos
              </h3>
              <p className="text-16 leading-24 text-green-11 mb-4">
                Paleta de colores completa con soporte para tema claro y oscuro
                automático.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-3 text-green-11 rounded-1 text-12 font-500">
                  12 escalas
                </span>
                <span className="px-3 py-1 bg-green-3 text-green-11 rounded-1 text-12 font-500">
                  auto dark
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="py-12 px-6 bg-gray-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-32 font-700 leading-40 mb-8">
            Escalas Tipográficas
          </h2>

          <div className="space-y-4">
            <div className="text-48 font-800 leading-56">Heading 1 - 48px</div>
            <div className="text-40 font-700 leading-48">Heading 2 - 40px</div>
            <div className="text-32 font-600 leading-40">Heading 3 - 32px</div>
            <div className="text-24 font-600 leading-32">Heading 4 - 24px</div>
            <div className="text-20 font-500 leading-24">Heading 5 - 20px</div>
            <div className="text-16 font-400 leading-24">Body Text - 16px</div>
            <div className="text-14 font-400 leading-20 text-gray-11">
              Small Text - 14px
            </div>
            <div className="text-12 font-400 leading-16 text-gray-10">
              Caption - 12px
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-1 rounded-3 border border-gray-6">
            <h3 className="text-20 font-600 mb-4">Fuente Monoespaciada</h3>
            <code className="font-mono text-16 leading-24 text-gray-12 block">
              const theme = &#123;
              <br />
              &nbsp;&nbsp;colors: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;primary: 'var(--color-blue-9)',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;background: 'var(--color-bg)'
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;;
            </code>
          </div>
        </div>
      </section>

      {/* Spacing Examples */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-32 font-700 leading-40 mb-8">
            Sistema de Espaciado
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-20 font-600 mb-4">Espaciado Interno</h3>
              <div className="space-y-2">
                <div className="bg-blue-3 p-1 rounded-1">
                  <div className="bg-blue-9 text-white text-center py-1 rounded-1 text-12">
                    p-1 (8px)
                  </div>
                </div>
                <div className="bg-blue-3 p-2 rounded-1">
                  <div className="bg-blue-9 text-white text-center py-1 rounded-1 text-12">
                    p-2 (16px)
                  </div>
                </div>
                <div className="bg-blue-3 p-4 rounded-1">
                  <div className="bg-blue-9 text-white text-center py-1 rounded-1 text-12">
                    p-4 (32px)
                  </div>
                </div>
                <div className="bg-blue-3 p-6 rounded-1">
                  <div className="bg-blue-9 text-white text-center py-1 rounded-1 text-12">
                    p-6 (48px)
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-20 font-600 mb-4">Bordes Redondeados</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-3 p-4 rounded-1 text-center text-12 font-500">
                  rounded-1 (4px)
                </div>
                <div className="bg-gray-3 p-4 rounded-2 text-center text-12 font-500">
                  rounded-2 (8px)
                </div>
                <div className="bg-gray-3 p-4 rounded-3 text-center text-12 font-500">
                  rounded-3 (16px)
                </div>
                <div className="bg-gray-3 p-4 rounded-round text-center text-12 font-500">
                  rounded-round
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-12 px-6 bg-gray-1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-32 font-700 leading-40 mb-8">
            Paleta de Colores
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gray Scale */}
            <div>
              <h3 className="text-16 font-600 mb-4">Escala de Grises</h3>
              <div className="space-y-2">
                {[1, 3, 6, 9, 12].map((scale) => (
                  <div
                    key={scale}
                    className={`h-12 rounded-1 flex items-center px-3 bg-gray-${scale}`}
                  >
                    <span
                      className={`text-12 font-mono ${
                        scale > 6 ? "text-white" : "text-gray-12"
                      }`}
                    >
                      gray-{scale}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blue Scale */}
            <div>
              <h3 className="text-16 font-600 mb-4">Azul</h3>
              <div className="space-y-2">
                {[1, 3, 6, 9, 12].map((scale) => (
                  <div
                    key={scale}
                    className={`h-12 rounded-1 flex items-center px-3 bg-blue-${scale}`}
                  >
                    <span
                      className={`text-12 font-mono ${
                        scale > 6 ? "text-white" : "text-blue-12"
                      }`}
                    >
                      blue-{scale}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Green Scale */}
            <div>
              <h3 className="text-16 font-600 mb-4">Verde</h3>
              <div className="space-y-2">
                {[1, 3, 6, 9, 12].map((scale) => (
                  <div
                    key={scale}
                    className={`h-12 rounded-1 flex items-center px-3 bg-green-${scale}`}
                  >
                    <span
                      className={`text-12 font-mono ${
                        scale > 6 ? "text-white" : "text-green-12"
                      }`}
                    >
                      green-{scale}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amber Scale */}
            <div>
              <h3 className="text-16 font-600 mb-4">Ámbar</h3>
              <div className="space-y-2">
                {[1, 3, 6, 9, 12].map((scale) => (
                  <div
                    key={scale}
                    className={`h-12 rounded-1 flex items-center px-3 bg-amber-${scale}`}
                  >
                    <span
                      className={`text-12 font-mono ${
                        scale > 6 ? "text-black" : "text-amber-12"
                      }`}
                    >
                      amber-{scale}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExampleComponent;
