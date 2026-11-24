/**
 * @file index.tsx
 * @description Versión 2 de app-web (Liquid Glass). Usa solo el sistema `glass-design`.
 */

"use client";

// Import of components custom
import {
  GlassBackdrop,
  GlassDistortionFilter,
} from "@/components/glass-design";

// Import of fragments
import {
  Section01,
  Section02,
  Section03,
  Section04,
} from "@/components/pages/app-web/v2/fragments";

export const AppWebV2: React.FC = () => {
  return (
    <div className="relative isolate h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth [scrollbar-width:none]">
      <GlassDistortionFilter />
      <GlassBackdrop className="fixed" />
      <Section01 />
      <Section02 anchorId="experiencia" />
      <Section03 anchorId="proyectos" />
      <Section04 anchorId="contacto" />
    </div>
  );
};
