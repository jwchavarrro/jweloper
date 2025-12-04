/**
 * @file section-01.tsx
 * @description Fragmento de la sección 01 de la página principal.
 */

"use client";

import { AnimatePresence, motion } from "motion/react";
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
    <motion.section
      initial={{ opacity: 0, translateY: -100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <SnapPage id="01" anchorId={anchorId}>
        {/* Children content */}
        {/* Background counter indicator */}
        <div className="absolute -top-2 right-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={showExperience}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <CounterIndicator
                value={showExperience}
                className="text-[5rem]! md:text-[10rem]! 2xl:text-[18rem]!"
              >
                <Text
                  variant="lead"
                  className="-mt-4! md:-mt-10! text-sm! md:text-base!"
                >
                  años de experiencia
                </Text>
              </CounterIndicator>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="absolute inset-0 grid grid-cols-1 xl:grid-cols-2 content-center gap-[5%]">
          {/* Column 1 - Image */}
          <div className="flex items-center justify-center xl:justify-end">
            <div className="size-64 xl:size-96 bg-foreground rounded-full" />
          </div>

          {/* Column 2 - Content */}
          <div className="space-y-2">
            <div>
              <Title
                variant="gradient"
                className="text-3xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap text-center xl:text-left max-w-xl"
              >
                Hola, soy John Chavarro Urrea
              </Title>
              <Title
                variant="gradient"
                className="text-lg! md:text-xl! tracking-widest font-accent text-center xl:text-left"
              >
                Desarrollador Frontend |{" "}
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
                <motion.div
                  key={`${skill.name}-${idx}`}
                  whileHover={{ scale: 1.05, rotate: -10 }}
                  whileTap={{ scale: 0.95, rotate: 0 }}
                >
                  <Icon
                    icon={skill.icon}
                    className="size-6 md:size-8 xl:size-10 text-foreground cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(skill.experience)}
                    onMouseLeave={handleMouseLeave}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SnapPage>
    </motion.section>
  );
};
