import * as React from "react"
import { Button as BaseButton, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"

/**
 * Button personalizado que extiende el Button base de shadcn/ui
 * Permite agregar estilos personalizados sin modificar el componente base
 */
interface CustomButtonProps
  extends React.ComponentProps<typeof BaseButton>,
    VariantProps<typeof buttonVariants> {
  /** Variante personalizada adicional */
  customVariant?: "gradient" | "glow"
}

export function Button({
  className,
  customVariant,
  ...props
}: Readonly<CustomButtonProps>) {
  return (
    <BaseButton
      className={cn(
        // Estilos personalizados adicionales
        customVariant === "gradient" &&
          "bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
        customVariant === "glow" &&
          "shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60",
        className
      )}
      {...props}
    />
  )
}

