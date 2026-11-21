/**
 * @file provider.tsx
 * @description Provider de Redux para Next.js App Router
 *
 * Este provider crea una instancia del store por cada request
 * para evitar problemas de hidratación en Next.js
 */

"use client";

import { useState } from "react";
import { Provider } from "react-redux";

// Import of store
import { makeStore } from "./makeStore";

interface ReduxProviderProps {
  readonly children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  // Crear el store solo una vez por componente
  const [store] = useState(makeStore);

  return <Provider store={store}>{children}</Provider>;
}
