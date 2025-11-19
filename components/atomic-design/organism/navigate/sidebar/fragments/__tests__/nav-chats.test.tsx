import { screen } from "@testing-library/react"
import { NavChats } from "../nav-chats"
import { renderWithProvider } from "../../__mocks__/test-utils"

// Mock reutilizable de getSidebarIcon (función helper en __mocks__/getSidebarIcon.ts)
jest.mock("../../utils", () => ({
  ...jest.requireActual("../../utils"),
  getSidebarIcon: (iconName: string) => {
    const MockIcon = () => <span data-testid={`icon-${iconName}`}>Icon</span>
    return MockIcon
  },
}))

const mockChats = [
  {
    name: "Chat 1",
    url: "#",
    icon: "Frame",
  },
  {
    name: "Chat 2",
    url: "#",
    icon: "PieChart",
  },
]

describe("NavChats", () => {
  it("should render NavChats with chats", () => {
    renderWithProvider(<NavChats chats={mockChats} />)
    
    expect(screen.getByText("Chat 1")).toBeInTheDocument()
    expect(screen.getByText("Chat 2")).toBeInTheDocument()
  })

  it("should render chats with icons", () => {
    renderWithProvider(<NavChats chats={mockChats} />)
    
    expect(screen.getByTestId("icon-Frame")).toBeInTheDocument()
    expect(screen.getByTestId("icon-PieChart")).toBeInTheDocument()
  })

  it("should render group label", () => {
    renderWithProvider(<NavChats chats={mockChats} />)
    
    expect(screen.getByText("Chats")).toBeInTheDocument()
  })

  it("should render empty when no chats", () => {
    renderWithProvider(<NavChats chats={[]} />)
    
    expect(screen.queryByText("Chat 1")).not.toBeInTheDocument()
    expect(screen.getByText("Chats")).toBeInTheDocument()
  })
})

