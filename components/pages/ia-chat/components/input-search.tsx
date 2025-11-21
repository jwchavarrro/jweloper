/**
 * @file input-search.tsx
 * @description Componente de input de búsqueda con botón de limpiar.
 */

"use client";

import * as React from "react";
import { MoveUp } from "lucide-react";

// Import of components custom
import { InputText, Button } from "@/components/atomic-design/atoms";

// Import of utilities
import { cn } from "@/lib/utils";

export interface InputSearchProps
  extends Omit<React.ComponentProps<typeof InputText>, "value" | "onChange"> {
  /** Valor controlado del input */
  readonly value?: string;
  /** Callback cuando cambia el valor */
  readonly onChange?: (value: string) => void;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholder = "Buscar...",
  size = "lg",
  value = "",
  onChange,
  className,
  ...props
}) => {
  // General states
  const [internalValue, setInternalValue] = React.useState<string>(value);

  // Validations
  const isControlled = value !== undefined && onChange !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasValue = currentValue.length > 0;

  /**
   * Manejador de cambio del input
   * @param e Evento de cambio
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isControlled) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative [&_input]:pr-10">
        <InputText
          placeholder={placeholder}
          size={size}
          value={currentValue}
          onChange={handleChange}
          {...props}
        />
        {hasValue && (
          <Button
            type="button"
            size="icon-sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full hover:bg-muted z-10"
            onClick={() => {
              if (isControlled) {
                onChange("");
              } else {
                setInternalValue("");
              }
            }}
            aria-label="Limpiar búsqueda"
          >
            <MoveUp />
          </Button>
        )}
      </div>
    </div>
  );
};
