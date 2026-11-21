/**
 * @file index.tsx
 * @description Átomo de icono. Base única de iconos del proyecto (iconify);
 * ningún otro componente importa `@iconify/react` directo.
 */

"use client";

import { Icon as IconifyIcon, type IconProps } from "@iconify/react";

export function Icon(props: Readonly<IconProps>) {
  return <IconifyIcon {...props} />;
}
