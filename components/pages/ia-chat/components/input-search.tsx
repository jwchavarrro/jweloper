/**
 * @file input-search.tsx
 * @description Componente de input de búsqueda con botón de limpiar.
 */

"use client";

import * as React from "react";
import { MoveUp } from "lucide-react";

// Import of components custom
import { InputText } from "@/components/atomic-design/atoms";
import { Button } from "@/components/ui/button";

// Import of utilities
import { cn } from "@/lib/utils";

export interface InputSearchProps
  extends Omit<
    React.ComponentProps<typeof InputText>,
    "value" | "onChange" | "onSubmit"
  > {
  /** Valor controlado del input */
  readonly value?: string;
  /** Callback cuando cambia el valor */
  readonly onChange?: (value: string) => void;
  /** Callback cuando se envía el formulario (Enter o clic en botón) */
  readonly onSubmit?: (value: string) => void;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholder = "Buscar...",
  size = "lg",
  value = "",
  onChange,
  onSubmit,
  className,
  ...props
}) => {
  // General states
  const [internalValue, setInternalValue] = React.useState<string>(value);

  // Validations
  const isControlled = value !== undefined && onChange !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasValue = Boolean(currentValue?.trim());

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

  /**
   * Limpia el valor del input
   */
  const handleClear = () => {
    if (isControlled) {
      onChange("");
    } else {
      setInternalValue("");
    }
  };

  /**
   * Manejador de envío del formulario
   */
  const handleSubmit = () => {
    const trimmedValue = currentValue.trim();
    if (trimmedValue && onSubmit) {
      onSubmit(trimmedValue);
    }
  };

  /**
   * Manejador del clic en el botón
   */
  const handleButtonClick = () => {
    if (onSubmit) {
      handleSubmit();
    } else {
      handleClear();
    }
  };

  /**
   * Manejador de teclas presionadas
   * @param e Evento de teclado
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
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
          onKeyDown={handleKeyDown}
          {...props}
        />
        {hasValue && (
          <Button
            type="button"
            size="icon-sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full hover:bg-muted z-10"
            onClick={handleButtonClick}
            aria-label={onSubmit ? "Enviar búsqueda" : "Limpiar búsqueda"}
          >
            <MoveUp />
          </Button>
        )}
      </div>
    </div>
  );
};
