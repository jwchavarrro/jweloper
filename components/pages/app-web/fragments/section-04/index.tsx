/**
 * @file section-04.tsx
 * @description Fragmento de la sección 04 de la página principal.
 */

"use client";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title } from "@/components/atomic-design/atoms";

interface Section04Props {
  readonly anchorId?: string;
}

export const Section04: React.FC<Section04Props> = ({ anchorId }) => {
  return (
    <SnapPage id="04" anchorId={anchorId}>
      {/* Children content */}
      <div className="h-full absolute inset-0 grid grid-cols-1 xl:grid-cols-3 gap-[5%]">
        {/* Column 1 - Title */}
        <div className="h-full flex items-center justify-end">
          <Title
            variant="gradient"
            className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-right max-w-xl"
          >
            Contacto
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
