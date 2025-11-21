/**
 * @file useTheme.ts
 * @description Hook personalizado para acceder al estado del tema
 */

import { useAppSelector, useAppDispatch } from "../hooks";
import { setTheme, toggleTheme } from "../slices/themeSlice";
import type { EnumTheme } from "@/app/utils/types";

export const useTheme = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  return {
    theme,
    setTheme: (theme: EnumTheme) => dispatch(setTheme(theme)),
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
