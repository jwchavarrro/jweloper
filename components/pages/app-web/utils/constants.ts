/**
 * @file constants.ts
 * @description Constantes para la página principal.
 */

// Import of utilities
import { APP_LINKS, ICONS } from "@/config";

// Import of types
import { EnumSocialMedia, EnumSkills } from "@/app/utils/types";
import {
  ProjectBaseType,
  ExperienceBaseType,
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
 * @name APP_WEB_VERSIONS
 * @description Versión publicada de cada diseño de app-web.
 */
export const APP_WEB_VERSIONS = {
  V1: "v1.2.0",
  V2: "v2.5.0",
} as const;

/**
 * @name CV_FILE
 * @description PDF del CV (ruta pública y nombre de descarga), común a v1 y v2.
 */
export const CV_FILE = {
  path: "/docs/CV JOHN CHAVARRO 2025.pdf",
  name: "CV_JOHN_CHAVARRO_2025.pdf",
} as const;

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
 * @description Datos no traducibles de las experiencias. Textos en `appWeb.experiences.<id>`.
 */
export const EXPERIENCES_APP_WEB: ExperienceBaseType[] = [
  {
    id: "blossom",
    company: {
      name: APP_LINKS.GENERALS.COMPANY.BLOSSOM.name,
      url: APP_LINKS.GENERALS.COMPANY.BLOSSOM.url,
    },
    location: "Neiva, Colombia",
    isRemote: true,
    tecnologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "GraphQL"],
  },
  {
    id: "prevalentware",
    company: {
      name: APP_LINKS.GENERALS.COMPANY.PREVALENTWARE.name,
      url: APP_LINKS.GENERALS.COMPANY.PREVALENTWARE.url,
    },
    location: "Neiva, Colombia",
    isRemote: true,
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
    id: "freelance",
    company: {
      name: "Freelance",
    },
    location: "Neiva, Colombia",
    tecnologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
  },
  {
    id: "cabi",
    company: {
      name: APP_LINKS.GENERALS.COMPANY.CABI.name,
      url: APP_LINKS.GENERALS.COMPANY.CABI.url,
    },
    location: "Neiva, Colombia",
    tecnologies: ["HTML", "CSS", "JavaScript"],
  },
];

/**
 * @name PROJECTS_APP_WEB
 * @type {ProjectType[]}
 * @description Datos no traducibles de los proyectos. Textos en `appWeb.projects.<id>`.
 */
export const PROJECTS_APP_WEB: ProjectBaseType[] = [
  {
    id: "riskhub",
    date: "2025",
    image: "",
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
    id: "lacea",
    date: "2024",
    image: "",
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
    id: "portalAliados",
    date: "2023",
    image: "",
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
    id: "ctrlCash",
    date: "2025",
    image: "",
    company: {
      name: "Freelance",
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.CTRL_CASH.url,
    tecnologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Jotai",
      "REST APIs",
      "Tanstack Query",
      "Jest",
    ],
  },
  {
    id: "rickAndMorty",
    date: "2025",
    image: "",
    company: {
      name: "Freelance",
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.SEARCHING_RICK_AND_MORTY.url,
    tecnologies: [
      "React",
      "Router Dom",
      "Tailwind CSS",
      "TypeScript",
      "Jotai",
      "GraphQL",
      "Vitest",
    ],
  },
  {
    id: "cvLoneliness",
    date: "2025",
    image: "",
    company: {
      name: "Freelance",
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.CV_LONELINESS.url,
    tecnologies: ["Angular", "CSS", "TypeScript", "Karma"],
  },
  {
    id: "leonardoDaVinci",
    date: "2023",
    image: "",
    company: {
      name: "Freelance",
    },
    url: APP_LINKS.PORTFOLIO.PROJECTS.COLEGIO_GIMNASIO_LEONARDO_DA_VINCI.url,
    tecnologies: ["WordPress", "Elementor"],
  },
  {
    id: "jveloperCv",
    date: "2023",
    image: "",
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
