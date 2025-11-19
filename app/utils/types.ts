/**
 * @file types.ts
 * @description Tipos para la aplicación
 */


/** Enums*/
export enum EnumTheme {
  Light = "light",
  Dark = "dark",
}


/** Types*/
export type ThemeStateType = {
  readonly theme: EnumTheme
}


