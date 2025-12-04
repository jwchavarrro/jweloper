/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

"use client";

// Import of components custom
import {
  Section01,
  Section02,
  Section03,
  Section04,
} from "@/components/pages/app-web/fragments";

export default function AppWeb() {
  return (
    <div
      className="h-[calc(100dvh-96px)] space-y-10 "
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        overflowY: "scroll",
      }}
    >
      <Section01 />
      <Section02 anchorId="experiencia" />
      <Section03 anchorId="proyectos" />
      <Section04 anchorId="contacto" />
    </div>
  );
}
