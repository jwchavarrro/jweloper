/**
 * @file app-routes.ts
 * @description Definición de rutas de la aplicación con sus respectivos query parameters.
 */

/**
 * @name APP_ROUTES
 * @type {Object}
 * @description Rutas de la aplicación con sus query parameters permitidos.
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
        EXPERIENCE: {
          path: "/app-web#experiencia",
        },
        PROJECTS: {
          path: "/app-web#proyectos",
          ALL_PROJECTS: {
            path: "/app-web/proyectos",
          },
        },
        CONTACT: {
          path: "/app-web#contacto",
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
 * @name APP_LINKS
 * @type {Object}
 * @description Enlaces para abrir en una nueva pestaña.
 */
export const APP_LINKS = {
  GENERALS: {
    SOCIAL_MEDIA: {
      GITHUB: {
        path: "/github",
        url: "https://github.com/jwchavarrro",
      },
      LINKEDIN: {
        path: "/linkedin",
        url: "https://www.linkedin.com/in/john-chavarro-urrea-9b9200129/",
      },
      WHATSAPP: {
        path: "/whatsapp",
        url: "https://wa.me/573134628546",
      },
      EMAIL: {
        path: "/email",
        url: "mailto:jwchavarrro023@gmail.com",
      },
    },
    COMPANY: {
      PREVALENTWARE: {
        name: "Prevalentware s.a.s",
        url: "https://www.prevalentware.com/es/",
      },
      CABI: {
        name: "CABI",
        url: "http://www.colegioadventistaneiva.edu.co/",
      },
    },
  },
  PORTFOLIO: {
    PROJECTS: {
      RISKHUB: {
        name: "RiskHub",
        url: "https://riskhub.iadb.org/",
      },
      LACEA: {
        name: "Portal web - ( Panel administrativo membresía )",
        url: "https://www.lacea.org/",
      },
      PORTALALIADOS: {
        name: "PortalAliados - ( Formulario solicitud créditos )",
        url: "https://virtual.puntoaliado.com/formulario/nuevo?config=cm34n92j00001xhfrm94v6ysc",
      },
      CV_LONELINESS: {
        name: "CV Loneliness",
        url: "https://cv-loneliness.vercel.app/",
      },
      JVELOPER_CV: {
        name: "Jveloper CV",
        url: "https://jveloper-cv-front.vercel.app/",
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
