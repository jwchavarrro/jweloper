/**
 * @file counter-indicator.tsx
 * @description Componente para el contador de scroll snap.
 */

import React from "react";

// Import of components custom
import { Title } from "@/components/atomic-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

interface CounterIndicatorProps {
  value: string;
  children?: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

export const CounterIndicator: React.FC<CounterIndicatorProps> = ({
  value,
  children,
  className,
  reverse = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {reverse ? (
        <>
          {children}
          <Title
            variant="gradient"
            className={cn("text-5xl! md:text-8xl! xl:text-9xl!", className)}
          >
            {value}
          </Title>
        </>
      ) : (
        <>
          <Title
            variant="gradient"
            className={cn("text-5xl! md:text-8xl! xl:text-9xl!", className)}
          >
            {value}
          </Title>
          {children}
        </>
      )}
    </div>
  );
};
