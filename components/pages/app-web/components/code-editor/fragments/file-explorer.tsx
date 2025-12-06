/**
 * @file file-explorer.tsx
 * @description Fragmento del explorador de archivos en la barra lateral.
 */

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisIcon,
  FileCodeIcon,
  FilePlusCornerIcon,
  FolderPlusIcon,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Text } from "@/components/atomic-design/atoms";
import type { FileItem } from "../utils/types";

interface FileExplorerProps {
  readonly files: FileItem[];
}

export const FileExplorer: React.FC<FileExplorerProps> = ({ files }) => {
  return (
    <div className="w-48 bg-[#252526] border-r border-[#3e3e42] flex flex-col">
      {/* Header del explorador */}
      <div className="flex items-center justify-between px-3 py-2">
        <Text
          variant="small"
          className="text-xs font-title  text-white uppercase tracking-wide"
        >
          Explorador
        </Text>
        <EllipsisIcon className="size-4 text-white" />
      </div>

      <div className="px-3 space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ChevronDownIcon className="size-3 text-white" />
            <Text
              variant="small"
              className="text-[10px] font-title text-white uppercase tracking-wide"
            >
              cv-john-cha-2025
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <FilePlusCornerIcon className="size-3 text-white" />
            <FolderPlusIcon className="size-3 text-white" />
          </div>
        </div>

        {/* Lista de archivos */}
        <ScrollArea className="flex-1">
          <div className="px-2 py-1">
            <div className="flex items-center gap-1">
              <ChevronRightIcon className="size-3 text-white rotate-90" />
              <Text variant="small" className="text-white text-[10px]">
                src
              </Text>
            </div>
            <div className="ml-4">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-2 px-2 py-1 w-full text-left bg-[#2a2d2e] border-l border-white"
                >
                  {file.icon || (
                    <FileCodeIcon className="size-3 text-green-400" />
                  )}
                  <Text variant="small" className="text-white text-[10px]">
                    {file.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
