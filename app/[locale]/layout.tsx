/**
 * @file layout.tsx
 * @description Layout con locale para la aplicación internacionalizada.
 * Basado en la documentación oficial: https://nextjs.org/docs/app/guides/internationalization
 */

import { notFound } from "next/navigation";

// Import of components custom
import { Sidebar } from "@/components/atomic-design/organism/navigate";

// Import of utilities
import { SIDEBAR_DATA } from "@/components/atomic-design/organism/navigate/sidebar/utils";

// Import of custom hooks
import { ReduxProvider } from "@/store/provider";

// Import of types
import type { Metadata } from "next";

// Import of i18n
import { getDictionary, hasLocale } from "./i18n-dictionaries";
import { locales } from "./i18n-utils";

// Generar metadata dinámicamente
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params; // Esperar params aunque no se use el locale en metadata por ahora
  return {
    title: "Portafolio - Jweloper",
    description: "Portafolio de Jweloper, desarrollador frontend.",
  };
}

// Generar parámetros estáticos para los locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale as string }));
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

  // Cargar diccionario para el locale actual
  // Por ahora no lo usamos, pero está disponible para las páginas
  await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="antialiased">
        <ReduxProvider>
          <Sidebar data={SIDEBAR_DATA}>{children}</Sidebar>
        </ReduxProvider>
      </body>
    </html>
  );
}
