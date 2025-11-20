/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

export default function Home() {
  return (
    <div className="h-[calc(100vh-96px)]">
      <div className="h-full w-full max-w-4/5 mx-auto grid grid-cols-2 content-center gap-5 animate-in slide-in-from-top-10 duration-300 ease-in-out">
        <div className="size-full flex items-center justify-center">
          <div className="w-96 h-96 mx-auto bg-foreground rounded-full" />
        </div>
        <div className="max-w-2xl">
          <Text className="uppercase tracking-widest font-bold">Semi-Senior</Text>
          <Title variant="gradient" >
            Desarrollador Frontend | Especialista en React & Next.js
          </Title>
          <Text>
            Ayudo a construir aplicaciones web modernas, escalables y centradas
            en el usuario. Mi experiencia abarca desde prototipos rápidos hasta
            aplicaciones complejas.
          </Text>
        </div>
      </div>
    </div>
  );
}
