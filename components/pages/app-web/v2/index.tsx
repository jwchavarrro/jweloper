/**
 * @file index.tsx
 * @description Componente principal para la versión 2 de la página principal.
 */

"use client";

import React from "react";

// Import of components custom
import {
  Section01,
  Section02,
  Section03,
  Section04,
} from "@/components/pages/app-web/fragments";

export const AppWebV2: React.FC = () => {
  return (
    <div>
      <Section01 />
      <Section02 anchorId="experiencia" />
      <Section03 anchorId="proyectos" />
      <Section04 anchorId="contacto" />
    </div>
  );
};
