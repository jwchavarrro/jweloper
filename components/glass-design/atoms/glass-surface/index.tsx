/**
 * @file index.tsx
 * @description Átomo base del sistema glass: superficie de vidrio (Liquid Glass).
 * Aplica las utilidades `glass` + `glass-liquid` (app/globals.css).
 */

// Import of utilities
import { cn } from "@/lib/utils";

/**
 * @name GLASS_SURFACE_CLASSES
 * @description Clases base de toda superficie de vidrio. Úsalas en elementos que
 * no pueden ser `GlassSurface` (botones, enlaces).
 */
export const GLASS_SURFACE_CLASSES = "relative glass glass-liquid";

const GLASS_ELEMENTS = {
  div: "div",
  article: "article",
  ul: "ul",
} as const;

export interface GlassSurfaceProps extends React.HTMLAttributes<HTMLElement> {
  /** Elemento HTML a renderizar (por defecto `div`) */
  readonly as?: keyof typeof GLASS_ELEMENTS;
}

export function GlassSurface({
  as = "div",
  className,
  ...props
}: Readonly<GlassSurfaceProps>) {
  const Element = GLASS_ELEMENTS[as];
  return (
    <Element className={cn(GLASS_SURFACE_CLASSES, className)} {...props} />
  );
}
