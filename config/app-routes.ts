/**
 * @file app-routes.ts
 * @description Definición de rutas de la aplicación con sus respectivos query parameters.
 */

/**
 * Rutas de la aplicación con sus query parameters permitidos
 */
export const APP_ROUTES = {
  PUBLIC: {
    HOME: {
      path: "/",
    },
    PORTFOLIO: {
      APP_WEB: {
        APP_WEB: {
          path: "/app-web",
        },
        PROJECTS: {
          path: "/app-web/proyectos",
          queries: {
            proyectos: "string",
          } as const,
        },
        CONTACT: {
          path: "/app-web/contacto",
        },
      },
      IA_CHAT: {
        IA_CHAT: {
          path: "/ia-chat",
        },
        IA_CHAT_NEW: {
          path: "/ia-chat/nuevo-chat",
          queries: {
            "nuevo-chat": "string",
          } as const,
        },
        IA_CHAT_SEARCH: {
          path: "/ia-chat/buscar-chat",
          queries: {
            "buscar-chat": "string",
            sort: "string",
            order: "string",
            limit: "number",
          } as const,
        },
      },
    },
  },
} as const;

/**
 * Tipos helper para obtener las keys de los query params de una ruta dentro de PORTFOLIO
 * Solo funciona con rutas que tienen la propiedad queries definida
 */
export type PortfolioRouteQueryKeys<
  T extends keyof typeof APP_ROUTES.PUBLIC.PORTFOLIO,
> = T extends "IA_CHAT_NEW"
  ? keyof (typeof APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW)["queries"]
  : T extends "IA_CHAT_SEARCH"
    ? keyof (typeof APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH)["queries"]
    : never;
