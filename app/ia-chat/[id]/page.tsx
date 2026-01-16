/**
 * @file app/ia-chat/[id]/page.tsx
 * @description Página dinámica de chat individual.
 */

"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Import of components custom
import { InputSearch } from "@/components/pages/ia-chat/components";
import { Text } from "@/components/atomic-design/atoms";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function IaChatIdPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q");

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");

  // Inicializar con la pregunta inicial si existe
  useEffect(() => {
    if (initialQuery && messages.length === 0) {
      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: initialQuery,
        timestamp: new Date(),
      };

      // Simular respuesta de la IA después de un breve delay
      setTimeout(() => {
        const assistantMessage: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Esta es una respuesta simulada a tu pregunta: "${initialQuery}". En una implementación real, aquí se mostraría la respuesta generada por la IA.`,
          timestamp: new Date(),
        };
        setMessages([userMessage, assistantMessage]);
      }, 500);
    }
  }, [initialQuery, messages.length]);

  /**
   * Maneja el envío de un nuevo mensaje
   * @param value Contenido del mensaje
   */
  const handleSubmit = (value: string) => {
    if (!value.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: value.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentInput("");

    // Simular respuesta de la IA
    setTimeout(() => {
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `Esta es una respuesta simulada a: "${value.trim()}". En una implementación real, aquí se conectaría con un servicio de IA para generar la respuesta.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-96px)] flex flex-col overflow-y-auto">
      {/* Chat Messages */}
      <div className="flex-1 container mx-auto px-4 py-6 max-w-4xl">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <Text variant="p" className="text-center">
              Iniciando conversación...
            </Text>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-md px-4 py-2 duration-300 ease-in-out ${
                    message.role === "user"
                      ? "bg-muted-foreground text-muted animate-in slide-in-from-bottom-10"
                      : "bg-muted animate-in slide-in-from-top-10"
                  }`}
                >
                  <Text variant="p" className="whitespace-pre-wrap">
                    {message.content}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Search */}
      <div className="flex flex-col items-center sticky bottom-0 left-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <InputSearch
            placeholder="Escribe tu pregunta..."
            size="lg"
            value={currentInput}
            onChange={setCurrentInput}
            onSubmit={handleSubmit}
          />
        </div>
        <Text
          variant="small"
          className="text-xs! text-muted-foreground text-center"
        >
          El Chat puede cometer errores. Considera replantear la pregunta.
        </Text>
      </div>
    </div>
  );
}
