/**
 * @file functions.ts
 * @description Funciones utilitarias para el componente CodeEditor.
 */

import type { FileItem, Language } from "./types";

/**
 * @name getDisplayData
 * @description Obtiene los datos del primer archivo o usa los valores por defecto
 * @param {FileItem[]} files - Archivos en el explorador
 * @param {string} defaultCode - Código por defecto
 * @param {Language} defaultLanguage - Lenguaje por defecto
 * @returns {Object} - Datos del primer archivo
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
