/**
 * @file index.tsx
 * @description Botón pill de vidrio con icono opcional en un círculo sólido.
 * Con `href` es un enlace externo; sin él, un `<button>`.
 */

"use client";

import Link from "next/link";

// Import of components custom
import { Icon, Typography } from "@/components/atomic-design/atoms";
import { GLASS_SURFACE_CLASSES } from "@/components/glass-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

const BUTTON_CLASSES = `${GLASS_SURFACE_CLASSES} inline-flex h-12 items-center gap-3 rounded-full pr-5 font-bold text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50`;

export interface GlassButtonProps {
  readonly children: React.ReactNode;
  /** Icono (iconify) dentro del círculo inicial */
  readonly icon?: string;
  /** Icono (iconify) al final */
  readonly trailingIcon?: string;
  /** Convierte el botón en enlace externo */
  readonly href?: string;
  readonly onClick?: () => void;
  readonly disabled?: boolean;
  readonly className?: string;
}

export function GlassButton({
  children,
  icon,
  trailingIcon,
  href,
  onClick,
  disabled,
  className,
}: Readonly<GlassButtonProps>) {
  const content = (
    <>
      {icon ? (
        <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-background">
          <Icon icon={icon} className="size-4" aria-hidden />
        </span>
      ) : (
        <span className="w-2" aria-hidden />
      )}
      <Typography variant="small" className="text-sm font-bold">
        {children}
      </Typography>
      {trailingIcon && (
        <Icon icon={trailingIcon} className="ml-auto size-4" aria-hidden />
      )}
    </>
  );

  const classes = cn(BUTTON_CLASSES, icon && "pl-1.5", className);

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, "cursor-pointer")}
    >
      {content}
    </button>
  );
}
