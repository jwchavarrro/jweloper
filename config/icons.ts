/**
 * @file icons.ts
 * @description Configuración de los iconos de la aplicación.
 */

// Import of types
import { EnumProgrammingLanguage } from "@/app/utils/types";

/**
 * @name ICONS
 * @type {Record<string, string>}
 * @description Map de iconos para la aplicación.
 */
export const ICONS: Record<string, string> = {
  [EnumProgrammingLanguage.HTML]: "devicon-plain:html5",
  [EnumProgrammingLanguage.CSS]: "devicon-plain:css3",
  [EnumProgrammingLanguage.JavaScript]: "devicon-plain:javascript",
  [EnumProgrammingLanguage.TypeScript]: "devicon-plain:typescript",
  [EnumProgrammingLanguage.React]: "bxl:react",
  [EnumProgrammingLanguage.Nextjs]: "devicon-plain:nextjs",
  [EnumProgrammingLanguage.Tailwind]: "file-icons:tailwind",
  [EnumProgrammingLanguage.Git]: "devicon-plain:git",
  [EnumProgrammingLanguage.Github]: "devicon-plain:githubcodespaces",
  [EnumProgrammingLanguage.ApiRest]: "dashicons:rest-api",
  [EnumProgrammingLanguage.Linkedin]: "devicon-plain:linkedin",
};
