/**
 * @file search-instructions.tsx
 * @description Componente que muestra ejemplos de búsqueda usando Alert.
 */

"use client";

import * as React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

/**
 *@name SEARCH_EXAMPLES
 * @description Ejemplos de búsqueda que se pueden hacer con el IA.
 */
const SEARCH_EXAMPLES = [
  "Consultar última empresa registrada y responsabilidades principales.",
  "Listar las tecnologías con mayor dominio según el CV.",
  "Obtener el proyecto más destacado y los aportes realizados.",
  "Extraer los puntos que diferencian su perfil profesional frente a otros.",
  "Ver formación académica principal indicada en el documento.",
  "Mostrar enlace del portafolio disponible en el CV.",
] as const;

export const SearchInstructions = () => {
  return (
    <Alert className="bg-muted border rounded-lg p-5 max-w-2xl mx-auto">
      <AlertTitle>
        <Title level={4}>Ejemplo de búsqueda:</Title>
      </AlertTitle>
      <AlertDescription>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          {SEARCH_EXAMPLES.map((example) => (
            <li key={example}>
              <Text variant="small" color="secondary">
                {example}
              </Text>
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
};
