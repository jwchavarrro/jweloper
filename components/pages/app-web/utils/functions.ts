/**
 * @file functions.ts
 * @description Contiene funciones auxiliares genéricas y utilidades para la sección 02.
 */

// Import of types
import { EnumProgrammingLanguage } from "@/app/utils/types";

// Import of utilities
import { APP_WEB_ICONS } from "./constants";

/**
 * @name getTechnologyIcon
 * @description Función genérica que obtiene el icono de una tecnología basado en su nombre.
 * Utiliza el enum EnumProgrammingLanguage para mapear nombres de tecnologías a sus iconos correspondientes.
 * @param {string} techName - Nombre de la tecnología
 * @returns {string | undefined} - Icono de iconify o undefined si no existe
 */
export const getTechnologyIcon = (techName: string): string | undefined => {
  const techMap: Record<string, EnumProgrammingLanguage> = {
    [EnumProgrammingLanguage.React]: EnumProgrammingLanguage.React,
    [EnumProgrammingLanguage.Tailwind]: EnumProgrammingLanguage.Tailwind,
    "Tailwind CSS": EnumProgrammingLanguage.Tailwind,
    [EnumProgrammingLanguage.JavaScript]: EnumProgrammingLanguage.JavaScript,
    [EnumProgrammingLanguage.TypeScript]: EnumProgrammingLanguage.TypeScript,
    [EnumProgrammingLanguage.ApiRest]: EnumProgrammingLanguage.ApiRest,
    "REST APIs": EnumProgrammingLanguage.ApiRest,
    [EnumProgrammingLanguage.HTML]: EnumProgrammingLanguage.HTML,
    [EnumProgrammingLanguage.CSS]: EnumProgrammingLanguage.CSS,
  };

  const techEnum = techMap[techName];
  return techEnum ? APP_WEB_ICONS[techEnum] : undefined;
};
