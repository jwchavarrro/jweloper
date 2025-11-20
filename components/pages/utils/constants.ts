/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

import {
  SquareTerminal,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";


// Import of utilities
import { APP_ROUTES } from "@/config";

/**
 * @name SIDEBAR_ICONS
 * @type {Record<string, LucideIcon>}
 * @description Map de iconos para los botones de la página principal.
 */
export const HOME_ICONS: Record<string, LucideIcon> = {
  LayoutTemplate,
  SquareTerminal,
};


/**
 * @name HOME_DATA
 * @type {Object}
 * @description Datos de la página principal.
 */
export const HOME_DATA = {
  buttons: [
    {
      label: "CV en aplicativo",
      icon: "LayoutTemplate",
      url: APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB.path,
    },
    {
      label: "CV con IA",
      icon: "SquareTerminal",
      url: APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW.path,
    },
  ],
};
