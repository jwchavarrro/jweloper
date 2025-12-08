/**
 * @file functions.ts
 * @description Funciones para la versión 1 de la página principal.
 */

// Import of utilities
import { NAVIGATION_APP_WEB_V1_SECTIONS } from "./constants";

/**
 * @name getInitialSection
 * @description Función para obtener el hash inicial de la URL.
 * @returns {string} - El hash inicial de la URL.
 */
export const getInitialSection = (): string => {
  if (globalThis.window !== undefined) {
    const hash = globalThis.window.location.hash;
    if (hash && NAVIGATION_APP_WEB_V1_SECTIONS.some((s) => s.href === hash)) {
      return hash;
    }
  }
  return NAVIGATION_APP_WEB_V1_SECTIONS[0].href;
};
