/**
 * @file section-01.tsx
 * @description Fragmento de la sección 01 de la página principal.
 */

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";
import { CounterSection } from "@/components/pages/app-web/components";

export const Section01 = () => {
  return (
    <section className="h-full w-full grid grid-cols-1 xl:grid-cols-2 content-center gap-5 animate-in slide-in-from-top-10 duration-300 ease-in-out">
      {/* Column 1 - Image */}
      <div className="size-full flex items-center justify-center">
        <div className="w-48 lg:w-80 xl:w-96 h-48 lg:h-80 xl:h-96 xl:mx-auto bg-foreground rounded-full" />
      </div>

      {/* Column 2 - Content */}
      <div className="max-w-2xl space-y-5">
        <div>
          <Text className="uppercase tracking-widest font-bold">
            Semi-Senior
          </Text>
          <Title variant="gradient">
            Desarrollador Frontend | Especialista en React & Next.js
          </Title>
          <Text>
            Ayudo a construir aplicaciones web modernas, escalables y centradas
            en el usuario. Mi experiencia abarca desde prototipos rápidos hasta
            aplicaciones complejas.
          </Text>
        </div>
        <div className="flex flex-col xl:flex-row gap-2"></div>
      </div>
      <CounterSection value="01" />
    </section>
  );
};
