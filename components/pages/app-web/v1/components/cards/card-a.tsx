/**
 * @file ExperienceCard.tsx
 * @description Componente de card para mostrar experiencias laborales.
 */

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Card as BaseCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";
import { Badge } from "@/components/atomic-design";

// Import of types
import { CardAData } from "@/components/pages/app-web/v1/utils";

interface CardAProps {
  readonly data: CardAData;
  readonly className?: string;
}

export function CardA({ data, className }: CardAProps) {
  /**
   * @name data
   * @type {CardAData}
   * @description Datos de la card A.
   */
  const {
    dates,
    title,
    company,
    location,
    isRemote,
    description,
    technologies,
  } = data;

  return (
    <BaseCard
      className={cn(
        "shadow-transparent border-transparent hover:shadow-md hover:border-foreground/5 transition-all duration-300 cursor-pointer hover:bg-foreground/5 hover:backdrop-blur-md hover:opacity-100 opacity-50 p-3",
        className
      )}
    >
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-3 min-h-40">
        {/* Columna 1 - Fecha */}
        <div className="col-span-2">
          <Text variant="small" className="text-xs">
            {dates}
          </Text>
        </div>

        {/* Columna 2 - Contenido */}
        <div className="col-span-10 space-y-5">
          {/* Header */}
          <header>
            <Title level={4} className="text-base flex items-center gap-2">
              {title}
            </Title>
            <Title level={4} className="text-base flex items-center gap-2">
              {company.name}
              {company.url && (
                <Link
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="mdi:open-in-new" />
                </Link>
              )}
            </Title>
            <Title level={4} className="text-base flex items-center gap-2">
              {location}
              {isRemote && (
                <>
                  {" • "}
                  <span className="text-foreground">Remoto</span>
                </>
              )}
            </Title>
          </header>

          <main>
            <Text variant="small">{description}</Text>
          </main>

          <footer>
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {technologies.map((tech) => (
                  <Badge key={tech} text={tech} variant="outline" />
                ))}
              </div>
            )}
          </footer>
        </div>
      </div>
    </BaseCard>
  );
}
