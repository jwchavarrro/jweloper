/**
 * @file constants.ts
 * @description Constantes para la versión 1 de la página principal.
 */

// Import of types
import type { NavigationAppWebV1SectionsType } from "@/components/pages/app-web/v1/utils";

/**
 * @name NAVIGATION_APP_WEB_V1_SECTIONS
 * @type {NavigationAppWebV1SectionsType[]}
 * @description Lista de secciones de la navegación de la versión 1 de la página principal.
 */
export const NAVIGATION_APP_WEB_V1_SECTIONS: NavigationAppWebV1SectionsType[] =
  [
    { href: "#sobre-mi", title: "SOBRE MÍ" },
    { href: "#experiencia", title: "EXPERIENCIA" },
    { href: "#proyectos", title: "PROYECTOS" },
  ];
