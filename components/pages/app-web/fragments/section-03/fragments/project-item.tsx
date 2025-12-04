/**
 * @file project-item.tsx
 * @description Componente para renderizar un item de proyecto en el carousel.
 */

"use client";

import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

// Import of components
import { Card } from "@/components/atomic-design/molecules";
import { Title, Text } from "@/components/atomic-design/atoms";

// Import of types
import type { ProjectItemData } from "@/components/pages/app-web";

interface ProjectItemProps {
  readonly project: ProjectItemData;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const headerAction =
    project.url && project.url !== "#" ? (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
      >
        <Text variant="small">Ver demo</Text>
        <ExternalLinkIcon className="size-4" />
      </Link>
    ) : undefined;

  return (
    <Card
      showHeaderAction={!!headerAction}
      headerAction={headerAction}
      className="h-full"
    >
      <div className="space-y-4">
        <Title level={3} className="text-xl! md:text-3xl! lg:text-4xl!">
          {project.name}
        </Title>
        <Text variant="small" className="text-muted-foreground">
          {project.description}
        </Text>
      </div>
    </Card>
  );
};
