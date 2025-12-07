/**
 * @file types.ts
 * @description Tipos para la aplicación
 */

/** Enums*/
export enum EnumTheme {
  Light = "light",
  Dark = "dark",
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
 * @name ThemeStateType
 * @type {ThemeStateType}
 * @description Tipo para el estado del tema.
 */
export type ThemeStateType = {
  readonly theme: EnumTheme;
};

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
