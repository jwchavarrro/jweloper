/**
 * @file layout.tsx
 * @description Layout con locale: valida el locale, provee los mensajes y define <html lang>.
 */

import "@/app/globals.css";

// Import of i18n
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MotionConfig } from "motion/react";

// Import of components custom
import { Sidebar } from "@/components/atomic-design/organism/navigate";

// Import of utilities
import { MULTIMEDIA } from "@/config";
import { SIDEBAR_DATA } from "@/components/atomic-design/organism/navigate/sidebar/utils";
import { routing } from "@/app/[locale]/i18n-routing";
import { ThemeProvider } from "./fragments/theme-provider";

// Import of custom hooks
import { ReduxProvider } from "@/store/provider";

// Import of types
import type { Metadata } from "next";

type LocaleParams = { params: Promise<{ locale: string }> };

// Generar metadata localizada
export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: MULTIMEDIA.FAVICONS.FAVICON,
      shortcut: MULTIMEDIA.FAVICONS.FAVICON,
      apple: MULTIMEDIA.FAVICONS.APPLE_TOUCH_ICON,
    },
  };
}

// Generar parámetros estáticos para los locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LocaleParams) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Habilitar renderizado estático
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider>
            <ReduxProvider>
              {/* Respeta "reducir movimiento" del sistema en todas las animaciones */}
              <MotionConfig reducedMotion="user">
                <Sidebar data={SIDEBAR_DATA}>{children}</Sidebar>
              </MotionConfig>
            </ReduxProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
