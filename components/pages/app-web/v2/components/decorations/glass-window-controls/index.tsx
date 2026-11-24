/**
 * @file index.tsx
 * @description Botones decorativos de ventana estilo macOS (cerrar, minimizar, maximizar).
 */

// Import of utilities
import { cn } from "@/lib/utils";

/** Colores de sistema de macOS (decorativos, no dependen del tema) */
const WINDOW_DOTS = ["bg-[#ff5f57]", "bg-[#febc2e]", "bg-[#28c840]"] as const;

export function GlassWindowControls({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <span aria-hidden="true" className={cn("flex shrink-0 gap-1.5", className)}>
      {WINDOW_DOTS.map((dot) => (
        <span key={dot} className={cn("size-2.5 rounded-full", dot)} />
      ))}
    </span>
  );
}
