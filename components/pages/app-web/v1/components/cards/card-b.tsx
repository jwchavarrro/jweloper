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

// Import of types
import { CardAData } from "@/components/pages/app-web/v1/utils";

interface CardBProps {
  readonly data: CardAData;
  readonly className?: string;
}

export function CardB({ data, className }: CardBProps) {
  const { dates, title, company, description, technologies } = data;

  return (
    <BaseCard
      className={cn(
        "bg-[#1A2B40] border-none shadow-none p-0 space-y-4",
        className
      )}
    >
      {/* Header: Fecha y Título */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        {/* Fecha */}
        <Text
          variant="small"
          className="text-[#8892B0] uppercase tracking-wider whitespace-nowrap"
        >
          {dates}
        </Text>

        {/* Título y Compañía */}
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Title level={4} className="text-[#64FFDA] font-medium text-lg">
              {title}
            </Title>
            <span className="text-[#64FFDA]">•</span>
            {company.url ? (
              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 group"
              >
                <Title
                  level={4}
                  className="text-[#64FFDA] font-medium text-lg group-hover:underline"
                >
                  {company.name}
                </Title>
                <Icon
                  icon="mdi:open-in-new"
                  className="size-4 text-[#64FFDA]"
                />
              </Link>
            ) : (
              <Title level={4} className="text-[#64FFDA] font-medium text-lg">
                {company.name}
              </Title>
            )}
          </div>
        </div>
      </div>

      {/* Descripción */}
      <div className="space-y-2">
        {Array.isArray(description) ? (
          description.map((desc, index) => (
            <Text
              key={`desc-${index}-${desc.slice(0, 10)}`}
              className="text-[#CCD6F6] leading-relaxed"
            >
              {desc}
            </Text>
          ))
        ) : (
          <Text className="text-[#CCD6F6] leading-relaxed">{description}</Text>
        )}
      </div>

      {/* Tags de Tecnologías */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm font-medium border border-[#64FFDA] bg-[#112240] text-[#64FFDA]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </BaseCard>
  );
}
