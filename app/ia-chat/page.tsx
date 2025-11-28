/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Import of components custom
import { Title } from "@/components/atomic-design/atoms";
import { InputSearch } from "@/components/pages/ia-chat/components";

export default function IaChat() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  /**
   * Maneja el envío del formulario
   * @param value Valor del input
   */
  const handleSubmit = (value: string) => {
    if (!value.trim()) return;

    // Generar ID único para la conversación
    const chatId = crypto.randomUUID();

    // Redirigir a la página del chat con la pregunta como query param
    router.push(`/ia-chat/${chatId}?q=${encodeURIComponent(value.trim())}`);
  };

  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
      <div className="h-full container mx-auto grid grid-rows-2 gap-10 animate-in slide-in-from-top-10 duration-300 ease-in-out">
        <div className="flex items-end justify-center">
          <Title variant="gradient" className="text-center">
            ¿En qué puedo ayudarte?
          </Title>
        </div>
        <div className="w-full md:max-w-xl lg:max-w-2xl mx-auto flex items-end md:items-start justify-center">
          <InputSearch
            placeholder="Escribe tu pregunta..."
            size="lg"
            value={query}
            onChange={setQuery}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
