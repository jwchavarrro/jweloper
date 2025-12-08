/**
 * @file ExperienceCard.tsx
 * @description Componente de card para mostrar experiencias laborales.
 */

import { Card as BaseCard } from "@/components/atomic-design/molecules/card";
import { cn } from "@/lib/utils";

interface CardBProps {
  readonly className?: string;
}

export function CardB({ className }: CardBProps) {
  return (
    <BaseCard
      className={cn(
        "shadow-transparent border-transparent hover:shadow-md hover:border-foreground/5 transition-all duration-300 hover:bg-foreground/5 hover:backdrop-blur-md hover:opacity-100 opacity-50 p-3 group",
        className
      )}
    >
      <p>Card B</p>
    </BaseCard>
  );
}
