/**
 * @file index.tsx
 * @description Chip pill translúcido (tecnologías, skills). Va sobre superficies de vidrio.
 */

// Import of components custom
import { Icon, Typography } from "@/components/atomic-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

export interface GlassChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  readonly children: React.ReactNode;
  /** Icono (iconify) antes del texto */
  readonly icon?: string;
}

export function GlassChip({
  children,
  icon,
  className,
  ...props
}: Readonly<GlassChipProps>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/10 px-3 py-1.5",
        className
      )}
      {...props}
    >
      {icon && <Icon icon={icon} className="size-4" aria-hidden />}
      <Typography variant="small" className="text-xs">
        {children}
      </Typography>
    </span>
  );
}
