/**
 * @file section-01.tsx
 * @description Fragmento de la sección 01 de la página principal.
 */

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title } from "@/components/atomic-design/atoms";

export const Section01 = () => {
  return (
    <SnapPage id="01">
      {/* Children content */}
      <div className="absolute inset-0 grid grid-cols-1 xl:grid-cols-2 content-center gap-2 animate-in slide-in-from-top-10 duration-300 ease-in-out">
        {/* Column 1 - Image */}
        <div className="size-full flex items-center justify-center">
          <div className="size-64 xl:size-96 bg-foreground" />
        </div>

        {/* Column 2 - Content */}
        <div className="max-w-2xl space-y-5">
          <div className="space-y-2">
            <Title
              variant="gradient"
              className="text-5xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap"
            >
              Desarrollador Frontend
            </Title>
            <Title
              variant="gradient"
              className="text-5xl! tracking-widest font-accent"
            >
              Sensible al frontend
            </Title>
          </div>
          <div className="flex flex-col xl:flex-row gap-2"></div>
        </div>
      </div>
    </SnapPage>
  );
};
