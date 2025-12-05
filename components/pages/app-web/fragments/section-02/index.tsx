/**
 * @file section-02.tsx
 * @description Fragmento de la sección 02 de la página principal.
 */

"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  ExternalLinkIcon,
  LaptopIcon,
  MapPinIcon,
} from "lucide-react";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title, Text } from "@/components/atomic-design/atoms";
import { Badge } from "@/components/atomic-design/molecules";

// Import of utilities
import { EXPERIENCES, getTechnologyIcon } from "@/components/pages/app-web";
import { useIsMobile } from "@/hooks/use-mobile";

interface Section02Props {
  readonly anchorId?: string;
}

export const Section02: React.FC<Section02Props> = ({ anchorId }) => {
  const isMobile = useIsMobile();

  return (
    <SnapPage
      id="02"
      anchorId={anchorId}
      hideCounter={isMobile}
      hideScrollIndicator={isMobile}
    >
      {/* Children content */}
      <div className="h-full absolute inset-0 grid grid-cols-1 xl:grid-cols-3 gap-2 lg:gap-[5%]">
        {/* Column 1 - Title */}
        <div className="h-full flex items-center justify-center lg:justify-end">
          <Title
            variant="gradient"
            className="text-3xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap lg:text-right max-w-xl"
          >
            Experiencia Pro
          </Title>
        </div>

        {/* Column 2 - Content */}
        <div className="col-span-2 h-full overflow-y-auto">
          <div className="space-y-8">
            {EXPERIENCES?.map((experience) => (
              <div key={`${experience?.title}`} className="space-y-4">
                <div className="space-y-4">
                  {/* Title and Company */}
                  <div className="border-l-2 pl-4">
                    <Title level={4} className="text-xl! font-accent">
                      {experience?.title}
                    </Title>
                    <div className="flex items-center gap-2">
                      <Text className="truncate max-w-xs md:max-w-fit">
                        {experience?.company?.name}
                      </Text>
                      {experience?.company?.url && (
                        <Link
                          href={experience?.company?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLinkIcon className="size-4" />
                        </Link>
                      )}
                    </div>
                    {/* Dates, Location and Remote */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-4">
                      <div className="flex items-center gap-1.5">
                        <CalendarDaysIcon className="size-4 text-muted-foreground" />
                        <Text variant="small" className="text-muted-foreground">
                          {experience?.dates}
                        </Text>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPinIcon className="size-4 text-muted-foreground" />
                        <Text variant="small" className="text-muted-foreground">
                          {experience?.location}
                        </Text>
                      </div>
                      {experience?.isRemote && (
                        <div className="flex items-center gap-1.5">
                          <LaptopIcon className="size-4 text-muted-foreground" />
                          <Text
                            variant="small"
                            className="text-muted-foreground"
                          >
                            Remoto
                          </Text>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 pl-4">
                    {/* Description - Bullet Points */}
                    <ul className="space-y-3 list-none pr-5">
                      {experience?.description?.map((item) => (
                        <li
                          key={item.substring(0, 30)}
                          className="text-sm text-foreground  flex items-start gap-2"
                        >
                          <span className="text-primary">•</span>
                          <Text variant="small">{item}</Text>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Tags */}
                    {experience?.technologies &&
                      experience?.technologies?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              text={tech}
                              icon={getTechnologyIcon(tech)}
                            />
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SnapPage>
  );
};
