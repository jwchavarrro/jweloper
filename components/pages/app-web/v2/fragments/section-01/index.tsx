/**
 * @file index.tsx
 * @description Sección 01 (v2): presentación, descarga de CV y tecnologías.
 */

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";
import {
  GlassButton,
  GlassHeading,
  GlassSection,
  GlassSurface,
} from "@/components/glass-design";
import {
  GlassSkillTray,
  GlassStat,
  GlassWatermark,
} from "@/components/pages/app-web/v2/components";

// Import of custom hooks
import { EnumDownloadStatus, useDownloadFile } from "@/hooks";

// Import of utilities
import { ICONS, MULTIMEDIA } from "@/config";
import { CV_FILE, SKILLS } from "@/components/pages/app-web/utils/constants";

/** Experiencia mostrada cuando no hay una tecnología activa */
const DEFAULT_EXPERIENCE = "+3";

interface Section01Props {
  readonly anchorId?: string;
}

export const Section01: React.FC<Section01Props> = ({ anchorId }) => {
  const t = useTranslations("appWeb");
  const [experience, setExperience] = useState(DEFAULT_EXPERIENCE);
  const { downloadFile, state } = useDownloadFile();
  const isDownloading = state.status === EnumDownloadStatus.LOADING;

  return (
    <GlassSection anchorId={anchorId} background={<GlassWatermark text="01" />}>
      <div className="grid w-full grid-cols-1 items-center gap-10 xl:grid-cols-2">
        {/* Foto */}
        <div className="relative mx-auto flex items-center justify-center">
          <GlassSurface className="flex size-56 items-center justify-center rounded-full md:size-96">
            <div className="relative size-44 md:size-80">
              <Image
                src={MULTIMEDIA.BACKGROUNDS.PHOTO_PROFILE}
                alt="John Chavarro Urrea"
                fill
                priority
                className="object-contain drop-shadow-lg"
              />
            </div>
          </GlassSurface>
          <GlassStat
            value={experience}
            label={t("yearsOfExperience")}
            className="absolute -right-4 -bottom-2 z-10 md:-right-10 md:bottom-6"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-6 text-center xl:text-left">
          <GlassHeading level={1} decorated>
            {t("greeting")}
          </GlassHeading>
          <div className="flex flex-col items-center gap-4 md:flex-row xl:items-center">
            <Typography
              variant="small"
              className="font-accent text-sm tracking-[0.2em] uppercase"
            >
              {t("role")}
            </Typography>
            <GlassButton
              icon={ICONS.ARROW_RIGHT_01}
              onClick={() => downloadFile(CV_FILE.path, CV_FILE.name)}
              disabled={isDownloading}
            >
              {isDownloading ? t("downloading") : t("downloadCv")}
            </GlassButton>
          </div>
          {state.status === EnumDownloadStatus.ERROR && (
            <Typography
              variant="muted"
              role="alert"
              className="text-destructive"
            >
              {t("downloadError")}
            </Typography>
          )}
          <GlassSkillTray
            skills={SKILLS}
            label={t("skillsLabel")}
            onHighlight={(value) => setExperience(value ?? DEFAULT_EXPERIENCE)}
          />
        </div>
      </div>
    </GlassSection>
  );
};
