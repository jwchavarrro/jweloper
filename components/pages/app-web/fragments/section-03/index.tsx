/**
 * @file section-03.tsx
 * @description Fragmento de la sección 03 de la página principal.
 */

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title } from "@/components/atomic-design/atoms";

interface Section03Props {
  readonly anchorId?: string;
}

export const Section03: React.FC<Section03Props> = ({ anchorId }) => {
  return (
    <SnapPage id="03" anchorId={anchorId}>
      {/* Children content */}
      <div className="absolute inset-0 flex flex-col items-center">
        <div>
          <Title
            variant="gradient"
            className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap text-center xl:text-right max-w-xl"
          >
            Proyectos destacados
          </Title>
        </div>
      </div>
    </SnapPage>
  );
};
