/**
 * @file search-instructions.tsx
 * @description Componente que muestra ejemplos de búsqueda usando Alert.
 */

"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

/**
 *@name SEARCH_EXAMPLES
 * @description Ejemplos de búsqueda que se pueden hacer con el IA.
 */
export const SearchInstructions = () => {
  const t = useTranslations("iaChat");
  const examples = t.raw("examples") as string[];

  return (
    <Alert className="bg-muted border rounded-lg p-5 max-w-2xl mx-auto">
      <AlertTitle>
        <Title level={4}>{t("examplesTitle")}</Title>
      </AlertTitle>
      <AlertDescription>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          {examples.map((example) => (
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
