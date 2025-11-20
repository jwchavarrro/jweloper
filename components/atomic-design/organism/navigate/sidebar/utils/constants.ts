/**
 * @file constants.ts
 * @description Constantes para el sidebar.
 */

import {
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
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
  Send,
  Frame,
  PieChart,
  Map,
};


/**
 * @name SIDEBAR_DATA
 * @type {SidebarDataType}
 * @description Datos de ejemplo para el sidebar.
 */
export const SIDEBAR_DATA: SidebarDataType = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Aplicativo web",
      url: APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB.path,
      icon: "LayoutTemplate",
      isActive: true,
      items: [
        {
          title: "Proyectos",
          url: APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS.path,
        },
        {
          title: "Contacto",
          url: APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.CONTACT.path,
        },
      ],
    },
    {
      title: "IA chat",
      url: APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT.path,
      icon: "SquareTerminal",
      isActive: true,
      items: [
        {
          title: "Nuevo chat",
          url: APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW.path,
        },
        {
          title: "Buscar chat",
          url: APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.path,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "#",
      icon: "Send",
    },
  ],

  // Todo: Esto se debe de eliminar pues se genera dinamicamente en el componente NavChats
  chats: [
    {
      name: "Design Engineering",
      url: "#",
      icon: "Frame",
    },
  ],
};
