/**
 * @file __mocks__/index.tsx
 * @description Mock reutilizable para el componente Sidebar
 */

export const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="sidebar">{children}</div>
);
