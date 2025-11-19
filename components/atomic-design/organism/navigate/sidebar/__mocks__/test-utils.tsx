/**
 * @file __mocks__/test-utils.tsx
 * @description Utilidades reutilizables para tests del sidebar
 */

import { render } from "@testing-library/react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Provider } from "react-redux"
import { makeStore } from "@/store/makeStore"

export const renderWithProvider = (component: React.ReactElement) => {
  const store = makeStore()
  return render(
    <Provider store={store}>
      <SidebarProvider>{component}</SidebarProvider>
    </Provider>
  )
}

