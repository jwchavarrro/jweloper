/**
 * @file index.tsx
 * @description Tarjeta genérica de vidrio: título con acción opcional, cuerpo y pie opcional.
 */

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";
import { GlassSurface } from "@/components/glass-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

export interface GlassCardProps {
  readonly title: string;
  /** Elemento a la derecha del título (acciones, decoraciones…) */
  readonly headerAction?: React.ReactNode;
  /** Contenido principal */
  readonly children: React.ReactNode;
  /** Contenido anclado al final de la tarjeta (acciones, etiquetas…) */
  readonly footer?: React.ReactNode;
  readonly className?: string;
}

export function GlassCard({
  title,
  headerAction,
  children,
  footer,
  className,
}: Readonly<GlassCardProps>) {
  return (
    <GlassSurface
      as="article"
      className={cn(
        "flex h-full min-h-72 flex-col gap-4 rounded-3xl p-5 md:p-6",
        className
      )}
    >
      <header className="flex items-start justify-between gap-3">
        <Typography variant="h3" className="text-base md:text-lg">
          {title}
        </Typography>
        {headerAction}
      </header>
      {children}
      {footer && (
        <footer className="mt-auto flex flex-col gap-4">{footer}</footer>
      )}
    </GlassSurface>
  );
}
