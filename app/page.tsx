/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

// Import of components custom
import { Title, Text, Button } from "@/components/atomic-design/atoms";

// Import of utilities
import { SOCIAL_MEDIA } from "./utils";
import { HOME_DATA, HOME_ICONS } from "@/components/pages";

export default function Home() {
  return (
    <motion.div
      className="relative h-[calc(100vh-96px)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 gap-5 justify-center">
        {/* Social Media */}
        <div>
          <div className="relative z-20 w-fit flex flex-col items-center gap-5">
            <div className="w-px h-24 bg-foreground" />
            {SOCIAL_MEDIA.map((socialMedia) => (
              <Link
                key={socialMedia.name}
                href={socialMedia.url}
                className="hover:scale-110 transition-all duration-300"
                target="_blank"
              >
                <Icon
                  icon={socialMedia.icon}
                  className="size-6 text-foreground cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="relative z-20 flex items-end justify-end">
          <div className="flex flex-col items-center h-full justify-end">
            <Text className="font-bold text-xs! tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed] mb-4">
              <Link
                href="mailto:jwchavarrro023@gmail.com"
                className="hover:underline"
              >
                jwchavarrro023@gmail.com
              </Link>
            </Text>
            <div className="w-px h-24 bg-foreground" />
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="relative z-10 h-full w-full max-w-11/12 md:max-w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-2 content-center gap-5">
        {/* Column 1 - Image */}
        <motion.div
          initial={{ translateX: 100, opacity: 0, rotate: -10 }}
          animate={{ translateX: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative min-h-40 lg:min-h-80 flex items-center justify-center"
        >
          <Image
            src="/images/background/bg-path-001.png"
            alt="Background Path 001"
            quality={100}
            fill
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Column 2 - Content */}
        <div className="space-y-5">
          <div>
            <Text
              variant="lead"
              className="text-sm! md:text-base! uppercase tracking-widest"
            >
              Semi-Senior
            </Text>
            <Title
              variant="gradient"
              className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl!"
            >
              Desarrollador Frontend | Especialista en React & Next.js
            </Title>
            <Text>
              Ayudo a construir aplicaciones web modernas, escalables y
              centradas en el usuario. Mi experiencia abarca desde prototipos
              rápidos hasta aplicaciones complejas.
            </Text>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            {HOME_DATA?.buttons?.map((button) => {
              const IconComponent = HOME_ICONS[button.icon];
              return (
                <motion.div
                  key={button.label}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95, rotate: 0 }}
                >
                  <Button key={button.label} size="lg" asChild>
                    <Link href={button.url}>
                      {IconComponent && <IconComponent className="size-4" />}
                      {button.label}
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <Text className="text-[9px]! text-center max-w-56 md:max-w-full text-sm/3">
          Copyright © 2025 Jweloper. All rights reserved. v1.0.0
        </Text>
      </div>
    </motion.div>
  );
}
