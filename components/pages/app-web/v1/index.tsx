/**
 * @file index.tsx
 * @description Componente principal para la versión 1 de la página principal.
 */

"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

// Import of utilities
import { SOCIAL_MEDIA } from "@/app/utils";
import { NAVIGATION_APP_WEB_V1_SECTIONS, getInitialSection } from "./utils";

// Import of custom hooks
import { useIsMobile } from "@/hooks";
import { CardA } from "./components/cards";

export const AppWebV1: React.FC = () => {
  // States generals
  const [activeSection, setActiveSection] = useState<string>(getInitialSection);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Implementation of custom hooks
  const isMobile = useIsMobile();

  /**
   * @name handleScrollToSection
   * @description Manejador para scroll a una sección específica.
   * @param {string} section - La sección a la que se va a scroll.
   */
  const handleScrollToSection = useCallback(
    (section: string) => {
      setActiveSection(section);
      // Actualizar la URL sin recargar la página
      if (globalThis.window !== undefined) {
        globalThis.window.history.pushState(null, "", section);
      }
      const sectionId = section.replace("#", "");
      const element = document.getElementById(sectionId);
      if (!element) return;

      if (isMobile) {
        // En mobile, el scroll es del documento completo
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // En desktop, el scroll es del contenedor específico
        const container = scrollContainerRef.current;
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();
          const scrollTop =
            container.scrollTop + elementRect.top - containerRect.top - 20;
          container.scrollTo({ top: scrollTop, behavior: "smooth" });
        }
      }
    },
    [isMobile]
  );

  /**
   * @name sectionsWithActive
   * @description Memoizar las secciones con su estado activo.
   * @returns {NavigationAppWebV1SectionsType[]} - Lista de secciones con su estado activo.
   */
  const sectionsWithActive = useMemo(
    () =>
      NAVIGATION_APP_WEB_V1_SECTIONS.map((section) => ({
        ...section,
        active: activeSection === section.href,
      })),
    [activeSection]
  );

  return (
    <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-y-auto lg:overscroll-none">
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
                {sectionsWithActive.map(({ title, href, active }) => (
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
                ))}
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
        ref={scrollContainerRef}
        className="lg:h-[calc(100dvh-96px)] lg:overflow-y-auto lg:max-w-3xl lg:[&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        <div id="about" className="space-y-4 py-10">
          <Text className="block lg:hidden uppercase tracking-widest font-bold text-base">
            SOBRE MÍ
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
            EXPERIENCIA
          </Text>
          <CardA
            data={{
              dates: "2022 — 2025",
              title: "Desarrollador de Aplicaciones a la Medida",
              company: {
                name: "Prevalentware s.a.s",
                url: "https://www.prevalentware.com/es/",
              },
              location: "Neiva, Colombia",
              isRemote: true,
              description: [
                "Desarrollé interfaces administrativas completas para productos empresariales, incluyendo login, registro, recuperación de contraseñas, gestión de usuarios, carga/descarga de archivos y administración de catálogos maestros.",
                "Implementé integraciones con APIs REST y servicios externos, asegurando una comunicación estable, eficiente y segura entre el frontend y los sistemas internos.",
                "Optimicé componentes reutilizables y responsivos basados en React y Tailwind CSS, mejorando la mantenibilidad y consistencia visual.",
                "Apliqué buenas prácticas de arquitectura, documentación y versionado, contribuyendo a procesos de desarrollo ágiles.",
              ],
              technologies: [
                "React",
                "Tailwind CSS",
                "JavaScript",
                "TypeScript",
                "REST APIs",
              ],
            }}
          />
        </div>
        <div id="projects" className="space-y-4 py-10">
          <Text className="block lg:hidden uppercase tracking-widest font-bold text-base">
            PROYECTOS
          </Text>
        </div>
      </div>
    </div>
  );
};
