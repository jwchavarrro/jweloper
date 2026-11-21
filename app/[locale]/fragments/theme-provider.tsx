/**
 * @file theme-provider.tsx
 * @description Wrapper cliente de ThemeProvider (next-themes).
 * El script anti-parpadeo solo se ejecuta en el HTML del servidor; en el cliente se
 * marca como data block (`application/json`) para evitar el aviso de React 19 sobre
 * `<script>` renderizados desde componentes.
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Import of types
import { EnumTheme } from "@/app/utils/types";

const CLIENT_SCRIPT_PROPS =
  typeof window === "undefined" ? undefined : { type: "application/json" };

export function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={EnumTheme.System}
      enableSystem
      disableTransitionOnChange
      scriptProps={CLIENT_SCRIPT_PROPS}
    >
      {children}
    </NextThemesProvider>
  );
}
