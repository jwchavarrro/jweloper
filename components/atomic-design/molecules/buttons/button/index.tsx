/**
 * @file index.tsx
 * @description Molécula de botón base. Extiende el Button de shadcn/ui (mismas `variant` y `size`)
 * y compone el átomo Icon para los iconos opcionales antes y después del contenido.
 */

"use client";

import { Button as BaseButton } from "@/components/ui/button";

// Import of components custom
import { Icon } from "@/components/atomic-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ComponentProps<typeof BaseButton> {
  readonly leadingIcon?: string;
  readonly trailingIcon?: string;
}

export function Button({
  className,
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <BaseButton className={cn("cursor-pointer", className)} {...props}>
      {leadingIcon && <Icon icon={leadingIcon} aria-hidden />}
      {children}
      {trailingIcon && <Icon icon={trailingIcon} aria-hidden />}
    </BaseButton>
  );
}
