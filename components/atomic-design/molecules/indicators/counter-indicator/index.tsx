/**
 * @file counter-indicator.tsx
 * @description Componente para el contador de scroll snap.
 */

import React from "react";

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";

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
          <Typography
            variant="h1"
            color="gradient"
            className={cn("text-5xl! md:text-8xl!", className)}
          >
            {value}
          </Typography>
        </>
      ) : (
        <>
          <Typography
            variant="h1"
            color="gradient"
            className={cn("text-5xl! md:text-8xl!", className)}
          >
            {value}
          </Typography>
          {children}
        </>
      )}
    </div>
  );
};
