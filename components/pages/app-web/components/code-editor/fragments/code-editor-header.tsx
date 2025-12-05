/**
 * @file ide-header.tsx
 * @description Fragmento de la barra superior del IDE.
 */

import { EqualNot } from "lucide-react";

// Import of components custom
import { Text } from "@/components/atomic-design/atoms";

// Import of utilities
import { MENU_MAIN_ITEMS } from "../utils/constants";

export const CodeEditorHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-[#3e3e42]">
      <div className="flex items-center gap-4">
        <EqualNot className="size-4 text-white" />
        {Object.values(MENU_MAIN_ITEMS).map((item) => (
          <Text key={item} variant="small" className="text-xs text-white">
            {item}
          </Text>
        ))}
      </div>
      <div className="flex items-center gap-1">
        {["#ff5f56", "#ffbd2e", "#27c93f"].map((color) => (
          <div
            key={color}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </header>
  );
};
