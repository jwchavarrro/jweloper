/**
 * @file section-04.tsx
 * @description Fragmento de la sección 04 de la página principal.
 */

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
      <div className="absolute inset-0 flex flex-col items-center">
        <div>
          <Title
            variant="gradient"
            className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap text-center xl:text-right max-w-xl"
          >
            Contacto
          </Title>
        </div>
      </div>
    </SnapPage>
  );
};
