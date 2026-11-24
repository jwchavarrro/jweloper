/**
 * @file ide-header.tsx
 * @description Fragmento de la barra superior del IDE.
 */

import { EqualNot } from "lucide-react";

// Import of components custom
import { Typography } from "@/components/atomic-design/atoms";
import { GlassWindowControls } from "@/components/pages/app-web/v2/components/decorations/glass-window-controls";

// Import of utilities
import { MENU_MAIN_ITEMS, MOBILE_MENU_COUNT } from "../utils/constants";

interface CodeEditorHeaderProps {
  readonly isMobile?: boolean;
}

export const CodeEditorHeader: React.FC<CodeEditorHeaderProps> = ({
  isMobile = false,
}) => {
  const menuItems = isMobile
    ? MENU_MAIN_ITEMS.slice(0, MOBILE_MENU_COUNT)
    : MENU_MAIN_ITEMS;
  return (
    <header className="flex items-center justify-between px-3 py-1.5 bg-foreground/5 border-b border-foreground/10">
      <div className="flex items-center gap-4 ">
        <EqualNot className="size-4 text-foreground" />
        {menuItems.map((item) => (
          <Typography
            key={item}
            variant="small"
            className="text-xs text-foreground"
          >
            {item}
          </Typography>
        ))}
      </div>
      <GlassWindowControls />
    </header>
  );
};
