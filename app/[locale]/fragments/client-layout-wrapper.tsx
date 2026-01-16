/**
 * @file client-layout-wrapper.tsx
 * @description Componente cliente wrapper para el layout que contiene Sidebar y ReduxProvider.
 * Este componente es necesario porque el layout principal debe ser un Server Component
 * para poder usar generateStaticParams y generateMetadata.
 */

"use client";

// Import of components custom
import { Sidebar } from "@/components/atomic-design/organism/navigate";

// Import of custom hooks
import { ReduxProvider } from "@/store/provider";

// Import of types
import type { SidebarDataType } from "@/components/atomic-design/organism/navigate/sidebar/utils";

interface ClientLayoutWrapperProps {
  readonly children: React.ReactNode;
  readonly sidebarData: SidebarDataType;
}

export function ClientLayoutWrapper({
  children,
  sidebarData,
}: ClientLayoutWrapperProps) {
  return (
    <ReduxProvider>
      <Sidebar data={sidebarData}>{children}</Sidebar>
    </ReduxProvider>
  );
}
