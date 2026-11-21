/**
 * @file index.tsx
 * @description Molécula InputField: une los átomos Label (opcional, con indicador de
 * obligatorio) e Input. Un solo componente para todos los tipos (`text`, `number`,
 * `email`, `date`…); `date` agrega el icono de calendario.
 */

import * as React from "react";

// Import of components custom
import {
  Icon,
  Input,
  Label,
  Typography,
} from "@/components/atomic-design/atoms";
import type { InputProps } from "@/components/atomic-design/atoms";

// Import of utilities
import { ICONS } from "@/config";
import { cn } from "@/lib/utils";

/**
 * @name DATE_INPUT_CLASSES
 * @description Oculta el indicador nativo del selector de fecha y lo estira sobre el
 * icono propio, para que el clic en el icono siga abriendo el selector nativo.
 */
const DATE_INPUT_CLASSES =
  "pr-10 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-3 [&::-webkit-calendar-picker-indicator]:size-5 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0";

export interface InputFieldProps extends InputProps {
  readonly label?: string;
  readonly error?: string;
  readonly helperText?: string;
}

export function InputField({
  label,
  error,
  helperText,
  required,
  type = "text",
  id,
  className,
  ...props
}: Readonly<InputFieldProps>) {
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const isDate = type === "date";

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <Label
          htmlFor={inputId}
          required={required}
          className={cn(error && "text-destructive")}
        >
          {label}
        </Label>
      )}

      <div className="relative">
        <Input
          id={inputId}
          type={type}
          required={required}
          className={cn(isDate && DATE_INPUT_CLASSES, className)}
          aria-invalid={error ? true : undefined}
          aria-describedby={cn(errorId, helperId) || undefined}
          {...props}
        />
        {isDate && (
          <Icon
            icon={ICONS.CALENDAR}
            aria-hidden
            className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
          />
        )}
      </div>

      {error && (
        <Typography
          variant="muted"
          id={errorId}
          className="text-destructive"
          role="alert"
        >
          {error}
        </Typography>
      )}

      {helperText && !error && (
        <Typography variant="muted" id={helperId}>
          {helperText}
        </Typography>
      )}
    </div>
  );
}
