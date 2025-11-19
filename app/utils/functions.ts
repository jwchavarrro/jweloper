/**
 * Archivo: functions.ts
 * Descripción: Este archivo contiene utilidades y funciones globales para la aplicación.
 */

import localFont from "next/font/local";

// Fuentes locales
export const monofur = localFont({
  src: "../../public/fonts/monofur.ttf",
  variable: "--font-monofur",
  display: "swap",
});

export const terminess = localFont({
  src: "../../public/fonts/terminess.ttf",
  variable: "--font-terminess",
  display: "swap",
});

export const gohu = localFont({
  src: "../../public/fonts/gohu.ttf",
  variable: "--font-gohu",
  display: "swap",
});
