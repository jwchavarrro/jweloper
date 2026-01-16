/**
 * @file layout.tsx
 * @description Layout raíz de la aplicación
 */

import "@/app/globals.css";

// Import of components custom
import { ClientLayoutWrapper } from "./fragments/client-layout-wrapper";

// Import of utilities
import { MULTIMEDIA } from "@/config";
import { SIDEBAR_DATA } from "@/components/atomic-design/organism/navigate/sidebar/utils";

// Import of types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio - Jweloper",
  description: "Portafolio de Jweloper, desarrollador frontend.",
  icons: {
    icon: MULTIMEDIA.FAVICONS.FAVICON,
    shortcut: MULTIMEDIA.FAVICONS.FAVICON,
    apple: MULTIMEDIA.FAVICONS.APPLE_TOUCH_ICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ClientLayoutWrapper sidebarData={SIDEBAR_DATA}>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
