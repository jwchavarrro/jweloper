/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

// Import of utilities
import { ICONS } from "@/config";

// Import of types
import { EnumProgrammingLanguage } from "@/app/utils/types";
import {
  SkillType,
  ProjectType,
  ExperienceType,
} from "@/components/pages/app-web";

/**
 * @name APP_WEB_ICONS
 * @type {Record<string, string>}
 * @description Map de iconos para los botones de la página principal.
 */
export const APP_WEB_ICONS: Record<string, string> = {
  [EnumProgrammingLanguage.HTML]: ICONS[EnumProgrammingLanguage.HTML],
  [EnumProgrammingLanguage.CSS]: ICONS[EnumProgrammingLanguage.CSS],
  [EnumProgrammingLanguage.JavaScript]:
    ICONS[EnumProgrammingLanguage.JavaScript],
  [EnumProgrammingLanguage.TypeScript]:
    ICONS[EnumProgrammingLanguage.TypeScript],
  [EnumProgrammingLanguage.Tailwind]: ICONS[EnumProgrammingLanguage.Tailwind],
  [EnumProgrammingLanguage.React]: ICONS[EnumProgrammingLanguage.React],
  [EnumProgrammingLanguage.Nextjs]: ICONS[EnumProgrammingLanguage.Nextjs],
  [EnumProgrammingLanguage.Git]: ICONS[EnumProgrammingLanguage.Git],
  [EnumProgrammingLanguage.ApiRest]: ICONS[EnumProgrammingLanguage.ApiRest],
  [EnumProgrammingLanguage.Github]: ICONS[EnumProgrammingLanguage.Github],
  [EnumProgrammingLanguage.Linkedin]: ICONS[EnumProgrammingLanguage.Linkedin],
};

/**
 * @name SKILLS
 * @type {SkillType[]}
 * @description Lista de habilidades con su respectivo icono y experiencia.
 */
export const SKILLS: SkillType[] = [
  {
    name: EnumProgrammingLanguage.HTML,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.HTML],
    experience: "+5",
  },
  {
    name: EnumProgrammingLanguage.CSS,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.CSS],
    experience: "+4",
  },
  {
    name: EnumProgrammingLanguage.JavaScript,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.JavaScript],
    experience: "+3",
  },
  {
    name: EnumProgrammingLanguage.React,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.React],
    experience: "+2",
  },
  {
    name: EnumProgrammingLanguage.Nextjs,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.Nextjs],
    experience: "+3",
  },
  {
    name: EnumProgrammingLanguage.TypeScript,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.TypeScript],
    experience: "+1",
  },
  {
    name: EnumProgrammingLanguage.Tailwind,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.Tailwind],
    experience: "+2",
  },
  {
    name: EnumProgrammingLanguage.Github,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.Github],
    experience: "+2",
  },
  {
    name: EnumProgrammingLanguage.ApiRest,
    icon: APP_WEB_ICONS[EnumProgrammingLanguage.ApiRest],
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
 * @name PROJECTS
 * @type {ProjectType[]}
 * @description Lista de proyectos.
 */
export const PROJECTS: ProjectType[] = [
  {
    name: "Sistema de gestión de inventario",
    description: "Descripción del proyecto 1",
    image: "https://via.placeholder.com/150",
    url: "https://www.google.com",
  },
];
