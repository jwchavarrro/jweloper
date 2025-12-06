/**
 * @file types.ts
 * @description Tipos para el componente CodeEditor.
 */

/**
 * @name Language
 * @type {string}
 * @description Tipo para el lenguaje de programación.
 */
export type Language =
  | "javascript"
  | "typescript"
  | "css"
  | "html"
  | "json"
  | "plaintext";

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
 * @name CodeEditorProps
 * @type {Object}
 * @description Tipo para las propiedades del componente CodeEditor.
 */
export type CodeEditorProps = {
  readonly code?: string;
  readonly language?: Language;
  readonly showSidebar?: boolean;
  readonly files?: FileItem[];
  readonly minHeight?: string;
  readonly className?: string;
};
