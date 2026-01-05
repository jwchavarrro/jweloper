/**
 * @file i18n-utils.ts
 * @description Utilidades para manejo de i18n (compatible con cliente y servidor)
 */

import { EnumLocale } from "./i18n-types";

// Import of types
import type { Locale } from "./i18n-types";

// Locales soportados basados en el enum
export const locales = [EnumLocale.ES, EnumLocale.EN] as const;

// Locale por defecto
export const defaultLocale = EnumLocale.ES;

/**
 * @name getPathSegments
 * @description Divide un pathname en segmentos, filtrando valores vacíos
 * @param {string} pathname - Ruta completa
 * @returns {string[]} - Array de segmentos
 */
function getPathSegments(pathname: string): string[] {
  return pathname.split("/").filter(Boolean);
}

/**
 * @name getOtherLocale
 * @description Obtiene el locale alternativo (es <-> en)
 * @param {Locale} currentLocale - Locale actual
 * @returns {Locale} - Locale alternativo
 */
export function getOtherLocale(currentLocale: Locale): Locale {
  return currentLocale === EnumLocale.ES ? EnumLocale.EN : EnumLocale.ES;
}

/**
 * @name extractLocaleFromPath
 * @description Extrae el locale de una ruta
 * @param {string} pathname - Ruta completa (ej: "/es/app-web")
 * @returns {Locale | null} - Locale extraído o null si no se encuentra
 */
export function extractLocaleFromPath(pathname: string): Locale | null {
  const segments = getPathSegments(pathname);
  const firstSegment = segments[0];

  if (
    firstSegment &&
    Object.values(EnumLocale).includes(firstSegment as Locale)
  ) {
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
  const segments = getPathSegments(pathname);
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

/**
 * @name generateBreadcrumbsWithLocale
 * @description Genera items de breadcrumb filtrando el locale pero manteniéndolo en los hrefs
 * @param {string} pathname - Ruta completa (ej: "/es/app-web")
 * @param {string[]} excludeRoutes - Rutas a excluir
 * @param {string[]} disabledRoutes - Rutas a deshabilitar
 * @returns {Array<{label: string; href: string; disabled?: boolean}>} - Items del breadcrumb
 */
export function generateBreadcrumbsWithLocale(
  pathname: string,
  excludeRoutes?: string[],
  disabledRoutes?: string[]
): Array<{ label: string; href: string; disabled?: boolean }> {
  const locale = extractLocaleFromPath(pathname);
  const segments = getPathSegments(pathname);

  // Filtrar el locale de los segmentos para no mostrarlo en el breadcrumb
  const filteredSegments = locale
    ? segments.filter((segment) => segment !== locale)
    : segments;

  const breadcrumbs: Array<{
    label: string;
    href: string;
    disabled?: boolean;
  }> = [];

  // Construir el path base con locale si existe
  const basePath = locale ? `/${locale}` : "";

  // Agregar "Inicio" como primer item
  const homePath = basePath || "/";
  if (pathname !== homePath && pathname !== "/") {
    const isExcluded =
      excludeRoutes?.includes("/") || excludeRoutes?.includes(homePath);
    const isDisabled =
      disabledRoutes?.includes("/") || disabledRoutes?.includes(homePath);

    if (!isExcluded) {
      breadcrumbs.push({
        label: "Inicio",
        href: homePath,
        disabled: isDisabled,
      });
    }
  }

  // Generar breadcrumbs para cada segmento (sin el locale)
  let currentPath = basePath;
  for (const segment of filteredSegments) {
    currentPath += `/${segment}`;
    const isExcluded = excludeRoutes?.includes(currentPath);
    const isDisabled = disabledRoutes?.includes(currentPath);

    if (!isExcluded) {
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      breadcrumbs.push({
        label,
        href: currentPath,
        disabled: isDisabled,
      });
    }
  }

  return breadcrumbs;
}
