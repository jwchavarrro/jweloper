/**
 * @file section-03.tsx
 * @description Fragmento de la sección 03 de la página principal.
 */

"use client";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Carousel } from "@/components/atomic-design/organism";
import { Title } from "@/components/atomic-design/atoms";

// Import of utilities
import { useIsMobile } from "@/hooks/use-mobile";

interface Section03Props {
  readonly anchorId?: string;
}

export const Section03: React.FC<Section03Props> = ({ anchorId }) => {
  const isMobile = useIsMobile();

  return (
    <SnapPage id="03" anchorId={anchorId} hideCounter={isMobile}>
      {/* Children content */}
      <div className="h-full absolute inset-0 grid grid-cols-1 xl:grid-cols-3 gap-[5%]">
        {/* Column 1 - Content */}
        <div className="order-2 md:order-1 col-span-2 h-full overflow-hidden">
          <Carousel
            items={[]}
            orientation="horizontal"
            contentClassName="h-full"
            itemClassName="h-full"
            showNavigation={true}
          />
        </div>

        {/* Column 2 - Title */}
        <div className="order-1 md:order-2 h-full flex items-center justify-center">
          <Title
            variant="gradient"
            className="text-3xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap lg:text-left max-w-xl"
          >
            Proyectos destacados
          </Title>
        </div>
      </div>
    </SnapPage>
  );
};
