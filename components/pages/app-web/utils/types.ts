/**
 * @file types.ts
 * @description Tipos para la página principal.
 */

// Import of types
import { EnumProgrammingLanguage } from "@/app/utils/types";

/**
 * @name SkillType
 * @type {Object}
 * @description Tipo para la habilidad.
 */
export type SkillType = {
  name: EnumProgrammingLanguage;
  icon: string;
  experience: string;
};

/**
 * @name ProjectType
 * @type {Object}
 * @description Tipo para el proyecto.
 */
export type ProjectType = {
  name: string;
  description: string;
  image: string;
  url: string;
  technologies: EnumProgrammingLanguage[];
  images: string[];
};
