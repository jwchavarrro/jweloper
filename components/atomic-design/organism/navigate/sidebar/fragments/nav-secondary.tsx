/**
 * @file nav-secondary.tsx
 * @description Componente para la navegación secundaria en la barra lateral.
 */

"use client";

import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Import of utilities
import { getSidebarIcon } from "../utils";

// Import of types
import type { NavSecondaryItemType } from "../utils/types";

interface NavSecondaryProps {
  readonly items: NavSecondaryItemType[];
}

export function NavSecondary({
  items,
  ...props
}: NavSecondaryProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const Icon = getSidebarIcon(item.icon);
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => {
                    if (item.action === "change-language") {
                      console.log("Cambiar idioma");
                      // Aquí puedes agregar la lógica para cambiar el idioma
                    }
                  }}
                >
                  <Icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
