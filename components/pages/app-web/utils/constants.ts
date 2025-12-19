/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

// Import of utilities
import { APP_LINKS, ICONS } from "@/config";

// Import of types
import { EnumSocialMedia, EnumSkills } from "@/app/utils/types";
import {
  ProjectType,
  ExperienceType,
  SkillType,
} from "@/components/pages/app-web/utils/types";

/**
 * @name APP_WEB_ICONS
 * @type {Record<string, string>}
 * @description Map de iconos para los botones de la página principal.
 */
export const APP_WEB_ICONS: Record<string, string> = {
  [EnumSkills.HTML]: ICONS[EnumSkills.HTML],
  [EnumSkills.CSS]: ICONS[EnumSkills.CSS],
  [EnumSkills.JavaScript]: ICONS[EnumSkills.JavaScript],
  [EnumSkills.TypeScript]: ICONS[EnumSkills.TypeScript],
  [EnumSkills.Tailwind]: ICONS[EnumSkills.Tailwind],
  [EnumSkills.React]: ICONS[EnumSkills.React],
  [EnumSkills.Nextjs]: ICONS[EnumSkills.Nextjs],
  [EnumSkills.ApiRest]: ICONS[EnumSkills.ApiRest],
  [EnumSkills.Git]: ICONS[EnumSkills.Git],
  [EnumSkills.Github]: ICONS[EnumSkills.Github],
  [EnumSocialMedia.Linkedin]: ICONS[EnumSocialMedia.Linkedin],
  [EnumSocialMedia.Whatsapp]: ICONS[EnumSocialMedia.Whatsapp],
  [EnumSocialMedia.Email]: ICONS[EnumSocialMedia.Email],
};

/**
 * @name SKILLS
 * @type {SkillType[]}
 * @description Lista de habilidades con su respectivo icono y experiencia.
 */
export const SKILLS: SkillType[] = [
  {
    name: EnumSkills.HTML,
    icon: APP_WEB_ICONS[EnumSkills.HTML],
    experience: "+5",
  },
  {
    name: EnumSkills.CSS,
    icon: APP_WEB_ICONS[EnumSkills.CSS],
    experience: "+4",
  },
  {
    name: EnumSkills.JavaScript,
    icon: APP_WEB_ICONS[EnumSkills.JavaScript],
    experience: "+3",
  },
  {
    name: EnumSkills.React,
    icon: APP_WEB_ICONS[EnumSkills.React],
    experience: "+2",
  },
  {
    name: EnumSkills.Nextjs,
    icon: APP_WEB_ICONS[EnumSkills.Nextjs],
    experience: "+3",
  },
  {
    name: EnumSkills.TypeScript,
    icon: APP_WEB_ICONS[EnumSkills.TypeScript],
    experience: "+1",
  },
  {
    name: EnumSkills.Tailwind,
    icon: APP_WEB_ICONS[EnumSkills.Tailwind],
    experience: "+2",
  },
  {
    name: EnumSkills.Github,
    icon: APP_WEB_ICONS[EnumSkills.Github],
    experience: "+2",
  },
  {
    name: EnumSkills.ApiRest,
    icon: APP_WEB_ICONS[EnumSkills.ApiRest],
    experience: "+2",
  },
];

/**
 * @name EXPERIENCES_APP_WEB
 * @type {ExperienceType[]}
 * @description Lista de experiencias profesionales.
 */
export const EXPERIENCES_APP_WEB: ExperienceType[] = [
  {
    dates: "2022 – 2025",
    title: "Desarrollador de Aplicaciones a la Medida",
    company: {
      name: APP_LINKS.GENERALS.COMPANY.PREVALENTWARE.name,
      url: APP_LINKS.GENERALS.COMPANY.PREVALENTWARE.url,
    },
    location: "Neiva, Colombia",
    isRemote: true,
    description: [
      "Desarrollé interfaces administrativas completas para productos empresariales, abarcando funcionalidades clave como login, registro, recuperación de contraseñas, gestión de usuarios, manejo de archivos y administración de catálogos maestros. Me especialicé en integrar el frontend con APIs REST y servicios externos, garantizando una comunicación fluida, eficiente y segura con los sistemas internos. Además, optimicé la arquitectura mediante la creación de componentes reutilizables y responsivos en React y Tailwind CSS, lo que permitió una mayor mantenibilidad y coherencia visual en los proyectos. Todo este proceso estuvo sustentado en la aplicación de buenas prácticas de arquitectura, documentación y control de versiones, facilitando el trabajo en equipo y contribuyendo al éxito de los ciclos de desarrollo ágiles.",
    ],
    tecnologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "REST APIs",
      "Shadcn UI",
      "GraphQL",
      "Prisma",
      "Jest",
      "Jotai",
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
    tecnologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
  },
  {
    dates: "2018 – 2019",
    title: "Docente",
    company: {
      name: APP_LINKS.GENERALS.COMPANY.CABI.name,
      url: APP_LINKS.GENERALS.COMPANY.CABI.url,
    },
    location: "Neiva, Colombia",
    description: [
      "Desempeñé el rol de docente, centrándome en la enseñanza de fundamentos de programación y herramientas de TI a estudiantes de técnicas de desarrollo de software. Me especialicé en la implementación de estrategias pedagógicas enfocadas en el aprendizaje práctico, lo que me permitió contribuir al desarrollo de habilidades técnicas y profesionales en los estudiantes. Además, lideré proyectos de formación en articulación con SENA, lo que me permitió aplicar mis conocimientos en un contexto real y contribuir al desarrollo de la comunidad. Todo este proceso estuvo sustentado en la aplicación de buenas prácticas de docencia, investigación y colaboración, asegurando la calidad y relevancia de los programas educativos.",
    ],
    tecnologies: ["HTML", "CSS", "JavaScript"],
  },
];

/**
 * @name PROJECTS_APP_WEB
 * @type {ProjectType[]}
 * @description Lista de proyectos desarrollados.
 */
export const PROJECTS_APP_WEB: ProjectType[] = [
  {
    date: "2025",
    image: "",
    name: "RiskHub",
    description:
      "Filtros avanzados basados en query params para consultas dinámicas. Internacionalización i18n con soporte multilenguaje en Next.js. Optimización de UX para visualización de mapas, capas y modelos.",
    company: {
      name: APP_LINKS.PORTFOLIO.PROJECTS.RISKHUB.name,
      url: APP_LINKS.PORTFOLIO.PROJECTS.RISKHUB.url,
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.RISKHUB.url,
    tecnologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Jotai",
      "Prisma",
      "REST APIs",
      "Tanstack Query",
      "Jest",
    ],
  },
  {
    date: "2024",
    image: "",
    name: "Portal web LACEA (Panel administrativo)",
    description:
      "Desarrollo de panel administrativo para gestión de membresías de usuarios. Sistema de publicación de ofertas y oportunidades profesionales para miembros. Buscador interno para localizar miembros activos — facilitando networking y colaboración.",
    company: {
      name: APP_LINKS.PORTFOLIO.PROJECTS.LACEA.name,
      url: APP_LINKS.PORTFOLIO.PROJECTS.LACEA.url,
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.LACEA.url,
    tecnologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Jotai",
      "Prisma",
      "GraphQL",
      "Jest",
    ],
  },
  {
    date: "2023",
    image: "",
    name: "PortalAliados",
    description:
      "Formularios multi-step con campos condicionales según respuestas. Integración con HubSpot para registro automático de leads. Validaciones dinámicas y UX optimizada para flujo de captura de datos.",
    company: {
      name: APP_LINKS.PORTFOLIO.PROJECTS.PORTALALIADOS.name,
      url: APP_LINKS.PORTFOLIO.PROJECTS.PORTALALIADOS.url,
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.PORTALALIADOS.url,
    tecnologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Jotai",
      "Prisma",
      "GraphQL",
    ],
  },

  {
    date: "2025",
    image: "",
    name: "CV loneliness",
    description:
      "Aplicación web interactiva de currículum vitae desarrollada con Angular, que permite visualizar, descargar y compartir un CV profesional con soporte multiidioma (Español/Inglés).",
    company: {
      name: "Freelance",
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.CV_LONELINESS.url,
    tecnologies: ["Angular", "CSS", "TypeScript", "Karma"],
  },
  {
    date: "2023",
    image: "",
    name: "Colegio Gimnasio Leonardo da Vinci",
    description:
      "Portal web para el colegio Gimnasio Leonardo da Vinci, utilizando WordPress y Elementor.",
    company: {
      name: "Freelance",
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.COLEGIO_GIMNASIO_LEONARDO_DA_VINCI.url,
    tecnologies: ["WordPress", "Elementor"],
  },
  {
    date: "2023",
    image: "",
    name: "Jveloper CV",
    description:
      "Un currículum vitae interactivo con una interfaz moderna inspirada en Windows 11, construido con las últimas tecnologías web. Este proyecto combina un diseño de sistema operativo funcional con información profesional de manera innovadora y atractiva.",
    company: {
      name: "Freelance",
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.JVELOPER_CV.url,
    tecnologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Jotai",
      "Jest",
    ],
  },
];
