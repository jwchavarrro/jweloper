/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

"use client";

// Import of components custom
import { AppWebV1, AppWebV2 } from "@/components/pages/app-web";

// Import of hooks
import { useAppSelector } from "@/store/hooks";

export default function AppWeb() {
  /**
   * @name selectedVersion
   * @description Versión seleccionada del estado de Redux.
   * @type {VersionType}
   */
  const selectedVersion = useAppSelector(
    (state) => state.version.selectedVersion
  );

  return (
    <div className="relative h-[calc(100dvh-96px)]">
      {selectedVersion === "v1" ? <AppWebV1 /> : <AppWebV2 />}
    </div>
  );
}
