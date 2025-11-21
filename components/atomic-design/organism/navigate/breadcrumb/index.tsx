/**
 * @file index.tsx
 * @description Componente genérico de breadcrumb que usa el router de Next.js.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb as BreadcrumbUI,
  BreadcrumbItem as BreadcrumbItemUI,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Import of types
import type { BreadcrumbProps } from "./types";

/**
 * Genera los items del breadcrumb basado en la ruta actual
 */
const generateBreadcrumbsFromPath = (
  pathname: string,
  excludeRoutes?: string[],
  disabledRoutes?: string[]
): Array<{ label: string; href: string; disabled?: boolean }> => {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: Array<{
    label: string;
    href: string;
    disabled?: boolean;
  }> = [];

  // Agregar "Inicio" como primer item
  if (pathname !== "/") {
    const isExcluded = excludeRoutes?.includes("/");
    const isDisabled = disabledRoutes?.includes("/");

    if (!isExcluded) {
      breadcrumbs.push({
        label: "Inicio",
        href: "/",
        disabled: isDisabled,
      });
    }
  }

  // Generar breadcrumbs para cada segmento
  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const isExcluded = excludeRoutes?.includes(currentPath);
    const isDisabled = disabledRoutes?.includes(currentPath);

    if (!isExcluded) {
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      breadcrumbs.push({
        label,
        href: currentPath,
        disabled: isDisabled,
      });
    }
  }

  return breadcrumbs;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className,
  excludeRoutes,
  disabledRoutes,
}) => {
  const pathname = usePathname();
  const breadcrumbItems =
    items ||
    generateBreadcrumbsFromPath(pathname, excludeRoutes, disabledRoutes);

  if (breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <BreadcrumbUI className={className}>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isDisabled =
            item.disabled || disabledRoutes?.includes(item.href);

          return (
            <div key={item.href} className="flex items-center">
              {index > 0 && (
                <BreadcrumbSeparator
                  className={separator ? "" : "hidden md:block"}
                >
                  {separator}
                </BreadcrumbSeparator>
              )}
              <BreadcrumbItemUI
                className={index === 0 ? "hidden md:block" : ""}
              >
                {(() => {
                  if (isLast) {
                    return (
                      <BreadcrumbPage
                        className={
                          isDisabled ? "pointer-events-none opacity-50" : ""
                        }
                      >
                        {item.label}
                      </BreadcrumbPage>
                    );
                  }
                  if (isDisabled) {
                    return (
                      <span className="text-muted-foreground pointer-events-none">
                        {item.label}
                      </span>
                    );
                  }
                  return (
                    <BreadcrumbLink asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  );
                })()}
              </BreadcrumbItemUI>
            </div>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbUI>
  );
};
