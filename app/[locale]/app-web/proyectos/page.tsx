/**
 * @file page.tsx
 * @description Página de todos los proyectos
 */

"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

// Import of components custom
import { Text, Title } from "@/components/atomic-design/atoms";
import { Badge } from "@/components/atomic-design/molecules";

// Import of utilities
import { APP_ROUTES, ICONS } from "@/config";
import { Link as LocaleLink } from "@/app/[locale]/i18n-navigation";
import { HEADERS_ALL_PROJECTS } from "@/components/pages/app-web/proyectos";

// Import of types
import { useProjects, type ProjectType } from "@/components/pages/app-web";

export default function ProjectsPage() {
  const t = useTranslations("appWeb.allProjects");
  // Los 3 primeros ya se muestran en la vista principal
  const otherProjects = useProjects().slice(3);

  return (
    <div className="relative h-[calc(100dvh-96px)] mx-auto container space-y-10">
      {/* Header */}
      <header className="space-y-5">
        <LocaleLink href={APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB.path}>
          <div className="group flex items-end gap-2">
            <Icon
              icon={ICONS.ARROW_LEFT}
              className="size-7 group-hover:-translate-x-1 transition-all duration-300"
            />
            <Text className="font-bold">John Chavarro Urrea</Text>
          </div>
        </LocaleLink>
        <Title>{t("title")}</Title>
      </header>

      {/* Main -- Table */}
      <main>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            {/* Table header */}
            <thead className="border-b shadow-sm">
              <tr className="text-left tracking-widest">
                {HEADERS_ALL_PROJECTS.map((header) => (
                  <th key={header} className="p-1 py-2">
                    <Text>{t(`headers.${header}`)}</Text>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              {otherProjects.map((project: ProjectType) => (
                <tr key={project.id} className="border-b">
                  <td className="min-w-16 p-1 py-3">
                    <Text>{project.date}</Text>
                  </td>
                  <td className="p-1 py-3">
                    <Text className="font-bold">{project.name}</Text>
                  </td>
                  <td className="min-w-32 p-1 py-3">
                    <Text>{project.company?.name}</Text>
                  </td>
                  <td className="p-1 py-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tecnologies.map((technology: string) => (
                        <Badge key={technology} text={technology} />
                      ))}
                    </div>
                  </td>
                  <td className="p-1 py-3">
                    <Link
                      href={project.url || ""}
                      target="_blank"
                      className="group flex items-center gap-1"
                    >
                      <Text className="group-hover:underline group-hover:font-bold transition-all duration-300">
                        {project.name}
                      </Text>
                      <Icon
                        icon={ICONS.OPEN_IN_NEW}
                        className="group-hover:translate-x-1 transition-all duration-300"
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
