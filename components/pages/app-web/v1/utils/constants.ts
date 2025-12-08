/**
 * @file constants.ts
 * @description Constantes para la versión 1 de la página principal.
 */

// Import of types
import { NavigationAppWebV1SectionsType } from "./types";

/**
 * @name NAVIGATION_APP_WEB_V1_SECTIONS
 * @type {NavigationAppWebV1SectionsType[]}
 * @description Lista de secciones de la navegación de la versión 1 de la página principal.
 */
export const NAVIGATION_APP_WEB_V1_SECTIONS: NavigationAppWebV1SectionsType[] =
  [
    { id: "about", href: "#about", title: "SOBRE MÍ" },
    { id: "experience", href: "#experience", title: "EXPERIENCIA" },
    { id: "projects", href: "#projects", title: "PROYECTOS" },
  ];
