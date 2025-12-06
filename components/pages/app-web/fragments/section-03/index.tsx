/**
 * @file section-03.tsx
 * @description Fragmento de la sección 03 de la página principal.
 */

"use client";

import { motion } from "motion/react";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Carousel } from "@/components/atomic-design/organism";
import { ProjectItem } from "./fragments";
import { Title } from "@/components/atomic-design/atoms";

// Import of custom hooks
import { useIsMobile } from "@/hooks/use-mobile";

// Import of utilities
import { PROJECTS_DATA } from "@/components/pages/app-web/utils";

interface Section03Props {
  readonly anchorId?: string;
}

export const Section03: React.FC<Section03Props> = ({ anchorId }) => {
  const isMobile = useIsMobile();

  return (
    <SnapPage id="03" anchorId={anchorId} hideCounter={isMobile}>
      {/* Children content */}
      <div className="h-full absolute inset-0 grid grid-cols-1 lg:grid-cols-3  gap-2 lg:gap-[5%]">
        {/* Column 1 - Content */}
        <motion.div
          className="order-2 md:order-1 col-span-2 h-full"
          initial={{ translateX: -250, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-250px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="mx-auto w-4/5 h-full flex items-center justify-center">
            <Carousel
              items={PROJECTS_DATA?.map((project) => ({
                content: <ProjectItem project={project} />,
              }))}
              contentClassName="overflow-visible py-[8%] px-[1%]"
              itemClassName="md:basis-1/2 "
            />
          </div>
        </motion.div>

        {/* Column 2 - Title */}
        <div className="order-1 md:order-2 lg:h-full flex items-center justify-center">
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
