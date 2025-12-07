/**
 * @file section-04.tsx
 * @description Fragmento de la sección 04 de la página principal.
 */

"use client";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title, Text } from "@/components/atomic-design/atoms";
import Link from "next/link";

interface Section04Props {
  readonly anchorId?: string;
}

export const Section04: React.FC<Section04Props> = ({ anchorId }) => {
  return (
    <SnapPage id="04" anchorId={anchorId}>
      {/* Children content */}
      <div className="h-full absolute inset-0 grid grid-cols-1 xl:grid-cols-3 gap-[5%]">
        {/* Column 1 - Title */}
        <div className="h-full flex items-center justify-end">
          <Title
            variant="gradient"
            className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-right max-w-xl"
          >
            Contacto
          </Title>
        </div>
        {/* Column 2 - Content */}
        <div className="col-span-2 h-full">
          <div className="flex flex-col justify-center items-center">
            {/* Heading */}
            <Title
              level={1}
              variant="gradient"
              className="text-4xl! md:text-6xl! lg:text-7xl! text-center max-w-4xl"
            >
              Abierto a nuevas oportunidades y colaboraciones creativas
            </Title>
            {/* Supporting text */}
            <Text>
              ¿Listo para llevar tus ideas al siguiente nivel? <br />
              Conversemos sobre cómo puedo aportar valor a tu próximo proyecto o
              colaboración creativa.
            </Text>
            {/* Email link */}

            <Text>
              <Link
                href="mailto:jwchavarrro023@gmail.com"
                className="hover:underline"
              >
                jwchavarrro023@gmail.com
              </Link>
            </Text>

            {/* Links list */}
            <div className="flex flex-col gap-2 font-mono text-white text-base md:text-lg">
              <a
                href="https://m.me/tamalsen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mensajero
              </a>
              <a
                href="https://www.linkedin.com/in/tamalsen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/tamalsen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://github.com/tamalsen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </SnapPage>
  );
};
