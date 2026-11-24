/**
 * @file index.tsx
 * @description Encabezado del sistema glass. Tamaño por nivel y decoración opcional
 * estilo código (`<Texto/>`).
 */

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

const HEADING_LEVELS = {
  1: { variant: "h1", size: "text-4xl md:text-6xl lg:text-7xl" },
  2: { variant: "h2", size: "text-4xl md:text-6xl" },
  3: { variant: "h3", size: "text-2xl md:text-3xl" },
} as const;

const HEADING_ALIGN = {
  left: "",
  center: "text-center",
  right: "xl:text-right",
} as const;

export interface GlassHeadingProps {
  /** Texto ya traducido */
  readonly children: string;
  readonly level?: keyof typeof HEADING_LEVELS;
  readonly align?: keyof typeof HEADING_ALIGN;
  /** Envuelve el texto como etiqueta de código: `<Texto/>` */
  readonly decorated?: boolean;
  readonly className?: string;
}

export function GlassHeading({
  children,
  level = 2,
  align = "left",
  decorated = false,
  className,
}: Readonly<GlassHeadingProps>) {
  const { variant, size } = HEADING_LEVELS[level];
  return (
    <Typography
      variant={variant}
      className={cn("border-0", size, HEADING_ALIGN[align], className)}
    >
      {decorated ? `<${children}/>` : children}
    </Typography>
  );
}
