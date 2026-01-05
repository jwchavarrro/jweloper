/**
 * @file locale-utils.ts
 * @description Utilidades para manejo de locales (compatible con cliente y servidor)
 */

// Locales soportados
export const locales = ["es", "en"] as const;

// Locale por defecto
export const defaultLocale = "es" as const;

// Tipo para los locales
export type Locale = (typeof locales)[number];

/**
 * @name getOtherLocale
 * @description Obtiene el locale alternativo (es <-> en)
 * @param {Locale} currentLocale - Locale actual
 * @returns {Locale} - Locale alternativo
 */
export function getOtherLocale(currentLocale: Locale): Locale {
  return currentLocale === "es" ? "en" : "es";
}

/**
 * @name extractLocaleFromPath
 * @description Extrae el locale de una ruta
 * @param {string} pathname - Ruta completa (ej: "/es/app-web")
 * @returns {Locale | null} - Locale extraído o null si no se encuentra
 */
export function extractLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return null;
}

/**
 * @name replaceLocaleInPath
 * @description Reemplaza el locale en una ruta
 * @param {string} pathname - Ruta actual (ej: "/es/app-web")
 * @param {Locale} newLocale - Nuevo locale
 * @returns {string} - Nueva ruta con el locale reemplazado
 */
export function replaceLocaleInPath(
  pathname: string,
  newLocale: Locale
): string {
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = extractLocaleFromPath(pathname);

  if (currentLocale) {
    // Reemplazar el primer segmento (locale) con el nuevo locale
    segments[0] = newLocale;
  } else {
    // Si no hay locale, agregarlo al inicio
    segments.unshift(newLocale);
  }

  return `/${segments.join("/")}`;
}

