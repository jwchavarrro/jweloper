/**
 * @file i18n-navigation.ts
 * @description APIs de navegación con locale. Usarlas en lugar de next/link y next/navigation
 * para rutas internas, así los enlaces conservan el idioma activo.
 */

// Import of utilities
import { createNavigation } from "next-intl/navigation";

// Import of i18n
import { routing } from "./i18n-routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
