/**
 * @file words-animation.tsx
 * @description Componente de animación de palabras.
 */

"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

// Import of utilities
import { cn } from "@/lib/utils";

// Import of components custom
import { Title } from "@/components/atomic-design/atoms";

interface WordsAnimationProps {
  readonly words: {
    name: string;
    href: string;
  }[];
  className?: string;
  classNamesWords?: string;
}

export const WordsAnimation: React.FC<WordsAnimationProps> = ({
  words,
  className,
  classNamesWords,
}) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {words.map((word) => (
        <motion.div
          key={word.name}
          initial="initial"
          whileHover="hovered"
          className="relative overflow-hidden"
        >
          <motion.div
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
          >
            <Link href={word.href} target="_blank" rel="noopener noreferrer">
              <Title
                level={1}
                className={cn(
                  "text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-9xl! font-text",
                  classNamesWords
                )}
              >
                {word.name}
              </Title>
            </Link>
          </motion.div>
          <motion.div
            key={word.name}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            className="absolute inset-0"
          >
            <Link href={word.href} target="_blank" rel="noopener noreferrer">
              <Title
                level={1}
                className={cn(
                  "text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-9xl! font-text",
                  classNamesWords
                )}
              >
                {word.name}
              </Title>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
