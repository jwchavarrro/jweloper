/**
 * @file index.tsx
 * @description Carrusel genérico de vidrio (Embla vía `ui/carousel`) con controles
 * `GlassIconButton`. Los textos de los controles llegan por props.
 */

"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// Import of components custom
import { GlassIconButton } from "@/components/glass-design/molecules";

// Import of utilities
import { ICONS } from "@/config";
import { cn } from "@/lib/utils";

export interface GlassCarouselItem {
  readonly id: string;
  readonly content: React.ReactNode;
}

export interface GlassCarouselProps {
  readonly items: GlassCarouselItem[];
  /** `aria-label` del botón anterior (ya traducido) */
  readonly previousLabel: string;
  /** `aria-label` del botón siguiente (ya traducido) */
  readonly nextLabel: string;
  /** Ancho de cada elemento (por defecto: 1 / 2 / 3 por fila) */
  readonly itemClassName?: string;
}

export function GlassCarousel({
  items,
  previousLabel,
  nextLabel,
  itemClassName = "basis-full md:basis-1/2 xl:basis-1/3",
}: Readonly<GlassCarouselProps>) {
  const [api, setApi] = React.useState<CarouselApi>();

  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <Carousel opts={{ align: "start" }} setApi={setApi}>
        <CarouselContent className="py-6">
          {items.map((item) => (
            <CarouselItem key={item.id} className={cn(itemClassName)}>
              {item.content}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-3 md:justify-start">
        <GlassIconButton
          icon={ICONS.ARROW_LEFT}
          aria-label={previousLabel}
          onClick={() => api?.scrollPrev()}
        />
        <GlassIconButton
          icon={ICONS.ARROW_RIGHT_01}
          aria-label={nextLabel}
          onClick={() => api?.scrollNext()}
        />
      </div>
    </div>
  );
}
