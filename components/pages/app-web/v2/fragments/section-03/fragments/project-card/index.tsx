/**
 * @file index.tsx
 * @description Tarjeta de un proyecto (sección 03, v2): contenido de dominio sobre `GlassCard`.
 */

"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

// Import of components custom
import { Icon, Typography } from "@/components/atomic-design/atoms";
import { GlassCard, GlassChip } from "@/components/glass-design";
import { GlassWindowControls } from "@/components/pages/app-web/v2/components";

// Import of utilities
import { ICONS } from "@/config";

// Import of types
import type { ProjectType } from "@/components/pages/app-web";

export interface ProjectCardProps {
  readonly project: Pick<
    ProjectType,
    "name" | "description" | "url" | "tecnologies"
  >;
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  const t = useTranslations("appWeb");

  return (
    <GlassCard
      title={project.name}
      headerAction={<GlassWindowControls className="mt-1.5" />}
      footer={
        <>
          <div className="flex flex-wrap gap-1.5">
            {project.tecnologies.map((technology) => (
              <GlassChip key={technology}>{technology}</GlassChip>
            ))}
          </div>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-bold hover:underline"
            >
              {t("viewProject")}
              <Icon icon={ICONS.OPEN_IN_NEW} className="size-4" aria-hidden />
            </Link>
          )}
        </>
      }
    >
      <Typography variant="small" className="leading-relaxed">
        {project.description}
      </Typography>
    </GlassCard>
  );
}
