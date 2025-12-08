/**
 * @file versionSlice.ts
 * @description Slice de Redux para gestionar la versión seleccionada de la aplicación
 */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Tipos para el estado de versión
export type VersionType = "v1" | "v2";

interface VersionStateType {
  selectedVersion: VersionType;
}

// Obtener la versión del localStorage o usar "v1" por defecto
const getInitialVersion = (): VersionType => {
  if (globalThis.window !== undefined) {
    const savedVersion = globalThis.localStorage.getItem(
      "selectedVersion"
    ) as VersionType;
    if (savedVersion === "v1" || savedVersion === "v2") {
      return savedVersion;
    }
  }
  return "v1";
};

const initialState: VersionStateType = {
  selectedVersion: getInitialVersion(),
};

const versionSlice = createSlice({
  name: "version",
  initialState,
  reducers: {
    // Acción para cambiar la versión
    setVersion: (state, action: PayloadAction<VersionType>) => {
      state.selectedVersion = action.payload;

      // Guardar en localStorage
      if (globalThis.window !== undefined) {
        globalThis.localStorage.setItem("selectedVersion", action.payload);
      }
    },

    // Acción para alternar entre v1 y v2
    toggleVersion: (state) => {
      const newVersion: VersionType =
        state.selectedVersion === "v1" ? "v2" : "v1";
      state.selectedVersion = newVersion;

      // Guardar en localStorage
      if (globalThis.window !== undefined) {
        globalThis.localStorage.setItem("selectedVersion", newVersion);
      }
    },
  },
});

// Exportar las acciones
export const { setVersion, toggleVersion } = versionSlice.actions;

export default versionSlice.reducer;
