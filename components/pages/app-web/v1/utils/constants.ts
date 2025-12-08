/**
 * @file constants.ts
 * @description Constantes para la versión 1 de la página principal.
 */

// Import of types
import { ExperienceType } from "@/components/pages/app-web";
import { NavigationAppWebV1SectionsType } from "@/components/pages/app-web/v1/utils";

/**
 * @name NAVIGATION_APP_WEB_V1_SECTIONS
 * @type {NavigationAppWebV1SectionsType[]}
 * @description Lista de secciones de la navegación de la versión 1 de la página principal.
 */
export const NAVIGATION_APP_WEB_V1_SECTIONS: NavigationAppWebV1SectionsType[] =
  [
    { id: "about", href: "#about", title: "SOBRE MÍ" },
    { id: "experience", href: "#experience", title: "EXPERIENCIA" },
    { id: "projects", href: "#projects", title: "PROYECTOS" },
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
    dates: "2019 – 2022",
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
    dates: "2018 – 2019",
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
