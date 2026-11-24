/**
 * @file index.tsx
 * @description Sección 04 (v2): contacto en un panel de vidrio.
 */

"use client";

import { useTranslations } from "next-intl";

// Import of components custom
import { GlassSection, GlassHeading } from "@/components/glass-design";
import {
  GlassContactPanel,
  GlassWatermark,
} from "@/components/pages/app-web/v2/components";

// Import of utilities
import { SOCIAL_MEDIA } from "@/app/utils/constants";
import { APP_WEB_VERSIONS } from "@/components/pages/app-web/utils/constants";

// Import of store
import { useAppDispatch } from "@/store/hooks";
import { setVersion } from "@/store/slices/versionSlice";

interface Section04Props {
  readonly anchorId?: string;
}

export const Section04: React.FC<Section04Props> = ({ anchorId }) => {
  const t = useTranslations("appWeb");
  const dispatch = useAppDispatch();

  return (
    <GlassSection anchorId={anchorId} background={<GlassWatermark text="04" />}>
      <div className="grid w-full grid-cols-1 items-center gap-8 xl:grid-cols-3">
        <GlassHeading align="right" decorated>
          {t("contactTitle")}
        </GlassHeading>
        <div className="xl:col-span-2">
          <GlassContactPanel
            links={SOCIAL_MEDIA}
            version={APP_WEB_VERSIONS.V2}
            onShowPreviousVersion={() => dispatch(setVersion("v1"))}
          />
        </div>
      </div>
    </GlassSection>
  );
};
