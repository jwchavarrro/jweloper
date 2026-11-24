/**
 * @file index.tsx
 * @description Template de sección del sistema glass: pantalla completa con snap.
 * `background` permite colocar decoraciones detrás del contenido.
 */

// Import of utilities
import { cn } from "@/lib/utils";

export interface GlassSectionProps {
  /** Id para enlazar la sección por hash */
  readonly anchorId?: string;
  /** Decoraciones de fondo (posicionadas por quien las pasa) */
  readonly background?: React.ReactNode;
  readonly className?: string;
  readonly children: React.ReactNode;
}

export function GlassSection({
  anchorId,
  background,
  className,
  children,
}: Readonly<GlassSectionProps>) {
  return (
    <section
      id={anchorId}
      className={cn(
        "relative mx-auto flex min-h-[calc(100dvh-96px)] w-full max-w-6xl snap-start items-center px-4 py-10 md:px-10",
        className
      )}
    >
      {background}
      {children}
    </section>
  );
}
