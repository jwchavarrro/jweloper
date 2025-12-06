/**
 * @file index.tsx
 * @description Componente de editor de código con interfaz similar a VS Code (solo visual).
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Import of fragments
import {
  CodeEditorHeader,
  FileExplorer,
  TabsBar,
  CodeArea,
  CodeEditorFooter,
} from "./fragments";

// Import of types
import type { CodeEditorProps } from "./utils";
import { useIsMobile } from "@/hooks";

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code = "",
  fileName = "code.json",
  language = "json",
  showSidebar = false,
  files = [],
  minHeight = "500px",
  className,
}) => {
  // Implement of state
  const [isFolderOpen, setIsFolderOpen] = React.useState(true);

  // Implement of custom hooks
  const isMobile = useIsMobile();

  // Implement of  refs
  const codeScrollAreaRef = React.useRef<HTMLDivElement | null>(null);
  const lineNumbersRef = React.useRef<HTMLDivElement | null>(null);

  /**
   * @name displayCode
   * @description Obtener código y lenguaje del primer archivo o usar props directas
   */
  const displayCode = React.useMemo(() => {
    if (files.length > 0) {
      return files[0].content;
    }
    return code;
  }, [files, code]);

  /**
   * @name displayLanguage
   * @description Obtener lenguaje del primer archivo o usar props directas
   */
  const displayLanguage = React.useMemo(() => {
    if (files.length > 0) {
      return files[0].language;
    }
    return language;
  }, [files, language]);

  /**
   * @name displayFileName
   * @description Obtener nombre del archivo del primer archivo o usar props directas
   */
  const displayFileName = React.useMemo(() => {
    if (files.length > 0) {
      return files[0].name;
    }
    return fileName;
  }, [files, fileName]);

  // Sincronizar scroll entre código y números de línea
  React.useEffect(() => {
    const codeScrollArea = codeScrollAreaRef.current;
    const lineNumbersContainer = lineNumbersRef.current;

    if (!codeScrollArea || !lineNumbersContainer) return;

    // Buscar el viewport dentro del ScrollArea del código
    const codeViewport = codeScrollArea.querySelector(
      '[data-slot="scroll-area-viewport"]'
    ) as HTMLElement;

    if (!codeViewport) return;

    const handleScroll = () => {
      // Sincronizar el scroll de los números de línea con el código
      lineNumbersContainer.scrollTop = codeViewport.scrollTop;
    };

    codeViewport.addEventListener("scroll", handleScroll);
    return () => codeViewport.removeEventListener("scroll", handleScroll);
  }, [displayCode]);

  // Copiar al portapapeles
  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(displayCode);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  }, [displayCode]);

  // Calcular número de líneas
  const lineCount = React.useMemo(() => {
    if (!displayCode) return 1;
    return displayCode.split("\n").length;
  }, [displayCode]);

  // Generar números de línea
  const lineNumbers = React.useMemo(() => {
    return Array.from({ length: lineCount }, (_, i) => i + 1);
  }, [lineCount]);

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border bg-foreground overflow-hidden shadow-lg",
        className
      )}
      style={{ minHeight }}
    >
      {/* Header */}
      <CodeEditorHeader />

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Barra lateral - Explorador de archivos */}
        {!isMobile && showSidebar && (
          <FileExplorer
            files={files}
            activeFile={displayFileName}
            onFileSelect={() => {}}
            isFolderOpen={isFolderOpen}
            onFolderToggle={setIsFolderOpen}
          />
        )}

        {/* Área principal del editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TabsBar
            files={files}
            activeFile={displayFileName}
            onFileSelect={() => {}}
          />
          <CodeArea
            code={displayCode}
            codeScrollAreaRef={codeScrollAreaRef}
            lineNumbersRef={lineNumbersRef}
            lineNumbers={lineNumbers}
          />
        </div>
      </div>

      <CodeEditorFooter
        language={displayLanguage}
        lineCount={lineCount}
        characterCount={displayCode.length}
        onCopy={handleCopy}
      />
    </div>
  );
};
