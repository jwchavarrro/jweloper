/**
 * @file constants.ts
 * @description Constantes para la versión 1 de la página principal.
 */

// Import of types
import { ExperienceType, ProjectType } from "@/components/pages/app-web";
import { NavigationAppWebV1SectionsType } from "@/components/pages/app-web/v1/utils";

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

/**
 * @name EXPERIENCES_APP_WEB_V1
 * @type {ExperienceType[]}
 * @description Lista de experiencias profesionales para la versión 1 de la página principal.
 */
export const EXPERIENCES_APP_WEB_V1: ExperienceType[] = [
  {
    dates: "2022 – 2025",
    title: "Desarrollador de Aplicaciones a la Medida",
    company: {
      name: "Prevalentware s.a.s",
      url: "https://www.prevalentware.com/es/",
    },
    location: "Neiva, Colombia",
    isRemote: true,
    description: [
      "Desarrollé interfaces administrativas completas para productos empresariales, abarcando funcionalidades clave como login, registro, recuperación de contraseñas, gestión de usuarios, manejo de archivos y administración de catálogos maestros. Me especialicé en integrar el frontend con APIs REST y servicios externos, garantizando una comunicación fluida, eficiente y segura con los sistemas internos. Además, optimicé la arquitectura mediante la creación de componentes reutilizables y responsivos en React y Tailwind CSS, lo que permitió una mayor mantenibilidad y coherencia visual en los proyectos. Todo este proceso estuvo sustentado en la aplicación de buenas prácticas de arquitectura, documentación y control de versiones, facilitando el trabajo en equipo y contribuyendo al éxito de los ciclos de desarrollo ágiles.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    dates: "2019 – 2022",
    title: "Desarrollador Web Junior",
    company: {
      name: "Freelance",
    },
    location: "Neiva, Colombia",
    description: [
      "Desempeñé el rol de desarrollador web junior, centrándome en la creación de landing pages y sitios web corporativos con HTML, CSS, JavaScript y diseño responsivo. Me especialicé en la personalización de sitios WordPress utilizando Elementor y plugins especializados, lo que me permitió ofrecer soluciones adaptadas a las necesidades específicas de cada cliente. Además, optimicé el rendimiento de los sitios web para mejorar tiempos de carga y la experiencia móvil, lo que contribuyó a una mayor satisfacción del usuario. Todo este proceso estuvo sustentado en la aplicación de buenas prácticas de mantenimiento, actualización y mejora continua, asegurando la coherencia visual y funcional de los sitios web.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
  },
  {
    dates: "2018 – 2019",
    title: "Docente",
    company: {
      name: "   CABI",
      url: "http://www.colegioadventistaneiva.edu.co/",
    },
    location: "Neiva, Colombia",
    description: [
      "Desempeñé el rol de docente, centrándome en la enseñanza de fundamentos de programación y herramientas de TI a estudiantes de técnicas de desarrollo de software. Me especialicé en la implementación de estrategias pedagógicas enfocadas en el aprendizaje práctico, lo que me permitió contribuir al desarrollo de habilidades técnicas y profesionales en los estudiantes. Además, lideré proyectos de formación en articulación con SENA, lo que me permitió aplicar mis conocimientos en un contexto real y contribuir al desarrollo de la comunidad. Todo este proceso estuvo sustentado en la aplicación de buenas prácticas de docencia, investigación y colaboración, asegurando la calidad y relevancia de los programas educativos.",
    ],
  },
];

/**
 * @name PROJECTS_APP_WEB_V1
 * @type {ProjectItemData[]}
 * @description Lista de proyectos para la versión 1 de la página principal.
 */
export const PROJECTS_APP_WEB_V1: ProjectType[] = [
  {
    image: "https://via.placeholder.com/150",
    name: "RiskHub",
    description:
      "Filtros avanzados basados en query params para consultas dinámicas. Internacionalización i18n con soporte multilenguaje en Next.js. Optimización de UX para visualización de mapas, capas y modelos.",
    url: "https://riskhub.iadb.org/",
    tecnologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Node.js"],
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Portal web LACEA (Panel administrativo)",
    description:
      "Desarrollo de panel administrativo para gestión de membresías de usuarios. Sistema de publicación de ofertas y oportunidades profesionales para miembros. Buscador interno para localizar miembros activos — facilitando networking y colaboración.",
    url: "https://app.lacea.org/",
    tecnologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Node.js"],
  },
  {
    image: "https://via.placeholder.com/150",
    name: "PortalAliados",
    description:
      "Formularios multi-step con campos condicionales según respuestas. Integración con HubSpot para registro automático de leads. Validaciones dinámicas y UX optimizada para flujo de captura de datos.",
    url: "https://virtual.puntoaliado.com/formulario/nuevo?config=cm34n92j00001xhfrm94v6ysc",
    tecnologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Node.js"],
  },
];
