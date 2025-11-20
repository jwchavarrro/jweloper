/**
 * @file makeStore.ts
 * @description Factory function para crear el store de Redux
 * Necesario para Next.js App Router para evitar problemas de hidratación
 */

import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./slices/themeSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
    // Configuración para desarrollo
    devTools: process.env.NODE_ENV !== "production",
  })
}

// Export of types
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

