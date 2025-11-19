/**
 * @file __mocks__/test-utils.tsx
 * @description Utilidades reutilizables para tests del sidebar
 */

import { render } from "@testing-library/react"
import { SidebarProvider } from "@/components/ui/sidebar"

export const renderWithProvider = (component: React.ReactElement) => {
  return render(<SidebarProvider>{component}</SidebarProvider>)
}

