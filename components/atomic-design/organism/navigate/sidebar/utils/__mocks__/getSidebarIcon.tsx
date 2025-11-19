/**
 * @file __mocks__/getSidebarIcon.tsx
 * @description Función helper reutilizable para mockear getSidebarIcon
 */

import React from "react"

export const mockGetSidebarIcon = (iconName: string) => {
  const MockIcon = () => React.createElement("span", { "data-testid": `icon-${iconName}` }, "Icon")
  return MockIcon
}

