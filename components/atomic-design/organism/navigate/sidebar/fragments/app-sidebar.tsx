/**
 * @file app-sidebar.tsx
 * @description Componente para la barra lateral de navegación.
 */

"use client";

import Link from "next/link";
import { EqualNot } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Import of fragments
import { NavChats, NavMain, NavSecondary } from "../fragments";

// Import of types
import type { SidebarDataType } from "../utils/types";

interface AppSidebarProps {
  data: SidebarDataType;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ data, ...props }) => {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="text-foreground flex items-center justify-center">
                  <EqualNot className="size-8" />
                  <span className="text-xl font-bold font-text uppercase tracking-wide">
                    Jweloper
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavChats chats={[]} />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
};
