/**
 * @file index.tsx
 * @description Átomo de tipografía. Extiende los primitivos de `ui/typography` (shadcn)
 * con las fuentes y colores del proyecto. Reemplaza a los antiguos Text y Title.
 */

import * as React from "react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";

// Import of utilities
import { cn } from "@/lib/utils";

/**
 * @name TYPOGRAPHY_VARIANTS
 * @description Primitivo base de shadcn para cada variante.
 */
const TYPOGRAPHY_VARIANTS = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  lead: TypographyLead,
  large: TypographyLarge,
  small: TypographySmall,
  muted: TypographyMuted,
} as const;

/**
 * @name TYPOGRAPHY_COLORS
 * @description Clases de color disponibles.
 */
const TYPOGRAPHY_COLORS = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary-foreground",
  accent: "text-accent-foreground",
  gradient:
    "bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",
} as const;

const HEADING_VARIANTS = new Set(["h1", "h2", "h3", "h4"]);

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  readonly variant?: keyof typeof TYPOGRAPHY_VARIANTS;
  readonly color?: keyof typeof TYPOGRAPHY_COLORS;
}

export function Typography({
  variant = "p",
  color = "default",
  className,
  ...props
}: Readonly<TypographyProps>) {
  const Base = TYPOGRAPHY_VARIANTS[variant];
  const font = HEADING_VARIANTS.has(variant) ? "font-title" : "font-text";

  return (
    <Base
      className={cn(font, TYPOGRAPHY_COLORS[color], className)}
      {...props}
    />
  );
}
