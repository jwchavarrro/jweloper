/**
 * @file index.tsx
 * @description Molécula de botón con icono circular y texto animados (CTA).
 * Compone la molécula Button y el átomo Icon.
 */

"use client";

import { motion } from "motion/react";

// Import of components custom
import { Icon } from "@/components/atomic-design/atoms";
import { Button } from "@/components/atomic-design/molecules/buttons/button";

// Import of utilities
import { cn } from "@/lib/utils";
import { ICONS } from "@/config";

const MotionButton = motion.create(Button);

interface ButtonIconProps extends Omit<
  React.ComponentProps<typeof Button>,
  | "children"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
> {
  readonly icon?: string;
  readonly text: string;
}

export function ButtonIcon({
  icon,
  text,
  className,
  ...props
}: Readonly<ButtonIconProps>) {
  return (
    <MotionButton
      variant="ghost"
      className={cn(
        "h-auto w-fit rounded-full flex items-center gap-2 font-bold border p-1 pr-5 hover:bg-transparent dark:hover:bg-transparent",
        className
      )}
      initial="default"
      whileHover="hovered"
      whileTap="tapped"
      variants={{
        default: {},
        hovered: {},
        tapped: {},
      }}
      {...props}
    >
      <motion.span
        variants={{
          hovered: { translateX: 10 },
          tapped: { translateX: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="size-10 bg-foreground text-background flex items-center justify-center rounded-full overflow-hidden"
      >
        <Icon icon={icon || ICONS.ARROW_RIGHT_01} className="size-6" />
      </motion.span>
      <motion.span
        variants={{
          hovered: { translateX: 5 },
          tapped: { translateX: 0 },
        }}
      >
        {text}
      </motion.span>
    </MotionButton>
  );
}
