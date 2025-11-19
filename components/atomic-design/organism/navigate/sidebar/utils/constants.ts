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
      title: "Playground",
      url: "#",
      icon: "SquareTerminal",
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
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
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: "Frame",
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: "PieChart",
    },
    {
      name: "Travel",
      url: "#",
      icon: "Map",
    },
  ],
};
