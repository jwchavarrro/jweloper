/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronUp } from "lucide-react";

// Import of components custom
import { Title } from "@/components/atomic-design/atoms";
import { InputSearch } from "@/components/pages/ia-chat/components";
import { SearchInstructions } from "@/components/pages/ia-chat/fragments";

// Import of utilities
import { APP_ROUTES } from "@/config";

export default function IaChat() {
  // Hooks
  const router = useRouter();
  const [queryChat, setQueryChat] = useState<string>("");

  // State generals
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  // Handlers
  /**
   * @name handleSubmit
   * @description Maneja el envío del formulario
   * @param value Valor del input
   */
  const handleSubmitChat = (value: string) => {
    if (!value.trim()) return;

    // Generar ID único para la conversación
    const chatId = crypto.randomUUID();

    // Redirigir a la página del chat con la pregunta como query param
    router.push(
      `${APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT.path}/${chatId}?q=${encodeURIComponent(value.trim())}`
    );
  };

  /**
   * @name toggleInstructions
   * @description Alterna la visibilidad de las instrucciones
   */
  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
      <section className="h-full container mx-auto grid grid-rows-2 gap-20 lg:gap-10">
        {/* Flow 1 */}
        <header className="flex items-center lg:items-end justify-center">
          <Title variant="gradient" className="text-center">
            ¿Por donde quieres empezar?
          </Title>
        </header>

        {/* Flow 2 -- Input Search */}
        <main className="flex flex-col justify-end lg:justify-start gap-5">
          <div className="w-full md:max-w-xl lg:max-w-2xl mx-auto">
            <InputSearch
              placeholder="Escribe tu pregunta..."
              size="lg"
              value={queryChat}
              onChange={setQueryChat}
              onSubmit={handleSubmitChat}
            />
          </div>

          <div className="flex flex-col items-center gap-2 justify-center">
            <button
              type="button"
              onClick={toggleInstructions}
              className="transition-transform hover:scale-110"
              aria-label={
                showInstructions
                  ? "Ocultar instrucciones"
                  : "Mostrar instrucciones"
              }
            >
              <ChevronUp
                className={`size-5 animate-bounce transition-transform ${
                  showInstructions ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
            {showInstructions && <SearchInstructions />}
          </div>
        </main>
      </section>
    </div>
  );
}
