/**
 * @file layout.tsx
 * @description Layout raíz requerido por Next.js 16
 */

import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
