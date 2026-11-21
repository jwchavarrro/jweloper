/**
 * @file i18n-request.ts
 * @description Carga los mensajes del locale solicitado (next-intl).
 */

// Import of utilities
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

// Import of i18n
import { routing } from "./i18n-routing";

/**
 * @name getRequestConfig
 * @description Resuelve el locale (con fallback al por defecto) y sus mensajes.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
