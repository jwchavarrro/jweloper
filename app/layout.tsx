/**
 * @file layout.tsx
 * @description Layout raíz mínimo requerido por Next.js 16 para cargar estilos globales
 * La estructura HTML completa está en app/[locale]/layout.tsx
 */

import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Este layout solo importa los estilos globales
  // La estructura HTML completa está en app/[locale]/layout.tsx
  return children;
}






