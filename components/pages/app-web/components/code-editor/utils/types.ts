/**
 * @file types.ts
 * @description Tipos para el componente CodeEditor.
 */

export type Language =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "css"
  | "html"
  | "json"
  | "markdown"
  | "xml"
  | "yaml"
  | "plaintext";

export interface FileItem {
  /**
   * Nombre del archivo
   */
  readonly name: string;
  /**
   * Contenido del archivo
   */
  readonly content: string;
  /**
   * Lenguaje del archivo
   */
  readonly language: Language;
  /**
   * Icono del archivo (opcional)
   */
  readonly icon?: React.ReactNode;
}

export interface CodeEditorProps {
  /**
   * Código a mostrar (solo visualización)
   */
  readonly code?: string;
  /**
   * Lenguaje de programación para el resaltado de sintaxis
   * @default "json"
   */
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
  /**
   * Altura mínima del editor
   */
  readonly minHeight?: string;
  /**
   * Clase CSS personalizada
   */
  readonly className?: string;
}
