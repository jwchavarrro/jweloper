/**
 * @file functions.ts
 * @description Funciones utilitarias para el componente CodeEditor.
 */

import type { FileItem, Language } from "./types";

/**
 * Obtiene los datos del primer archivo o usa los valores por defecto
 */
export const getDisplayData = (
  files: FileItem[],
  defaultCode: string,
  defaultLanguage: Language
) => {
  const firstFile = files[0];
  return {
    code: firstFile?.content ?? defaultCode,
    language: firstFile?.language ?? defaultLanguage,
  };
};

