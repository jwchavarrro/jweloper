/**
 * @file nav-secondary.tsx
 * @description Componente para la navegación secundaria en la barra lateral.
 */

"use client";

import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

export function NavSecondary({
  ...props
}: Readonly<React.ComponentPropsWithoutRef<typeof SidebarGroup>>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        {/* Nav secondary content removed - no i18n */}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
