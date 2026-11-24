/**
 * @file index.tsx
 * @description Botón circular de vidrio solo con icono (requiere `aria-label`).
 */

"use client";

// Import of components custom
import { Icon } from "@/components/atomic-design/atoms";
import { GLASS_SURFACE_CLASSES } from "@/components/glass-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

export interface GlassIconButtonProps {
  /** Nombre del icono (iconify) */
  readonly icon: string;
  readonly "aria-label": string;
  readonly onClick?: () => void;
  readonly disabled?: boolean;
  readonly className?: string;
}

export function GlassIconButton({
  icon,
  onClick,
  disabled,
  className,
  ...props
}: Readonly<GlassIconButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        GLASS_SURFACE_CLASSES,
        "flex size-12 cursor-pointer items-center justify-center rounded-full text-foreground transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    >
      <Icon icon={icon} className="size-5" aria-hidden />
    </button>
  );
}
