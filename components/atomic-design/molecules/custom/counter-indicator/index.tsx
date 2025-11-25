/**
 * @file counter-indicator.tsx
 * @description Componente para el contador de scroll snap.
 */

import React from "react";

// Import of components custom
import { Title } from "@/components/atomic-design/atoms";

interface CounterIndicatorProps {
  value: string;
  children?: React.ReactNode;
  reverse?: boolean;
}

export const CounterIndicator: React.FC<CounterIndicatorProps> = ({
  value,
  children,
  reverse = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {reverse ? (
        <>
          {children}
          <Title
            variant="gradient"
            className="text-5xl! md:text-8xl! xl:text-9xl! underline"
          >
            {value}
          </Title>
        </>
      ) : (
        <>
          <Title
            variant="gradient"
            className="text-5xl! md:text-8xl! xl:text-9xl! underline"
          >
            {value}
          </Title>
          {children}
        </>
      )}
    </div>
  );
};
