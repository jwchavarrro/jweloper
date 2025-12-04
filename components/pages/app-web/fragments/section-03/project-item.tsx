/**
 * @file project-item.tsx
 * @description Componente para renderizar un item de proyecto en el carousel.
 */

"use client";

import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

// Import of components
import { Title, Text } from "@/components/atomic-design/atoms";

// Import of types
import type { ProjectItemData } from "@/components/pages/app-web";

interface ProjectItemProps {
  readonly project: ProjectItemData;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="space-y-4 h-full">
      {/* Title and Link */}
      <div>
        <Title level={3} className="text-xl! md:text-3xl! lg:text-4xl!">
          {project.name}
        </Title>
        {project.url && project.url !== "#" && (
          <div className="flex items-center gap-2">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Text variant="small">Ver demo</Text>
              <ExternalLinkIcon className="size-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Description */}
      <Text variant="small" className="text-muted-foreground">
        {project.description}
      </Text>
    </div>
  );
};

