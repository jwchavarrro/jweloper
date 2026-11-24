/**
 * @file index.tsx
 * @description Texto decorativo grande de fondo (marca de agua). Oculto para lectores de pantalla.
 */

// Import of utilities
import { cn } from "@/lib/utils";

const WATERMARK_POSITIONS = {
  left: "left-4 md:left-10",
  right: "right-4 md:right-10",
} as const;

export interface GlassWatermarkProps {
  readonly text: string;
  /** Esquina inferior donde se coloca */
  readonly position?: keyof typeof WATERMARK_POSITIONS;
  readonly className?: string;
}

export function GlassWatermark({
  text,
  position = "left",
  className,
}: Readonly<GlassWatermarkProps>) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute bottom-4 font-title text-7xl leading-none text-foreground/10 select-none md:text-9xl",
        WATERMARK_POSITIONS[position],
        className
      )}
    >
      {text}
    </span>
  );
}
