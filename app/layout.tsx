/**
 * @file layout.tsx
 * @description Layout raíz requerido por Next.js 16. El <html> vive en app/[locale]/layout.tsx
 * para que `lang` siga al locale activo.
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
