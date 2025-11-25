/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

import { EnumProgrammingLanguage } from "@/app/utils/types";

/**
 * @name SIDEBAR_ICONS
 * @type {Record<string, LucideIcon>}
 * @description Map de iconos para los botones de la página principal.
 */
export const APP_WEB_ICONS: Record<string, string> = {
  [EnumProgrammingLanguage.CSS]: ICONS.CSS,
  [EnumProgrammingLanguage.JavaScript]: ICONS.JavaScript,
  [EnumProgrammingLanguage.TypeScript]: ICONS.TypeScript,
  [EnumProgrammingLanguage.Tailwind]: ICONS.Tailwind,
  [EnumProgrammingLanguage.React]: ICONS.React,
  [EnumProgrammingLanguage.Nextjs]: ICONS.Nextjs,
  [EnumProgrammingLanguage.Git]: ICONS.Git,
  [EnumProgrammingLanguage.ApiRest]: ICONS.ApiRest,
};

/**
 * @name SKILLS
 * @type {Array<{ name: string; icon: string; experience: string }>}
 * @description Lista de habilidades con su respectivo icono y experiencia.
 */
export const SKILLS: { name: string; icon: string; experience: string }[] = [
  {
    name: EnumProgrammingLanguage.HTML,
    icon: APP_WEB_ICONS.html,
    experience: "+5",
  },
  {
    name: EnumProgrammingLanguage.CSS,
    icon: APP_WEB_ICONS.css,
    experience: "+4",
  },
  {
    name: EnumProgrammingLanguage.JavaScript,
    icon: APP_WEB_ICONS.javascript,
    experience: "+3",
  },
  {
    name: EnumProgrammingLanguage.TypeScript,
    icon: APP_WEB_ICONS.typescript,
    experience: "+1",
  },
  {
    name: EnumProgrammingLanguage.React,
    icon: APP_WEB_ICONS.react,
    experience: "+2",
  },
  {
    name: EnumProgrammingLanguage.Nextjs,
    icon: APP_WEB_ICONS.nextjs,
    experience: "+3",
  },
  {
    name: EnumProgrammingLanguage.Git,
    icon: APP_WEB_ICONS.git,
    experience: "+2",
  },
];
