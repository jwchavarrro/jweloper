/**
 * @file nav-secondary.tsx
 * @description Componente para la navegación secundaria en la barra lateral.
 */

"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Import of utilities
import { usePathname, useRouter } from "@/app/[locale]/i18n-navigation";
import { routing } from "@/app/[locale]/i18n-routing";

export function NavSecondary({
  ...props
}: Readonly<React.ComponentPropsWithoutRef<typeof SidebarGroup>>) {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  /**
   * @name handleLanguageChange
   * @description Cambia al siguiente locale soportado conservando la ruta actual.
   */
  const handleLanguageChange = () => {
    const { locales } = routing;
    const nextLocale = locales[(locales.indexOf(locale) + 1) % locales.length];
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="sm" onClick={handleLanguageChange}>
              <Languages />
              <span>{t(`locales.${locale}`)}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
