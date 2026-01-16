/**
 * @file layout.tsx
 * @description Layout con locale para la aplicación internacionalizada.
 */

import { notFound } from "next/navigation";

// Import of components custom
import { ClientLayoutWrapper } from "./fragments/client-layout-wrapper";

// Import of utilities
import { MULTIMEDIA } from "@/config";
import { SIDEBAR_DATA } from "@/components/atomic-design/organism/navigate/sidebar/utils";
import { hasLocale } from "./locales/utils/functions";

// Import of types
import type { Metadata } from "next";

// Generar metadata dinámicamente
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale
    ? `Portafolio - Jweloper (${locale})`
    : "Portafolio - Jweloper";
  return {
    title,
    description: "Portafolio de Jweloper, desarrollador frontend.",
    icons: {
      icon: MULTIMEDIA.FAVICONS.FAVICON,
      shortcut: MULTIMEDIA.FAVICONS.FAVICON,
      apple: MULTIMEDIA.FAVICONS.APPLE_TOUCH_ICON,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validar que el locale sea soportado
  if (!hasLocale(locale)) {
    notFound();
  }

  return (
    <ClientLayoutWrapper sidebarData={SIDEBAR_DATA}>
      {children}
    </ClientLayoutWrapper>
  );
}
