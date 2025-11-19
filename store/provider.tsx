/**
 * @file provider.tsx
 * @description Provider de Redux para Next.js App Router
 * 
 * Este provider crea una instancia del store por cada request
 * para evitar problemas de hidratación en Next.js
 */

"use client"

import { useRef } from "react"
import { Provider } from "react-redux"

// Import of store
import { makeStore, type AppStore } from "./makeStore"


interface ReduxProviderProps {
  readonly children: React.ReactNode
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  const storeRef = useRef<AppStore | null>(null)
  
  // Crear el store solo una vez por componente
  storeRef.current ??= makeStore()

  return <Provider store={storeRef.current}>{children}</Provider>
}

