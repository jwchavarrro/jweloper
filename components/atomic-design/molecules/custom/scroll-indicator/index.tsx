/**
 * @file scroll-indicator.tsx
 * @description Componente para el indicador de scroll.
 */

import React from "react";
import { MoveDownIcon, LucideIcon } from "lucide-react";

// Import of components custom
import { Text } from "@/components/atomic-design/atoms";

interface ScrollIndicatorProps {
  text?: string;
  icon?: LucideIcon;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  reverse?: boolean;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  text = "Scroll abajo",
  icon: Icon = MoveDownIcon,
  className,
  textClassName,
  iconClassName,
  reverse = false,
}) => {
  return (
    <div className={`flex flex-col gap-5 bg-background ${className || ""}`}>
      {reverse ? (
        <>
          <Icon className={`size-5 animate-bounce ${iconClassName || ""}`} />
          <Text
            variant="large"
            className={`text-xs! tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed] ${textClassName || ""}`}
          >
            {text}
          </Text>
        </>
      ) : (
        <>
          <Text
            variant="large"
            className={`text-xs! tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed]  ${textClassName || ""}`}
          >
            {text}
          </Text>
          <Icon className={`size-5 animate-bounce ${iconClassName || ""}`} />
        </>
      )}
    </div>
  );
};
