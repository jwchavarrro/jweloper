/**
 * @file icons.ts
 * @description Configuración de los iconos de la aplicación.
 */

// Import of types
import { EnumSkills, EnumSocialMedia } from "@/app/utils/types";

/**
 * @name ICONS
 * @type {Record<string, string>}
 * @description Map de iconos para la aplicación.
 */
export const ICONS: Record<string, string> = {
  [EnumSkills.HTML]: "devicon-plain:html5",
  [EnumSkills.CSS]: "devicon-plain:css3",
  [EnumSkills.JavaScript]: "devicon-plain:javascript",
  [EnumSkills.TypeScript]: "devicon-plain:typescript",
  [EnumSkills.React]: "bxl:react",
  [EnumSkills.Nextjs]: "devicon-plain:nextjs",
  [EnumSkills.Tailwind]: "file-icons:tailwind",
  [EnumSkills.Git]: "devicon-plain:git",
  [EnumSkills.Github]: "cib:github",
  [EnumSkills.ApiRest]: "dashicons:rest-api",
  [EnumSocialMedia.Linkedin]: "devicon-plain:linkedin",
  [EnumSocialMedia.Whatsapp]: "devicon-plain:whatsapp",
  [EnumSocialMedia.Email]: "devicon-plain:email",
  ARROW_LEFT: "hugeicons:circle-arrow-left-02",
};
