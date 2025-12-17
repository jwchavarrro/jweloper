/**
 * @file section-04.tsx
 * @description Fragmento de la sección 04 de la página principal.
 */

"use client";

import { Icon } from "@iconify/react";

// Import of components custom
import { SnapPage } from "@/components/atomic-design/templates";
import { Title } from "@/components/atomic-design/atoms";
import { WordsAnimation } from "@/components/pages/app-web/components";

// Import of utilities
import { SOCIAL_MEDIA } from "@/app/utils/constants";

// Import of custom hooks
import { useAppDispatch } from "@/store/hooks";
import { setVersion } from "@/store/slices/versionSlice";

interface Section04Props {
  readonly anchorId?: string;
}

export const Section04: React.FC<Section04Props> = ({ anchorId }) => {
  // Implementation of custom hooks
  const dispatch = useAppDispatch();
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
            {"<Contacto/>"}
          </Title>
        </div>
        {/* Column 2 - Content */}
        <div className="col-span-2 h-full">
          <div className="h-full flex flex-col justify-center items-end">
            {/* <Title
              level={1}
              variant="gradient"
              className="text-4xl! md:text-6xl! lg:text-7xl! text-center max-w-4xl"
            >
              Abierto a nuevas oportunidades y colaboraciones creativas
            </Title>
             */}

            {/*  <Text>
              ¿Listo para llevar tus ideas al siguiente nivel? <br />
              Conversemos sobre cómo puedo aportar valor a tu próximo proyecto o
              colaboración creativa.
            </Text> */}

            {/* Links list */}
            <WordsAnimation
              words={SOCIAL_MEDIA.map(({ name, url }) => ({
                name,
                href: url,
              }))}
              className="justify-end items-end"
            />

            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => dispatch(setVersion("v1"))}
                className="group flex items-center gap-1 text-[9px]! text-sm/3"
              >
                v2.5.0 |{" "}
                <span className="group-hover:underline cursor-pointer">
                  Ver la versión anterior
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
