/**
 * @file dictionaries.ts
 * @description Sistema de diccionarios para internacionalización nativa
 * Basado en la documentación oficial: https://nextjs.org/docs/app/guides/internationalization
 */

import "server-only";

const dictionaries = {
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

/**
 * @name hasLocale
 * @description Valida si un string es un locale soportado
 * @param {string} locale - String a validar
 * @returns {boolean} - true si es un locale válido
 */
export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

/**
 * @name getDictionary
 * @description Carga el diccionario para un locale específico
 * @param {Locale} locale - Locale para el cual cargar el diccionario
 * @returns {Promise<Record<string, any>>} - Diccionario cargado
 */
export const getDictionary = async (locale: Locale) => dictionaries[locale]();

