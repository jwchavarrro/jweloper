/**
 * @file nav-secondary.tsx
 * @description Componente para la navegación secundaria en la barra lateral.
 */

"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Languages } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Import of custom hooks
import { useLocaleSwitch } from "@/hooks";

export function NavSecondary({
  ...props
}: Readonly<React.ComponentPropsWithoutRef<typeof SidebarGroup>>) {
  const t = useTranslations("common");
  const { nextLocale, switchLocale } = useLocaleSwitch();

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="sm" onClick={switchLocale}>
              <Languages />
              <span>{t(`locales.${nextLocale}`)}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
