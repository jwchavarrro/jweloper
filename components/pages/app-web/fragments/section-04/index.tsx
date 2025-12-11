/**
 * @file section-04.tsx
 * @description Fragmento de la sección 04 de la página principal.
 */

"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title, Text } from "@/components/atomic-design/atoms";

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
        <div className="col-span-2 h-full border">
          <div className="h-full flex flex-col justify-center items-center">
            {/* <Title
              level={1}
              variant="gradient"
              className="text-4xl! md:text-6xl! lg:text-7xl! text-center max-w-4xl"
            >
              Abierto a nuevas oportunidades y colaboraciones creativas
            </Title>
            <Text>
              ¿Listo para llevar tus ideas al siguiente nivel? <br />
              Conversemos sobre cómo puedo aportar valor a tu próximo proyecto o
              colaboración creativa.
            </Text> */}

            {/* Links list */}
            <div className="flex flex-col gap-2 text-base md:text-lg">
              <a
                href="https://m.me/tamalsen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Email
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
                Whatsapp
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

            <div className="flex items-center space-x-4">
              <button
                type="button"
                //onClick={() => dispatch(setVersion("v2"))}
                className="group flex items-center gap-1 text-[9px]! text-sm/3"
              >
                v2.2.0 |{" "}
                <span className="group-hover:underline cursor-pointer">
                  Ver anterior versión
                </span>
                <Icon
                  icon="mdi:arrow-right"
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SnapPage>
  );
};
