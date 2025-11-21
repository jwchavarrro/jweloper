import * as React from "react";
import { Heading } from "@/components/atomic-design/atoms/heading";
import { Text } from "@/components/atomic-design/atoms/text";
import { Button } from "@/components/atomic-design/atoms/button";
import { cn } from "@/lib/utils";

/**
 * Molecule: HeroSection
 * Sección hero compuesta por Heading, Text y Button
 */

interface HeroSectionProps {
  /** Título principal */
  title: string;
  /** Subtítulo o descripción */
  subtitle?: string;
  /** Texto del botón principal */
  primaryButtonText?: string;
  /** Acción del botón principal */
  onPrimaryButtonClick?: () => void;
  /** Texto del botón secundario */
  secondaryButtonText?: string;
  /** Acción del botón secundario */
  onSecondaryButtonClick?: () => void;
  /** Clase personalizada */
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryButtonText,
  onPrimaryButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-6 py-12 px-4 text-center",
        className
      )}
    >
      <Heading level={1} variant="gradient" className="max-w-3xl">
        {title}
      </Heading>
      {subtitle && (
        <Text variant="lead" className="max-w-2xl">
          {subtitle}
        </Text>
      )}
      {(primaryButtonText || secondaryButtonText) && (
        <div className="flex gap-4 mt-4">
          {primaryButtonText && (
            <Button
              size="lg"
              customVariant="glow"
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && (
            <Button
              variant="outline"
              size="lg"
              onClick={onSecondaryButtonClick}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      )}
    </section>
  );
}
