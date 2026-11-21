/**
 * @file nav-main.tsx
 * @description Componente para la barra lateral de navegación principal.
 */

"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/app/[locale]/i18n-navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

// Import of utilities
import { getSidebarIcon } from "../utils";

// Import of types
import type { BaseNavItemType } from "../utils/types";

interface NavMainProps {
  readonly items: BaseNavItemType[];
}

export function NavMain({ items }: NavMainProps) {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{t("portfolio")}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = getSidebarIcon(item.icon);
          return (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t(item.title)}>
                  <Link href={item.url}>
                    <Icon />
                    <span>{t(item.title)}</span>
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                        <ChevronRight />
                        <span className="sr-only">{tCommon("toggle")}</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}>
                                <span>{t(subItem.title)}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
