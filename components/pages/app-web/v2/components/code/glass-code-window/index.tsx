/**
 * @file index.tsx
 * @description Componente de editor de código con interfaz similar a VS Code (solo visual).
 */

"use client";

import * as React from "react";
import { GLASS_SURFACE_CLASSES } from "@/components/glass-design/atoms";
import { useTranslations } from "next-intl";
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
import type { GlassCodeWindowProps } from "./utils";

// Import of custom hooks
import { useIsMobile } from "@/hooks";

export const GlassCodeWindow: React.FC<GlassCodeWindowProps> = ({
  files,
  className,
}) => {
  const t = useTranslations("appWeb");
  // Implement of custom hooks
  const isMobile = useIsMobile();

  // Implement of refs
  const codeScrollAreaRef = React.useRef<HTMLDivElement | null>(null);
  const lineNumbersRef = React.useRef<HTMLDivElement | null>(null);
  const lineNumbersContentRef = React.useRef<HTMLDivElement | null>(null);

  // Implement of state
  const [copyMessage, setCopyMessage] = React.useState<string | null>(null);
  // Archivo activo (el primero)
  const [activeFile] = files;
  const displayCode = activeFile?.content ?? "";
  const displayLanguage = activeFile?.language ?? "plaintext";

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
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayCode);
      setCopyMessage(t("copied"));
      // Limpiar el mensaje después de 3 segundos
      setTimeout(() => {
        setCopyMessage(null);
      }, 3000);
    } catch {
      setCopyMessage(t("copyError"));
      setTimeout(() => {
        setCopyMessage(null);
      }, 3000);
    }
  };

  // Calcular número de líneas y generar números
  const lineCount = displayCode ? displayCode.split("\n").length : 1;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div
      className={cn(
        GLASS_SURFACE_CLASSES,
        "flex flex-col rounded-3xl overflow-hidden",
        className
      )}
    >
      {/* Header */}
      <CodeEditorHeader isMobile={isMobile} />

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Barra lateral - Explorador de archivos */}
        {!isMobile && files.length > 0 && <FileExplorer files={files} />}

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
