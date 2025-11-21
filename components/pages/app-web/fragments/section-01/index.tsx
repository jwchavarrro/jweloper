/**
 * @file section-01.tsx
 * @description Fragmento de la sección 01 de la página principal.
 */

import { MoveDownIcon } from "lucide-react";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";
import { CounterSection } from "@/components/pages/app-web/components";

export const Section01 = () => {
  return (
    <section className="relative h-full w-full">
      {/* Elementos de fondo */}
      <div className="absolute inset-0 grid grid-cols-2 p-10">
        <div className="flex items-end">
          <CounterSection value="01" />
        </div>
        <div className="flex flex-col items-end justify-end gap-5">
          <Text
            variant="large"
            className="[writing-mode:vertical-rl] [text-orientation:mixed]"
          >
            Scroll abajo
          </Text>
          <MoveDownIcon className="size-5 animate-bounce" />
        </div>
      </div>

      <div className="absolute inset-0 grid grid-cols-1 xl:grid-cols-2 content-center gap-2 animate-in slide-in-from-top-10 duration-300 ease-in-out">
        {/* Column 1 - Image */}
        <div className="size-full flex items-center justify-center">
          <div className="size-64 xl:size-96 bg-foreground" />
        </div>

        {/* Column 2 - Content */}
        <div className="max-w-2xl space-y-5">
          <div className="space-y-2">
            <Title
              variant="gradient"
              className="text-5xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap"
            >
              Desarrollador Frontend
            </Title>
            <Title
              variant="gradient"
              className="text-5xl! tracking-widest font-accent"
            >
              Sensible al frontend
            </Title>
          </div>
          <div className="flex flex-col xl:flex-row gap-2"></div>
        </div>
      </div>
    </section>
  );
};
