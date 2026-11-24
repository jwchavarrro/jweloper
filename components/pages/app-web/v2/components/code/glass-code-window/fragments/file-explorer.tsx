/**
 * @file file-explorer.tsx
 * @description Fragmento del explorador de archivos en la barra lateral.
 */

import * as React from "react";
import { useTranslations } from "next-intl";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisIcon,
  FileCodeIcon,
  FilePlusCornerIcon,
  FolderPlusIcon,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Typography } from "@/components/atomic-design/atoms";
import type { FileItem } from "../utils/types";

interface FileExplorerProps {
  readonly files: FileItem[];
}

export const FileExplorer: React.FC<FileExplorerProps> = ({ files }) => {
  const t = useTranslations("appWeb");
  return (
    <div className="w-48 bg-foreground/5 border-r border-foreground/10 flex flex-col">
      {/* Header del explorador */}
      <div className="flex items-center justify-between px-3 py-2">
        <Typography
          variant="small"
          className="text-xs font-title  text-foreground uppercase tracking-wide"
        >
          {t("explorer")}
        </Typography>
        <EllipsisIcon className="size-4 text-foreground" />
      </div>

      <div className="px-3 space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ChevronDownIcon className="size-3 text-foreground" />
            <Typography
              variant="small"
              className="text-[10px] font-title text-foreground uppercase tracking-wide"
            >
              {/* lazy: nombre de carpeta ficticio de VS Code, no se traduce */}
              cv-john-cha-2025
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <FilePlusCornerIcon className="size-3 text-foreground" />
            <FolderPlusIcon className="size-3 text-foreground" />
          </div>
        </div>

        {/* Lista de archivos */}
        <ScrollArea className="flex-1">
          <div className="px-2 py-1">
            <div className="flex items-center gap-1">
              <ChevronRightIcon className="size-3 text-foreground rotate-90" />
              <Typography
                variant="small"
                className="text-foreground text-[10px]"
              >
                src
              </Typography>
            </div>
            <div className="ml-4">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-2 px-2 py-1 w-full text-left bg-foreground/10 border-l border-foreground"
                >
                  {file.icon || (
                    <FileCodeIcon className="size-3 text-green-400" />
                  )}
                  <Typography
                    variant="small"
                    className="text-foreground text-[10px]"
                  >
                    {file.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
