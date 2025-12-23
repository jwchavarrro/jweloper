/**
 * @file layout.ts
 * @description Layout principal de la aplicación.
 */

// Import of components custom
import { Sidebar } from "@/components/atomic-design/organism/navigate";

// Import of utilities
import "./globals.css";
import { SIDEBAR_DATA } from "@/components/atomic-design/organism/navigate/sidebar/utils";

// Import of custom hooks
import { ReduxProvider } from "@/store/provider";

// Import of types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio - Jweloper",
  description: "Portafolio de Jweloper, desarrollador frontend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ReduxProvider>
          <Sidebar data={SIDEBAR_DATA}>{children}</Sidebar>
        </ReduxProvider>
      </body>
    </html>
  );
}
