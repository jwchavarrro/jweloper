/**
 * @file i18n-routing.ts
 * @description Fuente única de los locales soportados (next-intl).
 */

// Import of utilities
import { defineRouting } from "next-intl/routing";

/**
 * @name routing
 * @description Configuración de locales y locale por defecto.
 */
export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
});

// Tipo para los locales
export type Locale = (typeof routing.locales)[number];
