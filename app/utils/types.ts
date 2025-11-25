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
  ApiRest = "API REST",
}

/** Types*/
export type ThemeStateType = {
  readonly theme: EnumTheme;
};

/* export type SkillType = {
  name: string;
  icon: string;
  experience: string;
};
 */