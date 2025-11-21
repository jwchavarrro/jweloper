/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

// Import of components custom
import { Section01 } from "@/components/pages/app-web/fragments";

export default function AppWeb() {
  return (
    <div className="h-[calc(100vh-96px)]">
      <Section01 />
    </div>
  );
}
