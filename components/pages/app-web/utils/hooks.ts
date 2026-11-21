/**
 * @file hooks.ts
 * @description Hooks que combinan los datos de app-web con sus textos traducidos.
 */

import { useTranslations } from "next-intl";

// Import of utilities
import { EXPERIENCES_APP_WEB, PROJECTS_APP_WEB } from "./constants";

// Import of types
import type { ExperienceType, ProjectType } from "./types";

/**
 * @name useExperiences
 * @description Experiencias profesionales en el idioma activo.
 */
export const useExperiences = (): ExperienceType[] => {
  const t = useTranslations("appWeb.experiences");
  return EXPERIENCES_APP_WEB.map((experience) => ({
    ...experience,
    dates: t(`${experience.id}.dates`),
    title: t(`${experience.id}.title`),
    description: [t(`${experience.id}.description`)],
  }));
};

/**
 * @name useProjects
 * @description Proyectos en el idioma activo.
 */
export const useProjects = (): ProjectType[] => {
  const t = useTranslations("appWeb.projects");
  return PROJECTS_APP_WEB.map((project) => ({
    ...project,
    name: t(`${project.id}.name`),
    description: t(`${project.id}.description`),
  }));
};
