

"use client";

/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

// Import of components custom
import { InputSearch } from "@/components/pages/ia-chat/components";
import { Title } from "@/components/atomic-design/atoms";

export default function IaChat() {
  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 animate-in slide-in-from-top-10 duration-300 ease-in-out">
        <Title>¿En qué puedo ayudarte?</Title>
        <div className="w-full max-w-3xl"> 
          <InputSearch placeholder="Escribe tu pregunta..." size="lg" />
        </div>
      </div>
    </div>
  );
}

