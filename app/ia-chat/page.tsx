/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

"use client";

// Import of components custom
import { Title } from "@/components/atomic-design/atoms";
import { InputSearch } from "@/components/pages/ia-chat/components";

export default function IaChat() {
  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
      <div className="h-full container mx-auto grid grid-rows-2 gap-10 animate-in slide-in-from-top-10 duration-300 ease-in-out">
        <div className="flex items-end justify-center">
          <Title variant="gradient" className="text-center">
            ¿En qué puedo ayudarte?
          </Title>
        </div>
        <div className="w-full md:max-w-xl lg:max-w-2xl mx-auto flex items-end md:items-start justify-center">
          <InputSearch placeholder="Escribe tu pregunta..." size="lg" />
        </div>
      </div>
    </div>
  );
}
