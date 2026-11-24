/**
 * @file status-bar.tsx
 * @description Fragmento de la barra de estado.
 */

import * as React from "react";
import { CopyIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/atomic-design/atoms";

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
  const t = useTranslations("appWeb");
  return (
    <footer className="flex items-center justify-between px-4 bg-foreground/5 border-t border-foreground/10">
      <div className="flex items-center gap-4">
        <Typography variant="small" className="text-[11px] text-foreground">
          {language.toUpperCase()}
        </Typography>
        <Typography variant="small" className="text-[11px] text-foreground">
          {t("lines", { count: lineCount })}
        </Typography>
        <Typography variant="small" className="text-[11px] text-foreground">
          {t("characters", { count: characterCount })}
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        {copyMessage && (
          <Typography variant="small" className="text-[11px] text-foreground">
            {copyMessage}
          </Typography>
        )}
        <button
          type="button"
          className="p-1.5 rounded text-foreground hover:bg-foreground/10 transition-colors"
          title={t("copyCode")}
          onClick={onCopy}
        >
          <CopyIcon className="size-2.5" />
        </button>
      </div>
    </footer>
  );
};
