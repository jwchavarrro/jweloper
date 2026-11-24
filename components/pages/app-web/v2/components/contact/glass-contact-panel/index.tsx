/**
 * @file index.tsx
 * @description Panel de contacto en vidrio: texto, enlaces a redes y acceso a la versión anterior.
 */

"use client";

import { useTranslations } from "next-intl";

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";
import { GlassSurface } from "@/components/glass-design/atoms";
import { GlassButton } from "@/components/glass-design/molecules";

// Import of utilities
import { ICONS } from "@/config";

// Import of types
import type { SocialMediaType } from "@/app/utils/types";

export interface GlassContactPanelProps {
  readonly links: Pick<SocialMediaType, "name" | "url" | "icon">[];
  /** Versión actual mostrada junto al enlace a la anterior */
  readonly version: string;
  /** Acción para volver a la versión anterior (v1) */
  readonly onShowPreviousVersion: () => void;
}

export function GlassContactPanel({
  links,
  version,
  onShowPreviousVersion,
}: Readonly<GlassContactPanelProps>) {
  const t = useTranslations("appWeb");

  return (
    <GlassSurface className="flex flex-col gap-6 rounded-[2rem] p-6 md:p-10">
      <Typography className="font-accent text-base md:text-lg">
        {t("contactText")}
      </Typography>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.name}>
            <GlassButton
              href={link.url}
              icon={link.icon}
              trailingIcon={ICONS.OPEN_IN_NEW}
              className="w-full"
            >
              {link.name}
            </GlassButton>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onShowPreviousVersion}
        className="w-fit cursor-pointer text-xs text-muted-foreground hover:text-foreground hover:underline"
      >
        {version} | {t("viewPreviousVersion")} →
      </button>
    </GlassSurface>
  );
}
