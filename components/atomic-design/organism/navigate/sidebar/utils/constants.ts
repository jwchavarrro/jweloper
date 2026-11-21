/**
 * @file constants.ts
 * @description Constantes para el sidebar.
 */

import {
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Languages,
  SquareTerminal,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";
import type { SidebarDataType } from "./types";

// Import of utilities
import { APP_ROUTES } from "@/config";

/**
 * @name SIDEBAR_ICONS
 * @type {Record<string, LucideIcon>}
 * @description Map de iconos para el sidebar.
 */
export const SIDEBAR_ICONS: Record<string, LucideIcon> = {
  LayoutTemplate,
  SquareTerminal,
  LifeBuoy,
  Languages,
  Frame,
  PieChart,
  Map,
};

/**
 * @name SIDEBAR_DATA
 * @type {SidebarDataType}
 * @description Datos del sidebar. `title` es una clave del namespace `navigation`.
 */
export const SIDEBAR_DATA: SidebarDataType = {
  navMain: [
    {
      title: "appWeb",
      url: APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB.path,
      icon: "LayoutTemplate",
      isActive: true,
      items: [
        {
          title: "experience",
          url: APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.EXPERIENCE.path,
        },
        {
          title: "projects",
          url: APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS.path,
        },
      ],
    },
    {
      title: "iaChat",
      url: APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT.path,
      icon: "SquareTerminal",
      isActive: true,
      items: [
        {
          title: "newChat",
          url: APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT.path,
        },
      ],
    },
  ],
};
