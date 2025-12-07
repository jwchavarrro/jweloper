/**
 * @file index.tsx
 * @description Componente principal para la versión 1 de la página principal.
 */

"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

// Import of utilities
import { SOCIAL_MEDIA } from "@/app/utils";

export const AppWebV1: React.FC = () => {
  return (
    <div className="relative h-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Column 1 - Content */}
      <div className="h-[calc(100dvh-96px)] overflow-hidden sticky top-0 self-start">
        <div className="flex flex-col justify-between max-w-xl mx-auto h-full py-10">
          <div className="space-y-8">
            <div className="max-w-md">
              <Title
                variant="gradient"
                className="text-4xl! md:text-6xl! text-wrap text-center xl:text-left max-w-xl"
              >
                John Chavarro Urrea
              </Title>
              <Title
                variant="gradient"
                className="text-base! md:text-lg! tracking-widest font-accent text-center xl:text-left"
              >
                Desarrollador Frontend
              </Title>
              <Text>
                Ayudo a construir aplicaciones web modernas, escalables y
                centradas en el usuario. Mi experiencia abarca desde prototipos
                rápidos hasta aplicaciones complejas.
              </Text>
            </div>

            <nav className="space-y-2">
              {[
                {
                  title: "ABOUT",
                  href: "#about",
                  active: true,
                },
                {
                  title: "EXPERIENCE",
                  href: "#experience",
                  active: false,
                },
                {
                  title: "PROJECTS",
                  href: "#projects",
                  active: false,
                },
              ].map(({ title, href, active }) => (
                <div
                  key={title}
                  className={`group flex items-center space-x-4 ${active ? "" : "opacity-40"}`}
                >
                  <span
                    className={`h-px ${active ? "w-20" : "w-10"} bg-foreground group-hover:w-20 transition-all duration-300`}
                  />
                  <Link href={href}>
                    <Text
                      className={`uppercase tracking-widest ${
                        active ? "font-bold" : "font-semibold"
                      } text-base`}
                    >
                      {title}
                    </Text>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
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
            ))}{" "}
          </div>
        </div>
      </div>

      {/* Column 2 - Scrollable Content */}
      <div
        className="h-[calc(100dvh-96px)] overflow-y-auto max-w-xl [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        <div className="space-y-4 py-10">
          <Text>
            Soy desarrollador Frontend con más de 3 años de experiencia creando
            aplicaciones web administrativas y soluciones digitales a la medida,
            utilizando React, Next.js, TypeScript y Tailwind CSS. Me especializo
            en el desarrollo de interfaces modernas, funcionales y escalables,
            garantizando experiencias consistentes y de alta calidad. He
            participado en la construcción de módulos completos como
            autenticación, gestión de usuarios, catálogos maestros, tablas
            dinámicas con filtros avanzados y carga de documentos. Mi enfoque
            combina buenas prácticas de arquitectura frontend, optimización de
            componentes y trabajo colaborativo en entornos ágiles. Mi objetivo
            es aportar al desarrollo de productos digitales robustos y
            eficientes, alineando las necesidades técnicas con la experiencia
            del usuario y los objetivos del negocio.
          </Text>
          <Text>
            Soy desarrollador Frontend con más de 3 años de experiencia creando
            aplicaciones web administrativas y soluciones digitales a la medida,
            utilizando React, Next.js, TypeScript y Tailwind CSS. Me especializo
            en el desarrollo de interfaces modernas, funcionales y escalables,
            garantizando experiencias consistentes y de alta calidad. He
            participado en la construcción de módulos completos como
            autenticación, gestión de usuarios, catálogos maestros, tablas
            dinámicas con filtros avanzados y carga de documentos. Mi enfoque
            combina buenas prácticas de arquitectura frontend, optimización de
            componentes y trabajo colaborativo en entornos ágiles. Mi objetivo
            es aportar al desarrollo de productos digitales robustos y
            eficientes, alineando las necesidades técnicas con la experiencia
            del usuario y los objetivos del negocio.
          </Text>
          <Text>
            Soy desarrollador Frontend con más de 3 años de experiencia creando
            aplicaciones web administrativas y soluciones digitales a la medida,
            utilizando React, Next.js, TypeScript y Tailwind CSS. Me especializo
            en el desarrollo de interfaces modernas, funcionales y escalables,
            garantizando experiencias consistentes y de alta calidad. He
            participado en la construcción de módulos completos como
            autenticación, gestión de usuarios, catálogos maestros, tablas
            dinámicas con filtros avanzados y carga de documentos. Mi enfoque
            combina buenas prácticas de arquitectura frontend, optimización de
            componentes y trabajo colaborativo en entornos ágiles. Mi objetivo
            es aportar al desarrollo de productos digitales robustos y
            eficientes, alineando las necesidades técnicas con la experiencia
            del usuario y los objetivos del negocio.
          </Text>
          <Text>
            Soy desarrollador Frontend con más de 3 años de experiencia creando
            aplicaciones web administrativas y soluciones digitales a la medida,
            utilizando React, Next.js, TypeScript y Tailwind CSS. Me especializo
            en el desarrollo de interfaces modernas, funcionales y escalables,
            garantizando experiencias consistentes y de alta calidad. He
            participado en la construcción de módulos completos como
            autenticación, gestión de usuarios, catálogos maestros, tablas
            dinámicas con filtros avanzados y carga de documentos. Mi enfoque
            combina buenas prácticas de arquitectura frontend, optimización de
            componentes y trabajo colaborativo en entornos ágiles. Mi objetivo
            es aportar al desarrollo de productos digitales robustos y
            eficientes, alineando las necesidades técnicas con la experiencia
            del usuario y los objetivos del negocio.
          </Text>
          <Text>
            Soy desarrollador Frontend con más de 3 años de experiencia creando
            aplicaciones web administrativas y soluciones digitales a la medida,
            utilizando React, Next.js, TypeScript y Tailwind CSS. Me especializo
            en el desarrollo de interfaces modernas, funcionales y escalables,
            garantizando experiencias consistentes y de alta calidad. He
            participado en la construcción de módulos completos como
            autenticación, gestión de usuarios, catálogos maestros, tablas
            dinámicas con filtros avanzados y carga de documentos. Mi enfoque
            combina buenas prácticas de arquitectura frontend, optimización de
            componentes y trabajo colaborativo en entornos ágiles. Mi objetivo
            es aportar al desarrollo de productos digitales robustos y
            eficientes, alineando las necesidades técnicas con la experiencia
            del usuario y los objetivos del negocio.
          </Text>
        </div>
      </div>
    </div>
  );
};
