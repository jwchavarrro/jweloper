/**
 * @file types.ts
 * @description Tipos para el componente GlassCodeWindow.
 */

/**
 * @name Language
 * @type {string}
 * @description Tipo para el lenguaje de programación.
 */
export type Language =
  "javascript" | "typescript" | "css" | "html" | "json" | "plaintext";

/**
 * @name FileItem
 * @type {Object}
 * @description Tipo para un archivo en el explorador.
 */
export interface FileItem {
  readonly name: string;
  readonly content: string;
  readonly language: Language;
  readonly icon?: React.ReactNode;
}

/**
 * @name GlassCodeWindowProps
 * @type {Object}
 * @description Tipo para las propiedades del componente GlassCodeWindow.
 */
export type GlassCodeWindowProps = {
  /** Archivos abiertos; el primero es el que se muestra */
  readonly files: FileItem[];
  readonly className?: string;
};
