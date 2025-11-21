/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

// Import of components custom
import {
  Section01,
  Section02,
  Section03,
  Section04,
} from "@/components/pages/app-web/fragments";

export default function AppWeb() {
  return (
    <div className="h-[calc(100vh-96px)] snap-y snap-mandatory overflow-y-scroll">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
    </div>
  );
}
