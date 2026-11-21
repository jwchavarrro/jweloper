/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

// Import of utilities
import { APP_ROUTES } from "@/config";

// Import of types
import type { HomeDataType } from "./types";

/**
 * @name HOME_DATA
 * @type {Object}
 * @description Datos de la página principal.
 */
export const HOME_DATA: HomeDataType = {
  buttons: [
    {
      label: "cvApp",
      icon: "LayoutTemplate",
      url: APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB.path,
    },
    {
      label: "cvAi",
      icon: "SquareTerminal",
      url: APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT.path,
    },
  ],
};
