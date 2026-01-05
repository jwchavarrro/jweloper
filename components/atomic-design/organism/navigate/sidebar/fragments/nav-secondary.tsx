/**
 * @file nav-secondary.tsx
 * @description Componente para la navegación secundaria en la barra lateral.
 */

"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Import of utilities
import { EnumLocale, type Locale } from "@/app/[locale]/i18n-types";
import {
  extractLocaleFromPath,
  getOtherLocale,
  replaceLocaleInPath,
} from "@/app/[locale]/i18n-utils";

export function NavSecondary({
  ...props
}: Readonly<React.ComponentPropsWithoutRef<typeof SidebarGroup>>) {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * @name handleLanguageChange
   * @description Maneja el cambio de idioma
   */
  const handleLanguageChange = () => {
    const currentLocale = extractLocaleFromPath(pathname);

    if (!currentLocale) {
      // Si no hay locale en la ruta, redirigir a la ruta por defecto con el locale alternativo
      const newLocale: Locale = EnumLocale.EN; // Por defecto, cambiar a inglés
      router.push(`/${newLocale}${pathname}`);
      return;
    }

    // Obtener el locale alternativo
    const newLocale = getOtherLocale(currentLocale);

    // Reemplazar el locale en la ruta actual
    const newPath = replaceLocaleInPath(pathname, newLocale);

    // Redirigir a la nueva ruta
    router.push(newPath);
  };

  // Obtener el locale actual para mostrar el idioma actual
  const currentLocale = extractLocaleFromPath(pathname) || EnumLocale.ES;
  const localeLabel = currentLocale === EnumLocale.ES ? "Español" : "English";

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="sm" onClick={handleLanguageChange}>
              <Languages />
              <span>{localeLabel}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
