/**
 * @file index.tsx
 * @description Componente genérico de carousel basado en shadcn/ui.
 */

"use client";

import * as React from "react";
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Import of types
import type { CarouselProps } from "./utils";

export const Carousel: React.FC<CarouselProps> = ({
  items,
  orientation = "horizontal",
  contentClassName,
  itemClassName,
  showNavigation = true,
  setApi: setApiProp,
  onSelect: onSelectProp,
  ...props
}) => {
  const [api, setApiInternal] = React.useState<CarouselApi>();

  // Manejar el callback de setApi
  React.useEffect(() => {
    if (api && setApiProp) {
      setApiProp(api);
    }
  }, [api, setApiProp]);

  // Manejar el callback de onSelect
  React.useEffect(() => {
    if (!api || !onSelectProp) {
      return;
    }

    const handleSelect = () => {
      onSelectProp(api);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, onSelectProp]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <CarouselUI orientation={orientation} setApi={setApiInternal} {...props}>
      <CarouselContent className={contentClassName}>
        {items.map((item, index) => (
          <CarouselItem key={item.id || index} className={itemClassName}>
            {item.content}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showNavigation && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </CarouselUI>
  );
};
