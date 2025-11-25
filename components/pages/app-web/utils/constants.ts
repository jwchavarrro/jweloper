/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

// Import of utilities
import { ICONS } from "@/config";

// Import of types
import { EnumProgrammingLanguage } from "@/app/utils/types";
import { SkillType } from "@/components/pages/app-web";

/**
 * @name APP_WEB_ICONS
 * @type {Record<string, string>}
 * @description Map de iconos para los botones de la página principal.
 */
export const APP_WEB_ICONS: Record<string, string> = {
  [EnumProgrammingLanguage.HTML]: ICONS[EnumProgrammingLanguage.HTML],
  [EnumProgrammingLanguage.CSS]: ICONS[EnumProgrammingLanguage.CSS],
  [EnumProgrammingLanguage.JavaScript]:
    ICONS[EnumProgrammingLanguage.JavaScript],
  [EnumProgrammingLanguage.TypeScript]:
    ICONS[EnumProgrammingLanguage.TypeScript],
  [EnumProgrammingLanguage.Tailwind]: ICONS[EnumProgrammingLanguage.Tailwind],
  [EnumProgrammingLanguage.React]: ICONS[EnumProgrammingLanguage.React],
  [EnumProgrammingLanguage.Nextjs]: ICONS[EnumProgrammingLanguage.Nextjs],
  [EnumProgrammingLanguage.Git]: ICONS[EnumProgrammingLanguage.Git],
  [EnumProgrammingLanguage.ApiRest]: ICONS[EnumProgrammingLanguage.ApiRest],
};

/**
 * @name SKILLS
 * @type {SkillType[]}
 * @description Lista de habilidades con su respectivo icono y experiencia.
 */
export const SKILLS: SkillType[] = [
  {
    name: EnumProgrammingLanguage.HTML,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.HTML],
    experience: "+5",
  },
  {
    name: EnumProgrammingLanguage.CSS,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.CSS],
    experience: "+4",
  },
  {
    name: EnumProgrammingLanguage.JavaScript,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.JavaScript],
    experience: "+3",
  },
  {
    name: EnumProgrammingLanguage.TypeScript,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.TypeScript],
    experience: "+1",
  },
  {
    name: EnumProgrammingLanguage.React,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.React],
    experience: "+2",
  },
  {
    name: EnumProgrammingLanguage.Nextjs,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.Nextjs],
    experience: "+3",
  },
  {
    name: EnumProgrammingLanguage.Tailwind,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.Tailwind],
    experience: "+2",
  },
  {
    name: EnumProgrammingLanguage.Git,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.Git],
    experience: "+2",
  },
  {
    name: EnumProgrammingLanguage.ApiRest,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.ApiRest],
    experience: "+2",
  },
];
