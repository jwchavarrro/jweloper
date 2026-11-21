/**
 * @file index.tsx
 * @description Átomo base de input. Extiende el Input de shadcn/ui con los tamaños,
 * variantes y estilos del proyecto. El estado de error se marca con `aria-invalid`.
 */

import * as React from "react";
import { Input as BaseInput } from "@/components/ui/input";

// Import of utilities
import { cn } from "@/lib/utils";

const INPUT_SIZES = {
  sm: "h-8 text-sm",
  md: "h-9 text-base md:text-sm",
  lg: "h-11 text-base",
} as const;

const INPUT_VARIANTS = {
  default: "",
  outline: "border-2",
  filled: "bg-muted/50 border-transparent",
} as const;

export interface InputProps extends Omit<
  React.ComponentProps<typeof BaseInput>,
  "size"
> {
  readonly size?: keyof typeof INPUT_SIZES;
  readonly variant?: keyof typeof INPUT_VARIANTS;
}

export function Input({
  size = "md",
  variant = "default",
  className,
  ...props
}: Readonly<InputProps>) {
  return (
    <BaseInput
      className={cn(
        INPUT_SIZES[size],
        INPUT_VARIANTS[variant],
        "focus-visible:ring-[1px] rounded-full pl-5",
        "aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive",
        className
      )}
      {...props}
    />
  );
}
