/**
 * @file index.tsx
 * @description Sección 02 (v2): experiencia profesional en la ventana de código de vidrio.
 */

"use client";

import { useTranslations } from "next-intl";
import { FileCodeIcon } from "lucide-react";

// Import of components custom
import { GlassSection, GlassHeading } from "@/components/glass-design";
import {
  GlassCodeWindow,
  GlassWatermark,
} from "@/components/pages/app-web/v2/components";

// Import of custom hooks
import { useExperiences } from "@/components/pages/app-web";

// Import of types
import type { FileItem } from "@/components/pages/app-web/v2/components";

interface Section02Props {
  readonly anchorId?: string;
}

export const Section02: React.FC<Section02Props> = ({ anchorId }) => {
  const t = useTranslations("appWeb");
  const experiences = useExperiences();

  const files: FileItem[] = [
    {
      name: "experiences.json",
      content: JSON.stringify({ experiences }, null, 2),
      language: "json",
      icon: <FileCodeIcon className="size-4 text-green-500" />,
    },
  ];

  return (
    <GlassSection anchorId={anchorId} background={<GlassWatermark text="02" />}>
      <div className="grid w-full grid-cols-1 items-center gap-8 xl:grid-cols-3">
        <GlassHeading align="right" decorated>
          {t("experienceTitle")}
        </GlassHeading>
        <GlassCodeWindow
          files={files}
          className="xl:col-span-2 h-[70dvh] max-h-[600px]"
        />
      </div>
    </GlassSection>
  );
};
