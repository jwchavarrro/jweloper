/**
 * @file section-02.tsx
 * @description Fragmento de la sección 02 de la página principal.
 */

"use client";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title } from "@/components/atomic-design/atoms";

interface Section02Props {
  readonly anchorId?: string;
}

export const Section02: React.FC<Section02Props> = ({ anchorId }) => {
  return (
    <SnapPage id="02" anchorId={anchorId}>
      {/* Children content */}
      <div className="h-full absolute inset-0 grid grid-cols-1 xl:grid-cols-3 gap-[5%]">
        {/* Column 1 - Title */}
        <div className="h-full flex items-center justify-end">
          <Title
            variant="gradient"
            className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap text-right max-w-xl"
          >
            Experiencia Pro
          </Title>
        </div>

        {/* Column 2 - Content */}
        <div className="col-span-2 h-full overflow-y-auto">
          <div className="h-full"></div>
        </div>
      </div>
    </SnapPage>
  );
};
