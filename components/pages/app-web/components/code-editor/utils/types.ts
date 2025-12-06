/**
 * @file types.ts
 * @description Tipos para el componente CodeEditor.
 */

export type Language =
  | "javascript"
  | "typescript"
  | "css"
  | "html"
  | "json"
  | "plaintext";

export interface FileItem {
  readonly name: string;
  readonly content: string;
  readonly language: Language;
  readonly icon?: React.ReactNode;
}

export interface CodeEditorProps {
  readonly code?: string;
  readonly language?: Language;
  /**
   * Mostrar barra lateral (explorador de archivos)
   * @default false
   */
  readonly showSidebar?: boolean;
  /**
   * Archivos en el explorador (solo visual) - si se proporciona, se usa el primero
   */
  readonly files?: FileItem[];
  readonly minHeight?: string;
  readonly className?: string;
}
