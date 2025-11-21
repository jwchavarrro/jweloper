/**
 * @file section-01.tsx
 * @description Fragmento de la sección 01 de la página principal.
 */

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

export const Section01 = () => {
  return (
    <section className="h-full w-full max-w-11/12 md:max-w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-2 content-center gap-5 animate-in slide-in-from-top-10 duration-300 ease-in-out">
      <div className="size-full flex items-center justify-center">
        <div className="w-48 lg:w-80 xl:w-96 h-48 lg:h-80 xl:h-96 xl:mx-auto bg-foreground rounded-full" />
      </div>
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
    </section>
  );
};
