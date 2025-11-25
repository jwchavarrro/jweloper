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
