/**
 * @file middleware.ts
 * @description Middleware para manejo de internacionalización nativo
 */

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Import of types
import { EnumLocale } from "./app/[locale]/locales/utils/types";

// Locales soportados (valores del EnumLocale)
const locales = Object.values(EnumLocale);

// Locale por defecto
const defaultLocale = EnumLocale.ES;

/**
 * @name getLocale
 * @description Obtiene el locale preferido del usuario basado en el header Accept-Language
 * @param {NextRequest} request - Request object de Next.js
 * @returns {string} - Locale preferido
 */
function getLocale(request: NextRequest): string {
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
 * @name middleware
 * @description Middleware function para Next.js 16 - maneja redirecciones de locale
 * @param {NextRequest} request - Request object de Next.js
 * @returns {NextResponse|undefined} - Response con redirección o undefined si ya tiene locale
 */
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Excluir archivos estáticos (imágenes, PDFs, CSS, etc.)
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
    ".css",
    ".js",
    ".json",
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
    String.raw`/((?!_next|.*\..*|api).*)`,
  ],
};
