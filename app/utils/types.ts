/**
 * @file types.ts
 * @description Tipos para la aplicación
 */

/** Enums*/
export enum EnumTheme {
  Light = "light",
  Dark = "dark",
}

export enum EnumProgrammingLanguage {
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
  Linkedin = "Linkedin",
}

/** Types*/
export type ThemeStateType = {
  readonly theme: EnumTheme;
};

/**
 * @name SocialMediaType
 * @type {Object}
 * @description Tipo para el medio social.
 */
export type SocialMediaType = {
  name: EnumProgrammingLanguage;
  icon: string;
};
