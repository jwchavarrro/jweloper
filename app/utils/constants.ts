/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

// Import of utilities
import { APP_WEB_ICONS } from "@/components/pages/app-web";
import { APP_ROUTES } from "@/config";

// Import of types
import { SocialMediaType, EnumProgrammingLanguage } from "./types";

/**
 * @name SOCIAL_MEDIA
 * @type {SocialMediaType[]}
 * @description Lista de medios sociales con su respectivo icono.
 */
export const SOCIAL_MEDIA: SocialMediaType[] = [
  {
    name: EnumProgrammingLanguage.Github,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.Github],
    url: APP_ROUTES.PUBLIC.HOME.SOCIAL_MEDIA.GITHUB.url,
  },
  {
    name: EnumProgrammingLanguage.Linkedin,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.Linkedin],
    url: APP_ROUTES.PUBLIC.HOME.SOCIAL_MEDIA.LINKEDIN.url,
  },
];
