/**
 * @file badge-icon.tsx
 * @description Componente Badge genérico con soporte para icono usando iconify.
 */

import * as React from "react";
import { Icon } from "@iconify/react";
import { Badge as BaseBadge, badgeVariants } from "@/components/ui/badge";

// Import of utilities
import { cn } from "@/lib/utils";

// Import of types
import type { VariantProps } from "class-variance-authority";

interface BadgeProps
  extends Omit<React.ComponentProps<"span">, "children">,
    VariantProps<typeof badgeVariants> {
  /** Texto del badge */
  readonly text: string;
  /** Icono de iconify (ej: "mdi:react", "devicon:javascript") */
  readonly icon?: string;
  /** Tamaño del icono */
  readonly iconSize?: string | number;
  /** Clase CSS personalizada */
  readonly className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  icon,
  iconSize,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <BaseBadge
      variant={variant}
      className={cn(className)}
      data-slot="badge-icon"
      {...props}
    >
      {icon && (
        <Icon
          icon={icon}
          className="shrink-0"
          style={
            iconSize
              ? { fontSize: iconSize, width: iconSize, height: iconSize }
              : undefined
          }
        />
      )}
      <span>{text}</span>
    </BaseBadge>
  );
};
