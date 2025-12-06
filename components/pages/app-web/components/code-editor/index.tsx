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

// Import of utilities
import { getDisplayData } from "./utils";
import type { CodeEditorProps } from "./utils";

// Import of custom hooks
import { useIsMobile } from "@/hooks";

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code = "",
  language = "json",
  showSidebar = false,
  files = [],
  minHeight = "500px",
  className,
}) => {
  // Implement of custom hooks
  const isMobile = useIsMobile();

  // Implement of refs
  const codeScrollAreaRef = React.useRef<HTMLDivElement | null>(null);
  const lineNumbersRef = React.useRef<HTMLDivElement | null>(null);
  const lineNumbersContentRef = React.useRef<HTMLDivElement | null>(null);

  // Implement of state
  const [copyMessage, setCopyMessage] = React.useState<string | null>(null);

  // Obtener datos del primer archivo o usar props directas
  const { code: displayCode, language: displayLanguage } = getDisplayData(
    files,
    code,
    language
  );

  // Sincronizar scroll entre código y números de línea
  React.useEffect(() => {
    const codeScrollArea = codeScrollAreaRef.current;
    const lineNumbersContent = lineNumbersContentRef.current;
    if (!codeScrollArea || !lineNumbersContent) return;

    const codeViewport = codeScrollArea.querySelector(
      '[data-slot="scroll-area-viewport"]'
    ) as HTMLElement;
    if (!codeViewport) return;

    const handleScroll = () => {
      lineNumbersContent.style.transform = `translateY(-${codeViewport.scrollTop}px)`;
    };

    codeViewport.addEventListener("scroll", handleScroll);
    return () => codeViewport.removeEventListener("scroll", handleScroll);
  }, [displayCode]);

  // Copiar al portapapeles
  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(displayCode);
      setCopyMessage("Copiado al portapapeles");
      // Limpiar el mensaje después de 3 segundos
      setTimeout(() => {
        setCopyMessage(null);
      }, 3000);
    } catch {
      setCopyMessage("Error al copiar");
      setTimeout(() => {
        setCopyMessage(null);
      }, 3000);
    }
  }, [displayCode]);

  // Calcular número de líneas y generar números
  const { lineCount, lineNumbers } = React.useMemo(() => {
    const count = displayCode ? displayCode.split("\n").length : 1;
    return {
      lineCount: count,
      lineNumbers: Array.from({ length: count }, (_, i) => i + 1),
    };
  }, [displayCode]);

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
        {!isMobile && showSidebar && files.length > 0 && (
          <FileExplorer files={files} />
        )}

        {/* Área principal del editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {files.length > 0 && <TabsBar files={files} />}
          <CodeArea
            code={displayCode}
            codeScrollAreaRef={codeScrollAreaRef}
            lineNumbersRef={lineNumbersRef}
            lineNumbersContentRef={lineNumbersContentRef}
            lineNumbers={lineNumbers}
          />
        </div>
      </div>

      <CodeEditorFooter
        language={displayLanguage}
        lineCount={lineCount}
        characterCount={displayCode.length}
        onCopy={handleCopy}
        copyMessage={copyMessage}
      />
    </div>
  );
};
