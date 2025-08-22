import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

/**
 * Hook personalizado para manejo automático de temas con detección del sistema
 * Detecta automáticamente el tema del sistema operativo sin botones manuales
 */
export function useSystemTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Detectar el tema inicial del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    // Función para actualizar el tema cuando cambie
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    // Escuchar cambios en el tema del sistema
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // El tema efectivo siempre es el del sistema
  const effectiveTheme = systemTheme;

  return {
    theme: effectiveTheme,
    systemTheme,
    isLight: effectiveTheme === 'light',
    isDark: effectiveTheme === 'dark',
  };
}

/**
 * Hook alternativo si quieres permitir override manual pero con fallback al sistema
 * (Opcional, no lo usaremos por defecto ya que pediste solo detección automática)
 */
export function useThemeWithOverride() {
  const [manualTheme, setManualTheme] = useState<Theme | null>(null);
  const { systemTheme } = useSystemTheme();

  useEffect(() => {
    // Cargar preferencia manual guardada (si existe)
    const saved = localStorage.getItem('theme-preference');
    if (saved === 'light' || saved === 'dark') {
      setManualTheme(saved);
    }
  }, []);

  const effectiveTheme = manualTheme || systemTheme;

  const setTheme = (newTheme: Theme) => {
    if (newTheme === 'system') {
      setManualTheme(null);
      localStorage.removeItem('theme-preference');
    } else {
      setManualTheme(newTheme);
      localStorage.setItem('theme-preference', newTheme);
    }
  };

  return {
    theme: effectiveTheme,
    systemTheme,
    manualTheme,
    isLight: effectiveTheme === 'light',
    isDark: effectiveTheme === 'dark',
    setTheme,
  };
}
