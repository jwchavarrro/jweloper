/**
 * @file hooks.ts
 * @description Hooks tipados para usar Redux en componentes React
 */

import { useDispatch, useSelector, useStore } from "react-redux";

// Import of types
import type { AppDispatch, AppStore, RootState } from "./makeStore";

// Hook tipado para usar dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Hook tipado para usar selectores
export const useAppSelector = useSelector.withTypes<RootState>();

// Hook tipado para acceder al store directamente
export const useAppStore = useStore.withTypes<AppStore>();
