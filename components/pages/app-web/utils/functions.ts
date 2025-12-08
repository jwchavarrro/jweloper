/**
 * @file functions.ts
 * @description Contiene funciones auxiliares genéricas y utilidades para la sección 02.
 */

// Import of types
import { EnumSkills } from "@/app/utils/types";

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
  const techMap: Record<string, EnumSkills> = {
    [EnumSkills.React]: EnumSkills.React,
    [EnumSkills.Tailwind]: EnumSkills.Tailwind,
    "Tailwind CSS": EnumSkills.Tailwind,
    [EnumSkills.JavaScript]: EnumSkills.JavaScript,
    [EnumSkills.TypeScript]: EnumSkills.TypeScript,
    [EnumSkills.ApiRest]: EnumSkills.ApiRest,
    "REST APIs": EnumSkills.ApiRest,
    [EnumSkills.HTML]: EnumSkills.HTML,
    [EnumSkills.CSS]: EnumSkills.CSS,
  };

  const techEnum = techMap[techName];
  return techEnum ? APP_WEB_ICONS[techEnum] : undefined;
};
