/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

import Link from "next/link";

// Import of components custom
import { Title, Text, Button } from "@/components/atomic-design/atoms";

// Import of utilities
import { HOME_DATA, HOME_ICONS } from "@/components/pages";

export default function Home() {
  return (
    <div className="h-[calc(100vh-96px)]">
      <section className="h-full w-full max-w-11/12 md:max-w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-2 content-center gap-5 animate-in slide-in-from-top-10 duration-300 ease-in-out">
        {/* Column 1 - Image */}
        <div className="size-full flex items-center justify-center">
          <div className="w-48 lg:w-80 xl:w-96 h-48 lg:h-80 xl:h-96 xl:mx-auto bg-foreground rounded-full" />
        </div>

        {/* Column 2 - Content */}
        <div className="max-w-2xl space-y-5">
          <div>
            <Text variant="lead" className="uppercase tracking-widest">
              Semi-Senior
            </Text>
            <Title
              variant="gradient"
              className="text-5xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl! text-wrap"
            >
              Desarrollador Frontend | Especialista en React & Next.js
            </Title>
            <Text>
              Ayudo a construir aplicaciones web modernas, escalables y
              centradas en el usuario. Mi experiencia abarca desde prototipos
              rápidos hasta aplicaciones complejas.
            </Text>
          </div>
          <div className="flex flex-col xl:flex-row gap-2">
            {HOME_DATA?.buttons?.map((button) => {
              const IconComponent = HOME_ICONS[button.icon];
              return (
                <Button
                  key={button.label}
                  size="lg"
                  className="hover:cursor-pointer"
                  asChild
                >
                  <Link href={button.url}>
                    {IconComponent && <IconComponent className="size-4" />}
                    {button.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
