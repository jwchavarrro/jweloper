import { render, screen } from "@testing-library/react"
import { Breadcrumb } from "../index"

// Mock específico de usePathname para este test
const mockUsePathname = jest.fn()
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  usePathname: () => mockUsePathname(),
}))

describe("Breadcrumb", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/")
  })

  it("should render breadcrumb with custom items", () => {
    const items = [
      { label: "Inicio", href: "/" },
      { label: "App Web", href: "/app-web" },
    ]
    render(<Breadcrumb items={items} />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("App Web")).toBeInTheDocument()
  })

  it("should render breadcrumb from pathname", () => {
    mockUsePathname.mockReturnValue("/app-web")
    render(<Breadcrumb />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("App Web")).toBeInTheDocument()
  })

  it("should render last item as page (not link)", () => {
    const items = [
      { label: "Inicio", href: "/" },
      { label: "App Web", href: "/app-web" },
    ]
    render(<Breadcrumb items={items} />)
    
    const lastItem = screen.getByText("App Web")
    expect(lastItem.tagName).toBe("SPAN")
  })

  it("should exclude routes when excludeRoutes prop is provided", () => {
    mockUsePathname.mockReturnValue("/app-web/proyectos")
    render(<Breadcrumb excludeRoutes={["/app-web"]} />)
    
    expect(screen.queryByText("App Web")).not.toBeInTheDocument()
    expect(screen.getByText("Proyectos")).toBeInTheDocument()
  })

  it("should disable routes when disabledRoutes prop is provided", () => {
    const items = [
      { label: "Inicio", href: "/" },
      { label: "App Web", href: "/app-web" },
    ]
    render(<Breadcrumb items={items} disabledRoutes={["/app-web"]} />)
    
    const disabledItem = screen.getByText("App Web")
    expect(disabledItem).toHaveClass("pointer-events-none")
  })

  it("should return null when no items", () => {
    mockUsePathname.mockReturnValue("/")
    const { container } = render(<Breadcrumb />)
    
    expect(container.firstChild).toBeNull()
  })

  it("should accept custom className", () => {
    const items = [{ label: "Test", href: "/test" }]
    const { container } = render(<Breadcrumb items={items} className="custom-class" />)
    
    const breadcrumb = container.querySelector("nav")
    expect(breadcrumb).toHaveClass("custom-class")
  })

  it("should format segment names correctly", () => {
    mockUsePathname.mockReturnValue("/app-web/ia-chat")
    render(<Breadcrumb />)
    
    expect(screen.getByText("App Web")).toBeInTheDocument()
    expect(screen.getByText("Ia Chat")).toBeInTheDocument()
  })

  it("should handle custom separator", () => {
    const items = [
      { label: "Inicio", href: "/" },
      { label: "Test", href: "/test" },
    ]
    render(<Breadcrumb items={items} separator=">" />)
    
    expect(screen.getByText(">")).toBeInTheDocument()
  })

  it("should handle disabled item in items prop", () => {
    const items = [
      { label: "Inicio", href: "/", disabled: true },
      { label: "Test", href: "/test" },
    ]
    render(<Breadcrumb items={items} />)
    
    const disabledItem = screen.getByText("Inicio")
    expect(disabledItem).toHaveClass("pointer-events-none")
  })

  it("should handle root path correctly", () => {
    mockUsePathname.mockReturnValue("/")
    const { container } = render(<Breadcrumb />)
    
    expect(container.firstChild).toBeNull()
  })

  it("should handle complex path segments", () => {
    mockUsePathname.mockReturnValue("/app-web/proyectos/nuevo-proyecto")
    render(<Breadcrumb />)
    
    expect(screen.getByText("App Web")).toBeInTheDocument()
    expect(screen.getByText("Proyectos")).toBeInTheDocument()
    expect(screen.getByText("Nuevo Proyecto")).toBeInTheDocument()
  })

  it("should render disabled item with correct classes when isDisabled is true", () => {
    const items = [
      { label: "Inicio", href: "/", disabled: true },
      { label: "Test", href: "/test" },
    ]
    render(<Breadcrumb items={items} />)
    
    const disabledItem = screen.getByText("Inicio")
    expect(disabledItem).toHaveClass("text-muted-foreground")
    expect(disabledItem).toHaveClass("pointer-events-none")
  })

  it("should render last item as page even when disabled", () => {
    const items = [
      { label: "Inicio", href: "/" },
      { label: "Test", href: "/test", disabled: true },
    ]
    render(<Breadcrumb items={items} />)
    
    const lastItem = screen.getByText("Test")
    expect(lastItem.tagName).toBe("SPAN")
  })

  it("should handle excludeRoutes with root path", () => {
    mockUsePathname.mockReturnValue("/app-web")
    render(<Breadcrumb excludeRoutes={["/"]} />)
    
    expect(screen.queryByText("Inicio")).not.toBeInTheDocument()
    expect(screen.getByText("App Web")).toBeInTheDocument()
  })

  it("should handle multiple excluded routes", () => {
    mockUsePathname.mockReturnValue("/app-web/ia-chat/proyectos")
    render(<Breadcrumb excludeRoutes={["/app-web", "/app-web/ia-chat"]} />)
    
    expect(screen.queryByText("App Web")).not.toBeInTheDocument()
    expect(screen.queryByText("Ia Chat")).not.toBeInTheDocument()
    expect(screen.getByText("Proyectos")).toBeInTheDocument()
  })
})

