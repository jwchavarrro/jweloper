/**
 * @file types.ts
 * @description Tipos para el componente Carousel.
 */

import { Carousel as CarouselUI } from "@/components/ui/carousel";

export interface CarouselItemProps {
  readonly id?: string;
  readonly content: React.ReactNode;
  readonly className?: string;
}

import type { CarouselApi } from "@/components/ui/carousel";

export interface CarouselProps
  extends Omit<
    React.ComponentProps<typeof CarouselUI>,
    "orientation" | "children" | "setApi" | "onSelect"
  > {
  /**
   * Items del carousel (requerido)
   */
  readonly items: CarouselItemProps[];
  /**
   * Orientación del carousel
   * @default "horizontal"
   */
  readonly orientation?: "horizontal" | "vertical";
  /**
   * Clase CSS personalizada para el contenido
   */
  readonly contentClassName?: string;
  /**
   * Clase CSS personalizada para cada item
   */
  readonly itemClassName?: string;
  /**
   * Mostrar botones de navegación
   * @default true
   */
  readonly showNavigation?: boolean;
  /**
   * Callback para obtener la instancia de la API
   */
  readonly setApi?: (api: CarouselApi) => void;
  /**
   * Callback cuando cambia el slide actual
   */
  readonly onSelect?: (api: CarouselApi) => void;
}
