/**
 * @file __mocks__/getSidebarIcon.ts
 * @description Función helper reutilizable para mockear getSidebarIcon
 */

export const mockGetSidebarIcon = (iconName: string) => {
  const MockIcon = () => <span data-testid={`icon-${iconName}`}>Icon</span>
  return MockIcon
}

