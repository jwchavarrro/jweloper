/**
 * @file types.ts
 * @description Tipos para la aplicación
 */

/** Enums*/
/**
 * @name EnumTheme
 * @type {EnumTheme}
 * @description Enum de temas (valores de next-themes).
 */
export enum EnumTheme {
  Light = "light",
  Dark = "dark",
  System = "system",
}

/**
 * @name EnumSkills
 * @type {EnumSkills}
 * @description Enum de habilidades.
 */
export enum EnumSkills {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  Tailwind = "Tailwind",
  TypeScript = "TypeScript",
  React = "React",
  Nextjs = "Next.js",
  Git = "Git",
  Github = "Github",
  ApiRest = "API REST",
}

/**
 * @name EnumSocialMedia
 * @type {EnumSocialMedia}
 * @description Enum de medios sociales.
 */
export enum EnumSocialMedia {
  Github = "Github",
  Linkedin = "Linkedin",
  Whatsapp = "Whatsapp",
  Email = "Email",
}

/** Types*/

/**
 * @name SocialMediaType
 * @type {Object}
 * @description Tipo para el medio social.
 */
export type SocialMediaType = {
  name: EnumSkills | EnumSocialMedia;
  icon: string;
  url: string;
};
