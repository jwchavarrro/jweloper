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
  type LucideIcon,
} from "lucide-react";
import type { SidebarData } from "./types";

// Import of utilities
import { PAGE_ROUTER } from "@/config";

/**
 * @name SIDEBAR_ICONS
 * @type {Record<string, LucideIcon>}
 * @description Map de iconos para el sidebar.
 */
export const SIDEBAR_ICONS: Record<string, LucideIcon> = {
  SquareTerminal,
  LifeBuoy,
  Send,
  Frame,
  PieChart,
  Map,
};


/**
 * @name SIDEBAR_DATA
 * @type {SidebarData}
 * @description Datos de ejemplo para el sidebar.
 */
export const SIDEBAR_DATA: SidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Aplicativo web",
      url: PAGE_ROUTER.PUBLIC.APP_WEB,
      icon: "SquareTerminal",
      isActive: true,
      items: [
        {
          title: "Inicio",
          url: "#",
        },
        {
          title: "Proyectos",
          url: "#",
        },
        {
          title: "Contacto",
          url: "#",
        },
      ],
    },
    {
      title: "IA chat",
      url: PAGE_ROUTER.PUBLIC.IA_CHAT,
      icon: "SquareTerminal",
      isActive: true,
      items: [
        {
          title: "Nuevo chat",
          url: "#",
        },
        {
          title: "Buscar chat",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: "LifeBuoy",
    },
    {
      title: "Feedback",
      url: "#",
      icon: "Send",
    },
  ],
  chats: [
    {
      name: "Design Engineering",
      url: "#",
      icon: "Frame",
    },
  ],
};
