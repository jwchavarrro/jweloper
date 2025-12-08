/**
 * @file index.tsx
 * @description Componente principal para la versión 1 de la página principal.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

// Import of utilities
import { SOCIAL_MEDIA } from "@/app/utils";

// Import of custom hooks
import { useIsMobile } from "@/hooks";

const SECTIONS = [
  { id: "about", href: "#about", title: "ABOUT" },
  { id: "experience", href: "#experience", title: "EXPERIENCE" },
  { id: "projects", href: "#projects", title: "PROJECTS" },
] as const;

export const AppWebV1: React.FC = () => {
  // States generals
  const [activeSection, setActiveSection] = useState<string>("#about");

  // Implementation of custom hooks
  const isMobile = useIsMobile();

  /**
   * @name handleScrollToSection
   * @description Manejador para scroll a una sección específica.
   * @param {string} section - La sección a la que se va a scroll.
   */
  const handleScrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto lg:overscroll-none">
      {/* Column 1 - Content */}
      <div className="h-fit lg:h-[calc(100dvh-96px)] lg:overflow-hidden lg:sticky lg:top-0">
        <div className="flex flex-col justify-between lg:max-w-xl mx-auto h-full py-10 gap-5 lg:gap-0">
          <div className="space-y-8">
            <div className="lg:max-w-md">
              <Title
                variant="gradient"
                className="text-4xl! md:text-6xl! text-wrap lg:max-w-xl"
              >
                John Chavarro Urrea
              </Title>
              <Title
                variant="gradient"
                className="text-base! md:text-lg! tracking-widest font-accent"
              >
                Desarrollador Frontend
              </Title>
              <Text>
                Ayudo a construir aplicaciones web modernas, escalables y
                centradas en el usuario. Mi experiencia abarca desde prototipos
                rápidos hasta aplicaciones complejas.
              </Text>
            </div>

            {!isMobile && (
              <nav className="hidden lg:block space-y-2">
                {SECTIONS.map(({ title, href }) => {
                  const active = activeSection === href;
                  return (
                    <div
                      key={title}
                      className={`group flex items-center space-x-4 ${active ? "" : "opacity-40"}`}
                    >
                      <span
                        className={`h-px ${active ? "w-20" : "w-10"} bg-foreground group-hover:w-20 transition-all duration-300`}
                      />
                      <Link
                        href={href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScrollToSection(href);
                        }}
                      >
                        <Text
                          className={`uppercase tracking-widest ${
                            active ? "font-bold" : "font-semibold"
                          } text-base`}
                        >
                          {title}
                        </Text>
                      </Link>
                    </div>
                  );
                })}
              </nav>
            )}
          </div>

          {/* Social Media */}
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
        className="lg:h-[calc(100dvh-96px)] lg:overflow-y-auto lg:max-w-xl lg:[&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        <div id="about" className="space-y-4 py-10">
          <Text className="block lg:hidden uppercase tracking-widest font-bold text-base">
            ABOUT
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
        <div id="experience" className="space-y-4 py-10">
          <Text className="block lg:hidden uppercase tracking-widest font-bold text-base">
            EXPERIENCE
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
        <div id="projects" className="space-y-4 py-10">
          <Text className="block lg:hidden uppercase tracking-widest font-bold text-base">
            PROJECTS
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
