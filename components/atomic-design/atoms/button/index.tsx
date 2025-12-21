/**
 * @file button.tsx
 * @description Componente de botón personalizado.
 */

"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";

// Import of utilities
import { cn } from "@/lib/utils";
import { ICONS } from "@/config";

interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    | "onDrag"
    | "onDragEnd"
    | "onDragStart"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  icon?: string;
  text: string;
}

export function Button({
  icon,
  text,
  className,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <motion.button
      className={cn(
        "w-fit rounded-full flex items-center gap-2 font-bold border p-1 pr-5 cursor-pointer",
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
        className="size-6 md:size-10 bg-foreground text-background flex items-center justify-center rounded-full overflow-hidden"
      >
        <Icon
          icon={icon || ICONS.ARROW_RIGHT_01}
          className="size-5 md:size-6"
        />
      </motion.span>
      <motion.span
        variants={{
          hovered: { translateX: 5 },
          tapped: { translateX: 0 },
        }}
      >
        {text}
      </motion.span>
    </motion.button>
  );
}
