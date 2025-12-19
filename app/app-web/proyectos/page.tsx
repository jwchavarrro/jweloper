/**
 * @file page.tsx
 * @description Página de todos los proyectos
 */

"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

// Import of components custom
import { Text, Title } from "@/components/atomic-design/atoms";
import { Badge } from "@/components/atomic-design/molecules";

// Import of utilities
import { ICONS } from "@/config";
import { HEADERS_ALL_PROJECTS } from "@/components/pages/app-web/proyectos";

// Import of types
import { PROJECTS_APP_WEB, type ProjectType } from "@/components/pages/app-web";

export default function ProjectsPage() {
  /**
   * @name getAllProjects
   * @description Obtiene los proyectos desde la posición indicada (startIndex) hasta el final, ordenados de más reciente a más antiguo.
   * @param {number} startIndex - Índice a partir del cual empezar a mapear (por defecto: 0).
   * @returns {ProjectType[]} - Lista de todos los proyectos desde la posición indicada (startIndex) hasta el final, ordenados de más reciente a más antiguo.
   */
  const getAllProjects = useMemo(
    () =>
      (startIndex: number = 0): ProjectType[] => {
        return PROJECTS_APP_WEB.slice(startIndex);
      },
    []
  );

  return (
    <div className="relative h-[calc(100dvh-96px)] mx-auto container space-y-10">
      {/* Header */}
      <header className="space-y-5">
        <Link href="/app-web">
          <div className="group flex items-end gap-2">
            <Icon
              icon={ICONS.ARROW_LEFT}
              className="size-7 group-hover:-translate-x-1 transition-all duration-300"
            />
            <Text className="tracking-widest">John Chavarro Urrea</Text>
          </div>
        </Link>
        <Title>Todos los proyectos</Title>
      </header>

      {/* Main -- Table */}
      <main>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="border-b shadow-sm">
              <tr className="text-left tracking-widest">
                {HEADERS_ALL_PROJECTS.map((header: string) => (
                  <th key={header} className="p-1 py-2">
                    <Text>{header}</Text>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getAllProjects(3).map((project: ProjectType) => (
                <tr key={project.name} className="border-b">
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
