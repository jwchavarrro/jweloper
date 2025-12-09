/**
 * @file ExperienceCard.tsx
 * @description Componente de card para mostrar experiencias laborales.
 */

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

// Import of components custom
import { Card as BaseCard } from "@/components/atomic-design/molecules/card";
import { Title, Text } from "@/components/atomic-design/atoms";
import { Badge } from "@/components/atomic-design";

// Import of types
import { CardBData } from "@/components/pages/app-web/v1/utils";

interface CardBProps {
  readonly data: CardBData;
  readonly className?: string;
}

export function CardB({ data, className }: CardBProps) {
  /**
   * @name data
   * @type {CardAData}
   * @description Datos de la card A.
   */
  const { mainImage, title, url, description, tecnologies } = data;

  const hasLink = Boolean(url);

  return (
    <BaseCard
      className={cn(
        "shadow-transparent border-transparent hover:shadow-md hover:border-foreground/5 transition-all duration-300 hover:bg-foreground/5 hover:backdrop-blur-md hover:opacity-100 opacity-50 p-3 group",
        className
      )}
    >
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-3 min-h-40">
        {/* Columna 1 - Fecha */}
        <div className="relative size-full col-span-2">
          <Image
            src={mainImage}
            alt={title}
            fill
            priority
            quality={100}
            className="object-contain text-[10px]"
          />
        </div>

        {/* Columna 2 - Contenido */}
        <div className="col-span-10 space-y-5">
          {/* Header */}
          <header>
            <Title
              level={4}
              className={cn(
                "text-base flex items-center gap-2",
                hasLink && "group-hover:underline"
              )}
            >
              {title}
              {hasLink && (
                <Link
                  href={url || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="mdi:open-in-new"
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              )}
            </Title>
          </header>

          <main>
            <Text variant="small">{description}</Text>
          </main>

          <footer>
            {tecnologies && tecnologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tecnologies.map((item: string) => (
                  <Badge key={item} text={item} />
                ))}
              </div>
            )}
          </footer>
        </div>
      </div>
    </BaseCard>
  );
}
