/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

// Import of utilities
import { APP_WEB_ICONS } from "@/components/pages/app-web";
import { APP_ROUTES } from "@/config";

// Import of types
import { SocialMediaType, EnumSocialMedia, EnumSkills } from "./types";

/**
 * @name SOCIAL_MEDIA
 * @type {SocialMediaType[]}
 * @description Lista de medios sociales con su respectivo icono.
 */
export const SOCIAL_MEDIA: SocialMediaType[] = [
  {
    name: EnumSkills.Github,
    icon: APP_WEB_ICONS[EnumSkills.Github],
    url: APP_ROUTES.PUBLIC.HOME.SOCIAL_MEDIA.GITHUB.url,
  },
  {
    name: EnumSocialMedia.Linkedin,
    icon: APP_WEB_ICONS[EnumSocialMedia.Linkedin],
    url: APP_ROUTES.PUBLIC.HOME.SOCIAL_MEDIA.LINKEDIN.url,
  },
  {
    name: EnumSocialMedia.Whatsapp,
    icon: APP_WEB_ICONS[EnumSocialMedia.Whatsapp],
    url: "https://wa.me/573178000000",
  },
  {
    name: EnumSocialMedia.Email,
    icon: APP_WEB_ICONS[EnumSocialMedia.Email],
    url: "mailto:jwchavarrro023@gmail.com",
  },
];
