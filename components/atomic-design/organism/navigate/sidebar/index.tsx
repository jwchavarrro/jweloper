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
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

// Import of components custom
import { AppSidebar } from "./fragments";
import { Text } from "@/components/atomic-design/atoms";
import { Breadcrumb } from "@/components/atomic-design/organism/navigate";

// Import of types
import type { SidebarDataType } from "./utils/types";

// Import of hooks
import { useAppSelector, useAppDispatch } from "@/store/hooks";

// Import of contexts
import { setVersion, type VersionType } from "@/store/slices/versionSlice";

interface SidebarProps {
  children: React.ReactNode;
  data: SidebarDataType;
}
export const Sidebar: React.FC<SidebarProps> = ({ children, data }) => {
  // Implemetation of contexts
  const selectedVersion = useAppSelector(
    (state) => state.version.selectedVersion
  );
  const dispatch = useAppDispatch();

  /**
   * @name handleVersionChange
   * @description Manejador para cambiar la versión.
   * @param {boolean} checked - Indica si la versión es v2.
   */
  const handleVersionChange = (checked: boolean) => {
    const newVersion: VersionType = checked ? "v2" : "v1";
    dispatch(setVersion(newVersion));
  };

  /**
   * @name oppositeVersion
   * @description Versión opuesta para mostrar en el texto.
   * @type {VersionType}
   */
  const oppositeVersion: VersionType = selectedVersion === "v1" ? "v2" : "v1";

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
            <div className="flex items-center gap-2">
              <Text variant="small">{oppositeVersion}</Text>
              <Switch
                id="version-switch"
                checked={selectedVersion === "v2"}
                onCheckedChange={handleVersionChange}
              />
            </div>
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
