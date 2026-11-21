/**
 * @file types.ts
 * @description Tipos para la página principal.
 */

// Import of types
import type { Messages } from "next-intl";
import { EnumSkills } from "@/app/utils/types";

export type ExperienceId = keyof Messages["appWeb"]["experiences"];
export type ProjectId = keyof Messages["appWeb"]["projects"];

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
  id: ExperienceId;
  dates: string;
  title: string;
  company: {
    name: string;
    url?: string;
  };
  location: string;
  isRemote?: boolean;
  description: string[];
  tecnologies: string[];
};

/**
 * @name ProjectType
 * @type {Object}
 * @description Tipo para los datos de un proyecto.
 */
export type ProjectType = {
  id: ProjectId;
  date: string;
  image: string;
  name: string;
  description: string;
  company: {
    name: string;
    url?: string;
  } | null;
  url: string;
  tecnologies: string[];
};

/**
 * @name ExperienceBaseType
 * @description Datos de experiencia sin textos traducibles.
 */
export type ExperienceBaseType = Omit<
  ExperienceType,
  "dates" | "title" | "description"
>;

/**
 * @name ProjectBaseType
 * @description Datos de proyecto sin textos traducibles.
 */
export type ProjectBaseType = Omit<ProjectType, "name" | "description">;

/**
 * @name ProjectItemData
 * @type {Object}
 * @description Tipo para los datos de un item de proyecto.
 */
export type ProjectItemData = {
  name: string;
  description: string;
  image: string;
  url: string;
};
