/**
 * @file projects.ts
 * @description Constantes de proyectos con estructura compatible con CarouselItemProps.
 */

import { ProjectItem } from "@/components/pages/app-web/fragments/section-03/project-item";
import { PROJECTS_DATA } from "./constants";
import type { ProjectType } from "./types";

/**
 * @name PROJECTS
 * @type {ProjectType[]}
 * @description Lista de proyectos con estructura compatible con CarouselItemProps.
 */
export const PROJECTS: ProjectType[] = PROJECTS_DATA.map((project) => ({
  id: project.name,
  content: <ProjectItem project={project} />,
}));

