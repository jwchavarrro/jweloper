/**
 * @file index.ts
 * @description Componente principal para la barra lateral de navegación.
 */

"use client";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

// Import of components custom
import { AppSidebar } from "./fragments";
import { Breadcrumb } from "@/components/atomic-design/organism/navigate";

// Import of types
import type { SidebarDataType } from "./utils/types";

interface SidebarProps {
  children: React.ReactNode;
  data: SidebarDataType;
}
export const Sidebar: React.FC<SidebarProps> = ({ children, data }) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar data={data} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
