/**
 * @file search-instructions.tsx
 * @description Componente que muestra ejemplos de búsqueda usando Alert.
 */

"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";

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
        <Typography variant="h4">{t("examplesTitle")}</Typography>
      </AlertTitle>
      <AlertDescription>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          {examples.map((example) => (
            <li key={example}>
              <Typography variant="small" color="secondary">
                {example}
              </Typography>
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
};
