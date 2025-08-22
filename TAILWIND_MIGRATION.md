# Migración a Tailwind CSS 4 - Sistema de Temas Personalizado

Este proyecto ha sido migrado de **Stitches** a **Tailwind CSS 4** con un sistema completo de temas personalizados y detección automática del tema del sistema.

## 🎨 Características Principales

### ✅ Detección Automática de Tema
- **Sin botones**: El tema cambia automáticamente según la configuración del sistema operativo
- **Transiciones suaves**: Cambios fluidos entre modo claro y oscuro
- **Persistencia**: Respeta las preferencias del usuario del sistema en tiempo real

### ✅ Sistema de Diseño Completo
- **Colores**: Paleta completa con 12 escalas para cada color
- **Tipografía**: Sistema escalable con fuentes personalizadas
- **Espaciado**: Escala consistente desde 8px hasta 88px
- **Bordes**: Radios personalizados y sombras
- **Variables CSS**: Todas las propiedades como variables nativas

## 🚀 Configuración Migrada de Stitches

### Antes (stitches.config.ts)
```typescript
export const { styled, css } = createStitches({
  theme: {
    colors: {
      gray1: 'hsl(0 0% 99.0%)',
      blue9: 'hsl(206 100% 50.0%)',
    },
    space: {
      1: '8px',
      2: '16px',
    }
  }
});
```

### Después (Tailwind CSS 4)
```css
@theme {
  --color-gray-1: hsl(0 0% 99.0%);
  --color-blue-9: hsl(206 100% 50.0%);
  --spacing-1: 0.5rem;    /* 8px */
  --spacing-2: 1rem;      /* 16px */
}

/* Detección automática del tema */
@media (prefers-color-scheme: dark) {
  :root {
    --color-gray-1: hsl(0 0% 8.5%);
    --color-blue-9: hsl(206 100% 50.0%);
  }
}
```

## 📋 Variables de Tema Disponibles

### 🎨 Colores
```css
/* Escalas de colores (1-12) */
--color-gray-[1-12]    /* Grises neutrales */
--color-blue-[1-12]    /* Azul primario */
--color-green-[1-12]   /* Verde/éxito */
--color-red-[1-12]     /* Rojo/error */
--color-amber-[1-12]   /* Ámbar/advertencia */
--color-teal-[1-12]    /* Verde azulado */

/* Colores semánticos */
--color-bg             /* Fondo principal */
--color-high-contrast  /* Texto principal */
--color-low-contrast   /* Fondo alternativo */
--color-focus          /* Color de enfoque */
--color-grid           /* Líneas de grid */
```

### 📝 Tipografía
```css
/* Familias de fuentes */
--font-family-body     /* Fuente principal */
--font-family-mono     /* Fuente monoespaciada */
--font-family-serif    /* Fuente serif */

/* Tamaños (10, 12, 14, 16, 20, 24, 32, 40, 48) */
--font-size-[tamaño]

/* Pesos (400, 500, 600, 700, 800) */
--font-weight-[peso]

/* Alturas de línea (12, 16, 20, 24, 32, 40, 48, 56) */
--line-height-[altura]
```

### 📏 Espaciado
```css
/* Espaciado (1-11) */
--spacing-1: 0.5rem;   /* 8px */
--spacing-2: 1rem;     /* 16px */
--spacing-3: 1.5rem;   /* 24px */
--spacing-4: 2rem;     /* 32px */
--spacing-5: 2.5rem;   /* 40px */
--spacing-6: 3rem;     /* 48px */
--spacing-7: 3.5rem;   /* 56px */
--spacing-8: 4rem;     /* 64px */
--spacing-9: 4.5rem;   /* 72px */
--spacing-10: 5rem;    /* 80px */
--spacing-11: 5.5rem;  /* 88px */
```

### 🎭 Efectos
```css
/* Radios de borde */
--radius-1: 0.25rem;   /* 4px */
--radius-2: 0.5rem;    /* 8px */
--radius-3: 1rem;      /* 16px */
--radius-round: 9999px;

/* Sombras */
--shadow-small
--shadow-medium
--shadow-large
--shadow-tooltip

/* Transiciones */
--ease-snappy: cubic-bezier(0.2, 0.8, 0.2, 1);
```

## 💻 Ejemplos de Uso

### Componentes con el Nuevo Sistema
```tsx
// Antes con Stitches
const Button = styled('button', {
  backgroundColor: '$blue9',
  color: 'white',
  padding: '$2 $4',
  borderRadius: '$2',
});

// Después con Tailwind CSS 4
<button className="bg-blue-9 text-white p-2 px-4 rounded-2 hover:bg-blue-10 transition-colors">
  Botón
</button>
```

### Usando Variables CSS Directamente
```tsx
<div 
  className="min-h-screen" 
  style={{ 
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-high-contrast)' 
  }}
>
  Contenido adaptativo
</div>
```

### Hook para Detectar Tema (Opcional)
```tsx
import { useSystemTheme } from '@/hooks/useSystemTheme';

export default function Component() {
  const { theme, isLight, isDark } = useSystemTheme();
  
  return (
    <div className={`p-6 ${isDark ? 'bg-gray-12' : 'bg-gray-1'}`}>
      <p>Tema actual: {theme}</p>
    </div>
  );
}
```

## 🔧 Clases de Utilidad Generadas

El sistema automáticamente genera clases para todos los valores:

```css
/* Colores */
.bg-gray-1, .bg-gray-2, ..., .bg-gray-12
.text-blue-1, .text-blue-2, ..., .text-blue-12
.border-green-9, .ring-amber-6

/* Espaciado */
.p-1, .p-2, ..., .p-11
.m-1, .m-2, ..., .m-11
.gap-3, .space-x-4

/* Tipografía */
.text-10, .text-12, ..., .text-48
.font-400, .font-500, ..., .font-800
.leading-16, .leading-20, ..., .leading-56

/* Bordes */
.rounded-1, .rounded-2, .rounded-3, .rounded-round

/* Sombras */
.shadow-small, .shadow-medium, .shadow-large, .shadow-tooltip
```

## 🌐 Demo y Pruebas

### Páginas de Demostración
- **`/tailwind-demo`** - Showcase completo del sistema de diseño
- **`/theme-demo`** - Demostración de la detección automática de tema

### Cómo Probar la Detección Automática
1. Abre cualquier página del proyecto
2. Ve a la configuración de tu sistema operativo
3. Cambia entre modo claro y oscuro
4. ¡Observa cómo la página cambia automáticamente!

## 🔄 Migración Gradual

Puedes migrar gradualmente desde Stitches:

1. **Mantén ambos sistemas** durante la transición
2. **Migra componente por componente** a las nuevas clases de Tailwind
3. **Usa las variables CSS** para casos específicos
4. **Elimina Stitches** cuando hayas completado la migración

## ⚡ Ventajas del Nuevo Sistema

### Rendimiento
- **Menos JavaScript**: Variables CSS nativas vs runtime de Stitches
- **Mejor tree-shaking**: Solo se incluyen las clases que usas
- **Caché mejor**: CSS estático vs styles dinámicos

### Desarrollador
- **No más JS config**: Todo en CSS nativo
- **Mejor IntelliSense**: Autocompletado mejorado
- **Compatibilidad**: Funciona con cualquier framework

### Usuario
- **Detección automática**: Sin necesidad de configurar manualmente
- **Transiciones suaves**: Cambios fluidos entre temas
- **Consistencia**: Respeta las preferencias del sistema

## 🚀 Próximos Pasos

1. **Explora las demos** para ver todas las características
2. **Migra componentes existentes** usando las nuevas clases
3. **Personaliza variables** según tu marca
4. **Añade más colores** o escalas si los necesitas

---

¡Tu sistema de diseño está ahora más robusto, performante y fácil de mantener con Tailwind CSS 4! 🎉
