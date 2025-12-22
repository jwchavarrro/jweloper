/**
 * @file index.tsx
 * @description Componente Switch personalizado que extiende el Switch base de shadcn/ui
 * Permite agregar iconos dentro del thumb sin modificar el componente base
 */

import * as React from "react";
import { Switch as BaseSwitch } from "@/components/ui/switch";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

interface CustomSwitchProps extends React.ComponentProps<typeof BaseSwitch> {
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
}

export function Switch({
  className,
  checkedIcon,
  uncheckedIcon,
  checked,
  ...props
}: Readonly<CustomSwitchProps>) {
  const hasIcons = checkedIcon || uncheckedIcon;

  // Si no hay iconos, usar el componente base directamente
  if (!hasIcons) {
    return <BaseSwitch className={className} checked={checked} {...props} />;
  }

  // Si hay iconos, renderizar un switch personalizado
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 flex items-center justify-center",
          hasIcons ? "size-5" : "size-4"
        )}
      >
        <span className="flex items-center justify-center size-3">
          {checked ? checkedIcon : uncheckedIcon}
        </span>
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}
