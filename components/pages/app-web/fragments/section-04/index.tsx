/**
 * @file section-04.tsx
 * @description Fragmento de la sección 04 de la página principal.
 */

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";

interface Section04Props {
  readonly anchorId?: string;
}

export const Section04: React.FC<Section04Props> = ({ anchorId }) => {
  return (
    <SnapPage id="04" anchorId={anchorId}>
      {/* Children content */}
      section 04
    </SnapPage>
  );
};
