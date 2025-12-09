/**
 * @file index.tsx
 * @description Componente principal para la versión 1 de la página principal.
 */

"use client";

import { motion } from "motion/react";
import { useState, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";
import { CardA, CardB } from "@/components/pages/app-web/v1/components/cards";

// Import of utilities
import { SOCIAL_MEDIA } from "@/app/utils";
import {
  EXPERIENCES_APP_WEB_V1,
  NAVIGATION_APP_WEB_V1_SECTIONS,
  PROJECTS_APP_WEB_V1,
} from "@/components/pages/app-web/v1/utils";

// Import of custom hooks
import { useIsMobile } from "@/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setVersion } from "@/store/slices/versionSlice";

// Import of types
import { ExperienceType, ProjectType } from "@/components/pages/app-web";

export const AppWebV1: React.FC = () => {
  // Implementation of custom hooks
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();

  // States generals
  const [activeSection, setActiveSection] = useState<string>(
    NAVIGATION_APP_WEB_V1_SECTIONS[0].href
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  /**
   * @name handleScrollToSection
   * @description Manejador para scroll a una sección específica.
   * @param {string} section - La sección a la que se va a scroll.
   */
  const handleScrollToSection = useCallback(
    (section: string) => {
      setActiveSection(section);
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
          // Calcular la posición del elemento relativa al contenedor
          const containerRect = container.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();
          const relativeTop = elementRect.top - containerRect.top;
          const scrollTop = container.scrollTop + relativeTop - 20;
          container.scrollTo({
            top: Math.max(0, scrollTop),
            behavior: "smooth",
          });
        }
      }
    },
    [isMobile]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-y-auto lg:overscroll-none"
    >
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
            ))}
            <button
              type="button"
              onClick={() => dispatch(setVersion("v2"))}
              className="group flex items-center gap-1 text-[9px]! text-sm/3"
            >
              v1.2.0 |{" "}
              <span className="group-hover:underline cursor-pointer">
                Ver la nueva versión
              </span>
              <Icon
                icon="mdi:arrow-right"
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </button>
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
        {/* About */}
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

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          id="experience"
          className="space-y-4 py-10"
        >
          <Text className="block lg:hidden uppercase tracking-widest font-bold text-base">
            EXPERIENCIA
          </Text>
          {EXPERIENCES_APP_WEB_V1.map((experience: ExperienceType) => (
            <CardA key={experience.dates} data={experience} />
          ))}
          <Link
            href="/docs/CV JOHN CHAVARRO 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Title
              level={4}
              className="text-base flex items-center gap-2 group-hover:underline"
            >
              Ver CV completo
              <Icon
                icon="mdi:open-in-new"
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </Title>
          </Link>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          id="projects"
          className="space-y-4 py-10"
        >
          <Text className="block lg:hidden uppercase tracking-widest font-bold text-base">
            PROYECTOS
          </Text>
          {PROJECTS_APP_WEB_V1.map((project: ProjectType) => (
            <CardB
              key={project.name}
              data={{
                mainImage: project.image || "",
                title: project.name,
                url: project.url,
                description:
                  project.description
                    .split("\n")
                    .map((item: string) => item.trim()) || [],
                tecnologies: project.tecnologies,
              }}
            />
          ))}
          <Link href="/" className="group">
            <Title
              level={4}
              className="text-base flex items-center gap-2 group-hover:underline"
            >
              Ver todos los proyectos
              <Icon
                icon="mdi:open-in-new"
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </Title>
          </Link>
          <Text className="text-[10px]">
            * Los proyectos listados representan mi participación en iniciativas
            realizadas durante mi trayectoria profesional, descritas de forma
            general para respetar la confidencialidad de cada empresa.
          </Text>
        </motion.div>
      </div>
    </motion.div>
  );
};
