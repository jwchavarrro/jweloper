/**
 * @file section-02.tsx
 * @description Fragmento de la sección 02 de la página principal.
 */

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";

interface Section02Props {
  readonly anchorId?: string;
}

export const Section02: React.FC<Section02Props> = ({ anchorId }) => {
  return (
    <SnapPage id="02" anchorId={anchorId}>
      {/* Children content */}
      section 02
    </SnapPage>
  );
};
