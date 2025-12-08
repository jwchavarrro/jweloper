/**
 * @file types.ts
 * @description Tipos para la página principal.
 */

// Import of types
import { EnumSkills } from "@/app/utils/types";

/**
 * @name SkillType
 * @type {Object}
 * @description Tipo para la habilidad.
 */
export type SkillType = {
  name: EnumSkills;
  icon: string;
  experience: string;
};

/**
 * @name ExperienceType
 * @type {Object}
 * @description Tipo para las experiencias profesionales.
 */
export type ExperienceType = {
  dates: string;
  title: string;
  company: {
    name: string;
    url?: string;
  };
  location: string;
  isRemote?: boolean;
  description: string[];
  technologies?: string[];
};

/**
 * @name ProjectItemData
 * @type {Object}
 * @description Tipo para los datos de un proyecto.
 */
export type ProjectItemData = {
  name: string;
  description: string;
  image: string;
  url: string;
};
