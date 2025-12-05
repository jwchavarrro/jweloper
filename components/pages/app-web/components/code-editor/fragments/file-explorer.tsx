/**
 * @file file-explorer.tsx
 * @description Fragmento del explorador de archivos en la barra lateral.
 */

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon,
  FileCodeIcon,
  FilePlusCornerIcon,
  FolderIcon,
  FolderPlusIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Text } from "@/components/atomic-design/atoms";
import type { FileItem } from "../utils/types";

interface FileExplorerProps {
  readonly files: FileItem[];
  readonly activeFile: string;
  readonly onFileSelect: (fileName: string) => void;
  readonly isFolderOpen: boolean;
  readonly onFolderToggle: (open: boolean) => void;
}

export const FileExplorer: React.FC<FileExplorerProps> = ({
  files,
  activeFile,
  onFileSelect,
  isFolderOpen,
  onFolderToggle,
}) => {
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
          <Collapsible open={isFolderOpen} onOpenChange={onFolderToggle}>
            <CollapsibleTrigger
              className={cn(
                "flex items-center gap-1 px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] w-full text-left"
              )}
            >
              <ChevronRightIcon
                className={cn("size-3 text-white", isFolderOpen && "rotate-90")}
              />
              <Text variant="small" className="text-white text-[10px]">
                src
              </Text>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-4">
                {files.map((file) => (
                  <button
                    key={file.name}
                    type="button"
                    className={cn(
                      "flex items-center gap-2 px-2 py-1 cursor-pointer w-full text-left",
                      activeFile === file.name &&
                        "bg-[#2a2d2e] border-l border-white",
                      activeFile !== file.name && "hover:bg-[#2a2d2e]"
                    )}
                    onClick={() => onFileSelect(file.name)}
                  >
                    {file.icon || (
                      <FileCodeIcon className="size-3 text-green-400" />
                    )}
                    <Text variant="small" className="text-white text-[10px]">
                      {file.name}
                    </Text>
                  </button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ScrollArea>
      </div>
    </div>
  );
};
