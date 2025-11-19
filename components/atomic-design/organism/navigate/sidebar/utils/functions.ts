/**
 * @file functions.ts
 * @description Contiene funciones auxiliares genéricas y utilidades para el sidebar.
 */


import { SquareTerminal } from "lucide-react";

// Import of utilities
import { SIDEBAR_ICONS } from "./constants";

// Import of types
import type { LucideIcon } from "lucide-react";


/**
 * Función para obtener el icono correspondiente a un nombre de icono
 * @param iconName - Nombre del icono
 * @returns Icono correspondiente
 */
export const getSidebarIcon = (iconName: string): LucideIcon => {
  const Icon = SIDEBAR_ICONS[iconName];
  if (!Icon) {
    console.warn(`Icon "${iconName}" not found in SIDEBAR_ICONS`);
    return SquareTerminal;
  }
  return Icon;
};
