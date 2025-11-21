/**
 * @file nav-secondary.tsx
 * @description Componente para la navegación secundaria en la barra lateral.
 */

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
                <SidebarMenuButton asChild size="sm">
                  <a href={item.url}>
                    <Icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
