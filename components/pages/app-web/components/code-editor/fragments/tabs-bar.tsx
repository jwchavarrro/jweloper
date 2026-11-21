/**
 * @file tabs-bar.tsx
 * @description Fragmento de la barra de pestañas.
 */

import * as React from "react";
import { X } from "lucide-react";

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";

// Import of types
import type { FileItem } from "../utils/types";

interface TabsBarProps {
  readonly files: FileItem[];
}

export const TabsBar: React.FC<TabsBarProps> = ({ files }) => {
  return (
    <div className="flex items-center bg-[#2d2d30] border-b border-[#3e3e42] overflow-x-auto">
      {files.map((file) => (
        <div
          key={file.name}
          className="flex items-center gap-2 px-3 py-2 border-r border-[#3e3e42] bg-[#1e1e1e]"
        >
          {file.icon}
          <Typography variant="small" className="text-[10px] text-white">
            {file.name}
          </Typography>
          <X className="size-3 text-white" />
        </div>
      ))}
    </div>
  );
};
