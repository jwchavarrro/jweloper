/**
 * @file index.tsx
 * @description Átomo base de card. Extiende la Card de shadcn/ui y expone sus partes,
 * para que las moléculas no importen `ui/card` directo.
 * Por defecto es un `div`; con `href` es un enlace y con `onClick` un elemento interactivo.
 */

import {
  Card as BaseCard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import of i18n
import { Link } from "@/app/[locale]/i18n-navigation";

// Import of utilities
import { cn } from "@/lib/utils";

const INTERACTIVE_CLASSES =
  "cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50";

export interface CardProps extends React.ComponentProps<typeof BaseCard> {
  /** Convierte la card en enlace (rutas internas con locale o URLs externas) */
  readonly href?: string;
  /** Solo con `href` */
  readonly target?: React.HTMLAttributeAnchorTarget;
  /** Solo con `href` */
  readonly rel?: string;
}

export function Card({
  href,
  target,
  rel,
  className,
  onClick,
  onKeyDown,
  ...props
}: Readonly<CardProps>) {
  // Enlace: el <a> envuelve la card (contenido de bloque válido en HTML5)
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cn("block rounded-xl", INTERACTIVE_CLASSES)}
      >
        <BaseCard className={className} {...props} />
      </Link>
    );
  }

  // Acción: div accesible como botón (un <button> no puede contener los div de la card)
  if (onClick) {
    return (
      <BaseCard
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.currentTarget.click();
          }
        }}
        className={cn(INTERACTIVE_CLASSES, className)}
        {...props}
      />
    );
  }

  return <BaseCard className={className} onKeyDown={onKeyDown} {...props} />;
}

export {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
