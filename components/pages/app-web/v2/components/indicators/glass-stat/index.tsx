/**
 * @file index.tsx
 * @description Indicador pill de vidrio: valor grande + etiqueta (ej: "+3 años de experiencia").
 */

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";
import { GlassSurface } from "@/components/glass-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

export interface GlassStatProps {
  readonly value: string;
  readonly label: string;
  readonly className?: string;
}

export function GlassStat({
  value,
  label,
  className,
}: Readonly<GlassStatProps>) {
  return (
    <GlassSurface
      className={cn(
        "flex items-baseline gap-2 rounded-full px-5 py-3",
        className
      )}
    >
      <Typography
        variant="large"
        className="font-title text-3xl leading-none font-normal md:text-5xl"
      >
        {value}
      </Typography>
      <Typography variant="muted" className="text-xs md:text-sm">
        {label}
      </Typography>
    </GlassSurface>
  );
}
