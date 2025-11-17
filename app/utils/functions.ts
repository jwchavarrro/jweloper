/**
 * Archivo: functions.ts
 * Descripción: Este archivo contiene utilidades y funciones globales para la aplicación.
 */


import { Geist, Geist_Mono } from "next/font/google";

/*
* Importación de las tipografías de la familia Geist
* Tipografías globales para la aplicación
*/

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
