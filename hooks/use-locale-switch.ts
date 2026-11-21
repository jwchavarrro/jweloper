/**
 * @file use-locale-switch.ts
 * @description Hook para cambiar al siguiente idioma soportado conservando la ruta actual.
 */

"use client";

import { useLocale } from "next-intl";

// Import of i18n
import { usePathname, useRouter } from "@/app/[locale]/i18n-navigation";
import { routing } from "@/app/[locale]/i18n-routing";

/**
 * @name useLocaleSwitch
 * @description Devuelve el idioma destino y la acción para cambiar a él.
 * @returns {{ nextLocale: Locale; switchLocale: () => void }}
 */
export const useLocaleSwitch = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const { locales } = routing;
  const nextLocale = locales[(locales.indexOf(locale) + 1) % locales.length];

  const switchLocale = () => router.replace(pathname, { locale: nextLocale });

  return { nextLocale, switchLocale };
};
