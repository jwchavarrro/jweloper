import * as React from "react"
import {
  TypographyH1 as BaseH1,
  TypographyH2 as BaseH2,
  TypographyH3 as BaseH3,
  TypographyH4 as BaseH4,
} from "@/components/ui/typography"
import { cn } from "@/lib/utils"

/**
 * Heading personalizado que extiende los componentes de Typography de shadcn/ui
 * Permite agregar estilos personalizados sin modificar los componentes base
 */

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Nivel del heading (1-4) */
  level?: 1 | 2 | 3 | 4
  /** Variante de estilo personalizada */
  variant?: "default" | "accent" | "gradient"
}

export function Heading({
  level = 1,
  variant = "default",
  className,
  children,
  ...props
}: HeadingProps) {
  const variantStyles = {
    accent: "text-primary",
    gradient: "bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",
    default: "",
  }

  const baseClassName = cn(variantStyles[variant], className)

  switch (level) {
    case 1:
      return (
        <BaseH1 className={baseClassName} {...props}>
          {children}
        </BaseH1>
      )
    case 2:
      return (
        <BaseH2 className={baseClassName} {...props}>
          {children}
        </BaseH2>
      )
    case 3:
      return (
        <BaseH3 className={baseClassName} {...props}>
          {children}
        </BaseH3>
      )
    case 4:
      return (
        <BaseH4 className={baseClassName} {...props}>
          {children}
        </BaseH4>
      )
    default:
      return (
        <BaseH1 className={baseClassName} {...props}>
          {children}
        </BaseH1>
      )
  }
}

