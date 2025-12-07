/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

// Import of utilities
import { ICONS } from "@/config";

// Import of types
import { EnumSocialMedia, EnumSkills } from "@/app/utils/types";
import {
  SkillType,
  ProjectItemData,
  ExperienceType,
} from "@/components/pages/app-web";

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
 * @name EXPERIENCES
 * @type {ExperienceType[]}
 * @description Lista de experiencias profesionales.
 */
export const EXPERIENCES: ExperienceType[] = [
  {
    dates: "Sept. 2022 – Oct. 2025",
    title: "Desarrollador de Aplicaciones a la Medida",
    company: {
      name: "Prevalentware s.a.s",
      url: "https://www.prevalentware.com/es/",
    },
    location: "Neiva, Colombia",
    isRemote: true,
    description: [
      "Desarrollé interfaces administrativas completas para productos empresariales, incluyendo login, registro, recuperación de contraseñas, gestión de usuarios, carga/descarga de archivos y administración de catálogos maestros.",
      "Implementé integraciones con APIs REST y servicios externos, asegurando una comunicación estable, eficiente y segura entre el frontend y los sistemas internos.",
      "Optimicé componentes reutilizables y responsivos basados en React y Tailwind CSS, mejorando la mantenibilidad y consistencia visual.",
      "Apliqué buenas prácticas de arquitectura, documentación y versionado, contribuyendo a procesos de desarrollo ágiles.",
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
    dates: "Ene. 2019 – Sept. 2022",
    title: "Desarrollador Web Junior",
    company: {
      name: "Freelance",
    },
    location: "Neiva, Colombia",
    description: [
      "Creación de landing pages y sitios web corporativos con HTML, CSS, JavaScript y diseño responsivo.",
      "Personalización de sitios WordPress usando Elementor y plugins especializados.",
      "Optimización de rendimiento para mejorar tiempos de carga y experiencia móvil.",
      "Mantenimiento, actualización y mejora continua de sitios web, asegurando coherencia visual y funcional.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
  },
  {
    dates: "Ene. 2018 – Nov. 2019",
    title: "Docente",
    company: {
      name: "Colegio Adventista Baluarte Interamericano",
      url: "http://www.colegioadventistaneiva.edu.co/",
    },
    location: "Neiva, Colombia",
    description: [
      "Enseñé fundamentos de programación y herramientas de TI a estudiantes de técnicas de desarrollo de software.",
      "Implementé estrategias pedagógicas enfocadas en el aprendizaje práctico.",
      "Lideré proyectos de formación en articulación con SENA.",
      "Promoví investigación sobre 'Estrategias didácticas para fortalecer fundamentos de programación'.",
    ],
  },
];

/**
 * @name PROJECTS_DATA
 * @type {ProjectItemData[]}
 * @description Datos de los proyectos.
 */
export const PROJECTS_DATA: ProjectItemData[] = [
  {
    name: "RiskHub",
    description:
      "Filtros avanzados basados en query params para consultas dinámicas. Internacionalización i18n con soporte multilenguaje en Next.js. Optimización de UX para visualización de mapas, capas y modelos.",
    image: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    name: "Portal web LACEA (Panel administrativo)",
    description:
      "Desarrollo de panel administrativo para gestión de membresías de usuarios. Sistema de publicación de ofertas y oportunidades profesionales para miembros. Buscador interno para localizar miembros activos — facilitando networking y colaboración.",
    image: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    name: "PortalAliados",
    description:
      "Formularios multi-step con campos condicionales según respuestas. Integración con HubSpot para registro automático de leads. Validaciones dinámicas y UX optimizada para flujo de captura de datos.",
    image: "https://via.placeholder.com/150",
    url: "#",
  },
];
