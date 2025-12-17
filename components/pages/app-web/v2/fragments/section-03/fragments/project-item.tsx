/**
 * @file project-item.tsx
 * @description Componente para renderizar un item de proyecto en el carousel.
 */

"use client";
import { motion } from "motion/react";

// Import of components
import { Text } from "@/components/atomic-design/atoms";

// Import of custom hooks
import { useIsMobile } from "@/hooks";

// Import of types
import type { ProjectItemData } from "@/components/pages/app-web";

interface ProjectItemProps {
  readonly project: ProjectItemData;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      whileHover={{
        scale: isMobile ? 1 : 1.05,
        rotate: isMobile ? 0 : 2,
        cursor: isMobile ? "default" : "pointer",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Children content */}
      <div className="bg-[#232a33] rounded-lg p-4 w-full flex flex-col gap-3 shadow-lg border border-[#393d42]">
        <header className="flex items-center justify-between gap-2">
          <Text variant="small" className="text-white">
            {project.name}
          </Text>
          {/* Icono de ventana */}
          <div className="flex items-center mb-3">
            {[
              { color: "#fc544b", key: "red" },
              { color: "#ffbc2d", key: "yellow" },
              { color: "#4bc559", key: "green" },
            ].map(({ color, key }, idx) => (
              <span
                key={key}
                className={`h-3 w-3 rounded-full mr-2 inline-block ${idx === 2 ? " mr-0" : ""}`}
                style={{
                  backgroundColor: color,
                  marginRight: idx === 2 ? 0 : "0.5rem",
                }}
              />
            ))}
          </div>
        </header>
        {/* Código JSON de ejemplo */}
        <div className="text-wrap">
          <pre className="text-xs text-wrap p-3 overflow-x-auto select-text text-white">
            {`{
  "name": "${project.name}",
  "description": "${project.description}"
  "url": "${project.url}"
  "language": "HTML, CSS, JavaScript"
}`}
          </pre>
        </div>
      </div>
    </motion.div>
  );
};
