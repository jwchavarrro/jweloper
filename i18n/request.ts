/**
 * @file request.ts
 * @description Configuración de next-intl para el manejo de internacionalización
 */

import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Locales soportados
export const locales = ["es", "en"] as const;

// Locale por defecto
export const defaultLocale = "es" as const;

// Tipo para los locales
export type Locale = (typeof locales)[number];

/**
 * @name getRequestConfig
 * @description Configuración de next-intl para cargar los mensajes según el locale
 */
export default getRequestConfig(async ({ locale }) => {
  // Validar que el locale sea soportado
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
