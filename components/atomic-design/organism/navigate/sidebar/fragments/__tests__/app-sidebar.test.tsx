import { screen } from "@testing-library/react"
import { AppSidebar } from "../app-sidebar"
import { renderWithProvider } from "../../__mocks__/test-utils"

// Mocks específicos de los fragments para este test
jest.mock("../nav-main", () => ({
  NavMain: ({ items }: { items: unknown[] }) => (
    <div data-testid="nav-main">NavMain {items.length} items</div>
  ),
}))

jest.mock("../nav-chats", () => ({
  NavChats: ({ chats }: { chats: unknown[] }) => (
    <div data-testid="nav-chats">NavChats {chats.length} chats</div>
  ),
}))

jest.mock("../nav-secondary", () => ({
  NavSecondary: ({ items }: { items: unknown[] }) => (
    <div data-testid="nav-secondary">NavSecondary {items.length} items</div>
  ),
}))

jest.mock("../nav-user", () => ({
  NavUser: ({ user }: { user: { name: string } }) => (
    <div data-testid="nav-user">NavUser {user.name}</div>
  ),
}))

const mockSidebarData = {
  user: {
    name: "Test User",
    email: "test@example.com",
    avatar: "/avatar.jpg",
  },
  navMain: [
    {
      title: "App Web",
      url: "/app-web",
      icon: "SquareTerminal",
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: "LifeBuoy",
    },
  ],
  chats: [
    {
      name: "Chat 1",
      url: "#",
      icon: "Frame",
    },
  ],
}

describe("AppSidebar", () => {
  it("should render AppSidebar", () => {
    renderWithProvider(<AppSidebar data={mockSidebarData} />)
    
    expect(screen.getByTestId("nav-main")).toBeInTheDocument()
    expect(screen.getByTestId("nav-chats")).toBeInTheDocument()
    expect(screen.getByTestId("nav-secondary")).toBeInTheDocument()
    expect(screen.getByTestId("nav-user")).toBeInTheDocument()
  })

  it("should pass correct data to fragments", () => {
    renderWithProvider(<AppSidebar data={mockSidebarData} />)
    
    expect(screen.getByText("NavMain 1 items")).toBeInTheDocument()
    expect(screen.getByText("NavChats 1 chats")).toBeInTheDocument()
    expect(screen.getByText("NavSecondary 1 items")).toBeInTheDocument()
    expect(screen.getByText("NavUser Test User")).toBeInTheDocument()
  })

  it("should render header with logo link", () => {
    renderWithProvider(<AppSidebar data={mockSidebarData} />)
    
    const logoLink = screen.getByRole("link", { name: "" })
    expect(logoLink).toHaveAttribute("href", "/")
  })
})

