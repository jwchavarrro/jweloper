/**
 * @file app-sidebar.tsx
 * @description Componente para la barra lateral de navegación.
 */

"use client"

import Link from "next/link";
import {
  EqualNot,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



// Import of fragments
import { NavChats, NavMain, NavSecondary, NavUser } from "../fragments";

// Import of types
import type { SidebarData } from "../utils/types";

interface AppSidebarProps {
  data: SidebarData;
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
        <NavChats chats={data.chats} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
