/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

export default function Home() {
  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 animate-in slide-in-from-top-10 duration-300 ease-in-out">
        <Title>Hola, soy Jweloper</Title>
        <Text>
          Soy un desarrollador web full stack y me especializo en crear aplicaciones web y móviles.
        </Text>
      </div>
    </div>
  );
}
