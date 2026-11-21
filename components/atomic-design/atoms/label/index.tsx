/**
 * @file index.tsx
 * @description Átomo base de label. Extiende el Label de shadcn/ui; con `required`
 * muestra el indicador de campo obligatorio.
 */

import * as React from "react";
import { Label as BaseLabel } from "@/components/ui/label";

// Import of utilities
import { cn } from "@/lib/utils";

export interface LabelProps extends React.ComponentProps<typeof BaseLabel> {
  readonly required?: boolean;
}

export function Label({
  required,
  className,
  children,
  ...props
}: Readonly<LabelProps>) {
  return (
    <BaseLabel className={cn(className)} {...props}>
      {children}
      {required && (
        <span className="text-destructive" aria-hidden>
          *
        </span>
      )}
    </BaseLabel>
  );
}
