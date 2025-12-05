/**
 * @file tabs-bar.tsx
 * @description Fragmento de la barra de pestañas.
 */

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Import of components custom
import { Text } from "@/components/atomic-design/atoms";

// Import of types
import type { FileItem } from "../utils/types";

interface TabsBarProps {
  readonly files: FileItem[];
  readonly activeFile: string;
  readonly onFileSelect: (fileName: string) => void;
}

export const TabsBar: React.FC<TabsBarProps> = ({
  files,
  activeFile,
  onFileSelect,
}) => {
  return (
    <div className="flex items-center bg-[#2d2d30] border-b border-[#3e3e42] overflow-x-auto">
      {files.map((file) => (
        <button
          key={file.name}
          type="button"
          className={cn(
            "flex items-center gap-2 px-3 py-2 cursor-pointer border-r border-[#3e3e42]",
            activeFile === file.name
              ? "bg-[#1e1e1e]"
              : "bg-[#2d2d30] hover:bg-[#37373d]"
          )}
          onClick={() => onFileSelect(file.name)}
        >
          {file.icon}
          <Text variant="small" className="text-[10px] text-white">
            {file.name}
          </Text>
          <X className="size-3 text-white" />
        </button>
      ))}
    </div>
  );
};
