import { render, screen } from "@testing-library/react"
import { Sidebar } from "../index"

// Mock reutilizable del componente Sidebar
jest.mock("@/components/atomic-design/organism/navigate", () => ({
  Breadcrumb: () => <nav data-testid="breadcrumb">Breadcrumb</nav>,
}))

// Mocks específicos para este test
jest.mock("../fragments", () => ({
  AppSidebar: () => (
    <div data-testid="app-sidebar">Sidebar Content</div>
  ),
}))

const mockSidebarData = {
  user: {
    name: "Test User",
    email: "test@example.com",
    avatar: "/avatar.jpg",
  },
  navMain: [],
  navSecondary: [],
  chats: [],
}

describe("Sidebar", () => {
  it("should render Sidebar component", () => {
    render(
      <Sidebar data={mockSidebarData}>
        <div>Test Content</div>
      </Sidebar>
    )
    
    expect(screen.getByTestId("app-sidebar")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument()
  })

  it("should render children", () => {
    render(
      <Sidebar data={mockSidebarData}>
        <div data-testid="child">Test Content</div>
      </Sidebar>
    )
    
    expect(screen.getByTestId("child")).toBeInTheDocument()
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("should pass data to AppSidebar", () => {
    render(
      <Sidebar data={mockSidebarData}>
        <div>Test</div>
      </Sidebar>
    )
    
    expect(screen.getByTestId("app-sidebar")).toBeInTheDocument()
  })

  it("should render SidebarTrigger", () => {
    const { container } = render(
      <Sidebar data={mockSidebarData}>
        <div>Test</div>
      </Sidebar>
    )
    
    const trigger = container.querySelector('[data-sidebar="trigger"]')
    expect(trigger).toBeInTheDocument()
  })
})

