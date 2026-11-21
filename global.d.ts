/**
 * @file global.d.ts
 * @description Tipado de next-intl: locales y claves de mensajes (basadas en messages/es.json).
 */

// Import of types
import type { routing } from "@/app/[locale]/i18n-routing";
import type messages from "./messages/es.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
