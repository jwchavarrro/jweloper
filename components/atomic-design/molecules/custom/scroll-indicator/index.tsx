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
        <div className="flex flex-col items-center gap-5">
          <Icon className={`size-5 animate-bounce ${iconClassName || ""}`} />
          <Text
            variant="large"
            className={`text-[10px]! tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed] ${textClassName || ""}`}
          >
            {text}
          </Text>
          <div className="w-px h-24 bg-foreground" />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <div className="w-px h-24 bg-foreground" />
          <Text
            variant="large"
            className={`text-[10px]! tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed]  ${textClassName || ""}`}
          >
            {text}
          </Text>
          <Icon className={`size-5 animate-bounce ${iconClassName || ""}`} />
        </div>
      )}
    </div>
  );
};
