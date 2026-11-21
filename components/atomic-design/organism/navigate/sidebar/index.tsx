/**
 * @file index.ts
 * @description Componente principal para la barra lateral de navegación.
 */

"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import {
  SidebarTrigger,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Sun, Moon } from "lucide-react";

// Import of components custom
import { AppSidebar } from "./fragments";
import { Switch } from "@/components/atomic-design/atoms";
import { Button } from "@/components/atomic-design/molecules";
import { Breadcrumb } from "@/components/atomic-design/organism/navigate";

// Import of custom hooks
import { useIsMounted, useLocaleSwitch } from "@/hooks";

// Import of utilities
import { EnumTheme } from "@/app/utils/types";

// Import of types
import type { SidebarDataType } from "./utils/types";

interface SidebarProps {
  children: React.ReactNode;
  data: SidebarDataType;
}
export const Sidebar: React.FC<SidebarProps> = ({ children, data }) => {
  // Custom hooks
  const { resolvedTheme, setTheme } = useTheme();
  // El tema solo se conoce en el cliente: evitar diferencias de hidratación
  const isMounted = useIsMounted();
  const { nextLocale, switchLocale } = useLocaleSwitch();
  const t = useTranslations("common");

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar data={data} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Switch
              checked={isMounted && resolvedTheme === EnumTheme.Dark}
              onCheckedChange={(checked) =>
                setTheme(checked ? EnumTheme.Dark : EnumTheme.Light)
              }
              checkedIcon={<Sun className="size-3" />}
              uncheckedIcon={<Moon className="size-3" />}
              aria-label={t("toggleTheme")}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={switchLocale}
              aria-label={t("switchLanguage", {
                language: t(`locales.${nextLocale}`),
              })}
              className="font-bold"
            >
              {nextLocale.toUpperCase()}
            </Button>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
