/**
 * @file section-03.tsx
 * @description Fragmento de la sección 03 de la página principal.
 */

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";

interface Section03Props {
  readonly anchorId?: string;
}

export const Section03: React.FC<Section03Props> = ({ anchorId }) => {
  return (
    <SnapPage id="03" anchorId={anchorId}>
      {/* Children content */}
      section 03
    </SnapPage>
  );
};
