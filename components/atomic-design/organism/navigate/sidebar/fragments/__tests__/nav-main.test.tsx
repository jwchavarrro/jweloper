import { screen } from "@testing-library/react"
import { NavMain } from "../nav-main"
import { renderWithProvider } from "../../__mocks__/test-utils"

// Mock reutilizable de getSidebarIcon (función helper en __mocks__/getSidebarIcon.ts)
jest.mock("../../utils", () => ({
  ...jest.requireActual("../../utils"),
  getSidebarIcon: (iconName: string) => {
    const MockIcon = () => <span data-testid={`icon-${iconName}`}>Icon</span>
    return MockIcon
  },
}))

const mockItems = [
  {
    title: "App Web",
    url: "/app-web",
    icon: "SquareTerminal",
    isActive: true,
    items: [
      { title: "Inicio", url: "/app-web/inicio" },
      { title: "Proyectos", url: "/app-web/proyectos" },
    ],
  },
  {
    title: "IA Chat",
    url: "/ia-chat",
    icon: "Bot",
  },
]

describe("NavMain", () => {
  it("should render NavMain with items", () => {
    renderWithProvider(<NavMain items={mockItems} />)
    
    expect(screen.getByText("App Web")).toBeInTheDocument()
    expect(screen.getByText("IA Chat")).toBeInTheDocument()
  })

  it("should render items with icons", () => {
    renderWithProvider(<NavMain items={mockItems} />)
    
    expect(screen.getByTestId("icon-SquareTerminal")).toBeInTheDocument()
    expect(screen.getByTestId("icon-Bot")).toBeInTheDocument()
  })

  it("should render subitems when items have subitems", () => {
    renderWithProvider(<NavMain items={mockItems} />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Proyectos")).toBeInTheDocument()
  })

  it("should render item without subitems", () => {
    renderWithProvider(<NavMain items={[mockItems[1]]} />)
    
    expect(screen.getByText("IA Chat")).toBeInTheDocument()
    expect(screen.queryByText("Inicio")).not.toBeInTheDocument()
  })

  it("should render group label", () => {
    renderWithProvider(<NavMain items={mockItems} />)
    
    expect(screen.getByText("Portafolio")).toBeInTheDocument()
  })
})

