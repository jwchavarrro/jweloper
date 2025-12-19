/**
 * @file page.tsx
 * @description Página de todos los proyectos
 */

"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

// Import of components custom
import { Text, Title } from "@/components/atomic-design/atoms";

// Import of utilities
import { ICONS } from "@/config";

export default function ProyectosPage() {
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
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-xs uppercase text-gray-400 tracking-widest">
                <th className="px-4 pb-3">Año</th>
                <th className="px-4 pb-3">Proyecto</th>
                <th className="px-4 pb-3">Hecho en</th>
                <th className="px-4 pb-3">Construido con</th>
                <th className="px-4 pb-3">Enlace</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-4 py-3 align-middle text-gray-300 font-mono">
                  2023
                </td>
                <td className="px-4 py-3 align-middle font-semibold text-gray-100">
                  Colectivo Emersan
                </td>
                <td className="px-4 py-3 align-middle text-blue-200">
                  Usolatermint
                </td>
                <td className="px-4 py-3 align-middle">
                  <span className="inline-block bg-blue-900 text-xs text-blue-200 font-medium rounded-full px-3 py-1 mr-2">
                    Next.js
                  </span>
                  <span className="inline-block bg-blue-900 text-xs text-blue-200 font-medium rounded-full px-3 py-1 mr-2">
                    Typescript
                  </span>
                  <span className="inline-block bg-blue-900 text-xs text-blue-200 font-medium rounded-full px-3 py-1 mr-2">
                    SASS
                  </span>
                  <span className="inline-block bg-blue-900 text-xs text-blue-200 font-medium rounded-full px-3 py-1">
                    Dominio
                  </span>
                </td>
                <td className="px-4 py-3 align-middle">
                  <a
                    href="https://emersoncolective.com.ar"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 underline transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    emersoncolective.com.ar
                    <Icon
                      icon="tabler:external-link"
                      className="w-4 h-4 inline align-middle"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
