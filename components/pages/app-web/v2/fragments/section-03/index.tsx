/**
 * @file index.tsx
 * @description Sección 03 (v2): proyectos destacados en un carrusel de vidrio.
 */

"use client";

import { useTranslations } from "next-intl";

// Import of components custom
import {
  GlassCarousel,
  GlassHeading,
  GlassSection,
} from "@/components/glass-design";
import { GlassWatermark } from "@/components/pages/app-web/v2/components";
import { ProjectCard } from "./fragments";

// Import of custom hooks
import { useProjects } from "@/components/pages/app-web";

interface Section03Props {
  readonly anchorId?: string;
}

export const Section03: React.FC<Section03Props> = ({ anchorId }) => {
  const t = useTranslations("appWeb");
  const projects = useProjects();

  return (
    <GlassSection
      anchorId={anchorId}
      background={<GlassWatermark text="03" position="right" />}
    >
      <div className="flex w-full flex-col gap-6">
        <GlassHeading decorated>{t("projectsTitle")}</GlassHeading>
        <GlassCarousel
          items={projects.map((project) => ({
            id: project.id,
            content: <ProjectCard project={project} />,
          }))}
          previousLabel={t("previousProject")}
          nextLabel={t("nextProject")}
        />
      </div>
    </GlassSection>
  );
};
