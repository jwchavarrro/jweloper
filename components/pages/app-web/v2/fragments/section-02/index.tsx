/**
 * @file section-02.tsx
 * @description Fragmento de la sección 02 de la página principal.
 */

"use client";

import React from "react";
import { motion } from "motion/react";
import { FileCodeIcon } from "lucide-react";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title } from "@/components/atomic-design/atoms";
import { CodeEditor } from "@/components/pages/app-web/components";

// Import of utilities
import {
  EXPERIENCES_APP_WEB,
  type ExperienceType,
} from "@/components/pages/app-web";

// Import of hooks
import { useIsMobile } from "@/hooks/use-mobile";

// Import of types
import type { FileItem } from "@/components/pages/app-web/components/code-editor/utils";

interface Section02Props {
  readonly anchorId?: string;
}

/**
 * @name formatExperiencesAsJSON
 * @description Formatea la lista de experiencias profesionales como JSON con indentación
 * @param {ExperienceType[]} experiences - Lista de experiencias profesionales
 * @returns {string} - JSON formateado con indentación y espacios
 */
const formatExperiencesAsJSON = (experiences: ExperienceType[]): string => {
  return JSON.stringify({ experiences }, null, 2);
};

export const Section02: React.FC<Section02Props> = ({ anchorId }) => {
  // Implementation of custom hooks
  const isMobile = useIsMobile();

  // Generar el código JSON de EXPERIENCES
  const experiencesJSON = React.useMemo(
    () => formatExperiencesAsJSON(EXPERIENCES_APP_WEB),
    []
  );

  // Configurar archivos para el editor
  const editorFiles: FileItem[] = React.useMemo(
    () => [
      {
        name: "experiences.json",
        content: experiencesJSON,
        language: "json",
        icon: <FileCodeIcon className="size-4 text-green-400" />,
      },
    ],
    [experiencesJSON]
  );

  return (
    <SnapPage
      id="02"
      anchorId={anchorId}
      hideCounter={isMobile}
      hideScrollIndicator={isMobile}
    >
      {/* Children content */}
      <div className="h-full absolute inset-0 grid grid-cols-1 xl:grid-cols-3 gap-2 lg:gap-[5%]">
        {/* Column 1 - Title */}
        <div className="h-full flex items-center justify-center lg:justify-end">
          <Title
            variant="gradient"
            className="text-3xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap lg:text-right max-w-xl"
          >
            {"<Experiencia Pro/>"}
          </Title>
        </div>

        {/* Column 2 - Content */}
        <motion.div
          className="col-span-2 h-full overflow-hidden"
          initial={{ translateX: -250, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-250px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <CodeEditor
            files={editorFiles}
            language="json"
            showSidebar={!isMobile}
            className="h-full"
          />
        </motion.div>
      </div>
    </SnapPage>
  );
};
