/**
 * @file status-bar.tsx
 * @description Fragmento de la barra de estado.
 */

import * as React from "react";
import { CopyIcon } from "lucide-react";
import { Text } from "@/components/atomic-design/atoms";

interface CodeEditorFooterProps {
  readonly language: string;
  readonly lineCount: number;
  readonly characterCount: number;
  readonly onCopy: () => void;
  readonly copyMessage: string | null;
}

export const CodeEditorFooter: React.FC<CodeEditorFooterProps> = ({
  language,
  lineCount,
  characterCount,
  onCopy,
  copyMessage,
}) => {
  return (
    <footer className="flex items-center justify-between px-4 bg-[#007acc]">
      <div className="flex items-center gap-4">
        <Text variant="small" className="text-[11px] text-white">
          {language.toUpperCase()}
        </Text>
        <Text variant="small" className="text-[11px] text-white">
          {lineCount} líneas
        </Text>
        <Text variant="small" className="text-[11px] text-white">
          {characterCount} caracteres
        </Text>
      </div>
      <div className="flex items-center gap-2">
        {copyMessage && (
          <Text variant="small" className="text-[11px] text-white">
            {copyMessage}
          </Text>
        )}
        <button
          type="button"
          className="p-1.5 rounded text-white hover:bg-white/10 transition-colors"
          title="Copiar código"
          onClick={onCopy}
        >
          <CopyIcon className="size-2.5" />
        </button>
      </div>
    </footer>
  );
};
