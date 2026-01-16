/**
 * @file proxy.js
 * @description Proxy para manejo de internacionalización nativo en Next.js 16
 * Basado en la documentación oficial: https://nextjs.org/docs/app/guides/internationalization
 */

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import { EnumLocale } from "./app/[locale]/locales/utils/types";

// Locales soportados (valores del EnumLocale)
const locales = Object.values(EnumLocale);

// Locale por defecto
const defaultLocale = EnumLocale.ES;

/**
 * @name getLocale
 * @description Obtiene el locale preferido del usuario basado en el header Accept-Language
 * @param {Request} request - Request object de Next.js
 * @returns {string} - Locale preferido
 */
function getLocale(request) {
  // Obtener el header Accept-Language
  const acceptLanguage = request.headers.get("accept-language") ?? undefined;

  // Crear headers para Negotiator
  const headers = { "accept-language": acceptLanguage };

  // Obtener idiomas del header
  const languages = new Negotiator({ headers }).languages();

  // Hacer match con los locales soportados
  return match(languages, locales, defaultLocale);
}

/**
 * @name proxy
 * @description Proxy function para Next.js 16 - maneja redirecciones de locale
 * @param {Request} request - Request object de Next.js
 * @returns {NextResponse|undefined} - Response con redirección o undefined si ya tiene locale
 */
export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Excluir archivos estáticos (imágenes, PDFs, etc.)
  const staticFileExtensions = [
    ".pdf",
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".svg",
    ".ico",
    ".webp",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
  ];
  const isStaticFile = staticFileExtensions.some((ext) =>
    pathname.toLowerCase().endsWith(ext)
  );

  if (isStaticFile) {
    return;
  }

  // Verificar si la ruta ya tiene un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si ya tiene locale, no hacer nada
  if (pathnameHasLocale) return;

  // Obtener el locale preferido
  const locale = getLocale(request);

  // Redirigir a la ruta con el locale
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // Ejemplo: /products -> /es/products o /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    "/((?!_next|.*\\..*|api).*)",
  ],
};
