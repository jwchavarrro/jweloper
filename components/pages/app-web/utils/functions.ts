/**
 * @file functions.ts
 * @description Contiene funciones auxiliares genéricas y utilidades para la sección 02.
 */

// Import of utilities
import { APP_WEB_ICONS } from "./constants";

// Import of types
import { EnumSkills } from "@/app/utils/types";

/**
 * @name getTechnologyIcon
 * @description Obtiene el icono de una tecnología basado en su nombre y enum correspondiente.
 * @param {string} techName - Nombre de la tecnología
 * @param {EnumSkills} techEnum - Enum de la tecnología
 * @returns {string | undefined} - Icono de iconify o undefined si la tecnología no existe
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
