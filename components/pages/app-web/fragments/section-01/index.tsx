"use client";

/**
 * @file section-01.tsx
 * @description Fragmento de la sección 01 de la página principal.
 */

import { useState } from "react";
import { Icon } from "@iconify/react";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title, Text } from "@/components/atomic-design/atoms";
import { CounterIndicator } from "@/components/atomic-design/molecules";

// Import of hooks
import { useDownloadFile, EnumDownloadStatus } from "@/hooks";

// Import of utilities
import { SKILLS } from "@/components/pages/app-web/utils/constants";

// Import of types
import { SkillType } from "@/components/pages/app-web";

interface Section01Props {
  readonly anchorId?: string;
}

export const Section01: React.FC<Section01Props> = ({ anchorId }) => {
  // States generals
  const [showExperience, setShowExperience] = useState<string>("+3");

  // Implementation of custom hooks
  const { downloadFile, state } = useDownloadFile();

  // Handlers
  /**
   * @name handleMouseEnter
   * @description Manejador para el evento de mouse enter.
   * @param {string} experience - La experiencia a mostrar.
   */
  const handleMouseEnter = (experience: string) => {
    setShowExperience(experience);
  };

  /**
   * @name handleMouseLeave
   * @description Manejador para el evento de mouse leave.
   */
  const handleMouseLeave = () => {
    setShowExperience("+3");
  };

  /**
   * @name handleDownloadCV
   * @description Manejador para descargar el CV.
   */
  const handleDownloadCV = () => {
    downloadFile(
      "/docs/CV JOHN CHAVARRO 2025.pdf",
      "CV_JOHN_CHAVARRO_2025.pdf"
    );
  };

  return (
    <SnapPage id="01" anchorId={anchorId}>
      {/* Children content */}
      <div className="absolute inset-0 grid grid-cols-1 xl:grid-cols-2 content-center gap-[5%]">
        {/* Column 1 - Image */}
        <div className="flex items-center justify-center xl:justify-end">
          <div className="size-64 xl:size-96 bg-foreground rounded-full">
            <div className="absolute -top-5 right-0">
              <CounterIndicator
                value={showExperience}
                className="text-[7rem]! md:text-[10rem]! 2xl:text-[18rem]!"
              >
                <Text
                  variant="lead"
                  className="-mt-5! md:-mt-10! text-sm! md:text-base!"
                >
                  años de experiencia
                </Text>
              </CounterIndicator>
            </div>
          </div>
        </div>

        {/* Column 2 - Content */}
        <div className="space-y-5">
          <div>
            <Title
              variant="gradient"
              className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap text-center xl:text-left"
            >
              Desarrollador Frontend
            </Title>
            <Title
              variant="gradient"
              className="text-xl! tracking-widest font-accent text-center xl:text-left"
            >
              Sensible al frontend |{" "}
              <button
                type="button"
                onClick={handleDownloadCV}
                disabled={state.status === EnumDownloadStatus.LOADING}
                className="font-title cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.status === EnumDownloadStatus.LOADING
                  ? "Descargando..."
                  : "Descargar CV"}
              </button>
              {state.status === EnumDownloadStatus.ERROR && (
                <span className="block text-sm text-destructive mt-1">
                  {state.error}
                </span>
              )}
            </Title>
          </div>
          <div className="py-5 flex flex-wrap gap-3 xl:gap-5 items-center justify-center xl:justify-start">
            {SKILLS.map((skill: SkillType, idx: number) => (
              <Icon
                key={`${skill.name}-${idx}`}
                icon={skill.icon}
                className="size-6 md:size-8 xl:size-10 2xl:size-12 text-foreground hover:scale-110 hover:translate-y-3 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(skill.experience)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </SnapPage>
  );
};
