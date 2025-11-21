/**
 * @file themeSlice.ts
 * @description Slice de Redux para gestionar el tema de la aplicación
 */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Import of types
import { EnumTheme, type ThemeStateType } from "@/app/utils/types";

// Obtener el tema del localStorage o usar "light" por defecto
const getInitialTheme = (): EnumTheme => {
  if (globalThis.window !== undefined) {
    const savedTheme = globalThis.localStorage.getItem("theme") as EnumTheme;
    if (savedTheme === EnumTheme.Light || savedTheme === EnumTheme.Dark) {
      return savedTheme;
    }
  }
  return EnumTheme.Light;
};

const initialState: ThemeStateType = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Acción para cambiar el tema
    setTheme: (state, action: PayloadAction<EnumTheme>) => {
      state.theme = action.payload;

      // Guardar en localStorage
      if (globalThis.window !== undefined) {
        globalThis.localStorage.setItem("theme", action.payload);
        globalThis.document.documentElement.classList.toggle(
          "dark",
          action.payload === EnumTheme.Dark
        );
      }
    },

    // Acción para alternar entre light y dark
    toggleTheme: (state) => {
      const newTheme =
        state.theme === EnumTheme.Light ? EnumTheme.Dark : EnumTheme.Light;
      state.theme = newTheme;

      // Guardar en localStorage
      if (globalThis.window !== undefined) {
        globalThis.localStorage.setItem("theme", newTheme);
        globalThis.document.documentElement.classList.toggle(
          "dark",
          newTheme === "dark"
        );
      }
    },
  },
});

// Exportar las acciones
export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
