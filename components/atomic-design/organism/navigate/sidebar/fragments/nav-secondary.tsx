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
import {
  extractLocaleFromPath,
  getOtherLocale,
  replaceLocaleInPath,
  type Locale,
} from "@/app/[locale]/locale-utils";

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
      const newLocale: Locale = "en"; // Por defecto, cambiar a inglés
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
  const currentLocale = extractLocaleFromPath(pathname) || "es";
  const localeLabel = currentLocale === "es" ? "Español" : "English";

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
