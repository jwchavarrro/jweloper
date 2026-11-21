/**
 * @file index.tsx
 * @description Molécula BadgeA: badge con texto e icono opcional. Compone los átomos Badge e Icon.
 */

import * as React from "react";

// Import of utilities
import { cn } from "@/lib/utils";

// Import of types
import type { VariantProps } from "class-variance-authority";
import {
  Badge as BaseBadge,
  Icon,
  type badgeVariants,
} from "@/components/atomic-design/atoms";

interface BadgeAProps
  extends
    Omit<React.ComponentProps<"span">, "children">,
    VariantProps<typeof badgeVariants> {
  readonly text: string;
  readonly icon?: string;
  readonly iconSize?: string | number;
  readonly className?: string;
}

export const BadgeA: React.FC<BadgeAProps> = ({
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
