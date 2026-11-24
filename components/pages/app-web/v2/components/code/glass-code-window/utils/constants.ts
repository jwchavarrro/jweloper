/**
 * @file constants.ts
 * @description Constantes para el componente GlassCodeWindow.
 */

/**
 * @name MENU_MAIN_ITEMS
 * @type {Record<string, string>}
 * @description Map de items para el menú principal.
 */
// lazy: imita el menú de VS Code; se deja en inglés a propósito (no es copy del sitio)
export const MENU_MAIN_ITEMS = [
  "File",
  "Edit",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
] as const;

/** Cuántas entradas del menú caben en móvil */
export const MOBILE_MENU_COUNT = 3;
