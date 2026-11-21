/**
 * @file constants.ts
 * @description Constantes para la página de proyectos.
 */

import type { Messages } from "next-intl";

/**
 * @name HEADERS_PROYECTOS
 * @type {string[]}
 * @description Encabezados de la tabla de proyectos.
 */
export const HEADERS_ALL_PROJECTS = [
  "year",
  "project",
  "madeAt",
  "builtWith",
  "link",
] as const satisfies ReadonlyArray<
  keyof Messages["appWeb"]["allProjects"]["headers"]
>;
