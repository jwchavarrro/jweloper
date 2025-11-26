/**
 * @file section-02.tsx
 * @description Fragmento de la sección 02 de la página principal.
 */

// Import of components custom
import { Title } from "@/components/atomic-design/atoms";
import { SnapPage } from "@/components/atomic-design/templates";

interface Section02Props {
  readonly anchorId?: string;
}

export const Section02: React.FC<Section02Props> = ({ anchorId }) => {
  return (
    <SnapPage id="02" anchorId={anchorId}>
      {/* Children content */}
      <div className="absolute inset-0 grid grid-cols-1 xl:grid-cols-3 content-center gap-[5%]">
        <div>
          <Title
            variant="gradient"
            className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap text-center xl:text-right"
          >
            Proyectos destacados
          </Title>
        </div>
        <div className="col-span-2 border">Proyectos</div>
      </div>
    </SnapPage>
  );
};
