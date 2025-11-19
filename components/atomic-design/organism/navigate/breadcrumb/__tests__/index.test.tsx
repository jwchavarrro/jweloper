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

  it("should handle empty pathname segments", () => {
    mockUsePathname.mockReturnValue("//")
    render(<Breadcrumb />)
    // Should filter out empty segments and only show "Inicio"
    expect(screen.getByText("Inicio")).toBeInTheDocument()
  })

  it("should handle pathname with trailing slash", () => {
    mockUsePathname.mockReturnValue("/app-web/")
    render(<Breadcrumb />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("App Web")).toBeInTheDocument()
  })

  it("should handle pathname starting with multiple slashes", () => {
    mockUsePathname.mockReturnValue("///app-web")
    render(<Breadcrumb />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("App Web")).toBeInTheDocument()
  })

  it("should handle single character segment", () => {
    mockUsePathname.mockReturnValue("/a")
    render(<Breadcrumb />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("A")).toBeInTheDocument()
  })

  it("should handle segment with numbers", () => {
    mockUsePathname.mockReturnValue("/app-web/123")
    render(<Breadcrumb />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("App Web")).toBeInTheDocument()
    expect(screen.getByText("123")).toBeInTheDocument()
  })

  it("should handle last item with disabled prop in items", () => {
    const items = [
      { label: "Inicio", href: "/" },
      { label: "Test", href: "/test", disabled: true },
    ]
    render(<Breadcrumb items={items} />)
    
    const lastItem = screen.getByText("Test")
    expect(lastItem.tagName).toBe("SPAN")
    expect(lastItem).toHaveClass("pointer-events-none")
  })

  it("should handle disabled root path via disabledRoutes", () => {
    mockUsePathname.mockReturnValue("/app-web")
    render(<Breadcrumb disabledRoutes={["/"]} />)
    
    const inicioItem = screen.getByText("Inicio")
    expect(inicioItem).toHaveClass("text-muted-foreground")
    expect(inicioItem).toHaveClass("pointer-events-none")
  })

  it("should handle excluded root path", () => {
    mockUsePathname.mockReturnValue("/app-web")
    render(<Breadcrumb excludeRoutes={["/"]} />)
    
    expect(screen.queryByText("Inicio")).not.toBeInTheDocument()
    expect(screen.getByText("App Web")).toBeInTheDocument()
  })

  it("should handle disabled route via disabledRoutes prop", () => {
    mockUsePathname.mockReturnValue("/app-web/proyectos")
    render(<Breadcrumb disabledRoutes={["/app-web"]} />)
    
    const disabledItem = screen.getByText("App Web")
    expect(disabledItem).toHaveClass("text-muted-foreground")
    expect(disabledItem).toHaveClass("pointer-events-none")
  })

  it("should handle separator with custom React node", () => {
    const items = [
      { label: "Inicio", href: "/" },
      { label: "Test", href: "/test" },
    ]
    render(<Breadcrumb items={items} separator={<span data-testid="custom-sep">→</span>} />)
    
    expect(screen.getByTestId("custom-sep")).toBeInTheDocument()
  })

  it("should handle segment with underscores", () => {
    mockUsePathname.mockReturnValue("/app_web/test_page")
    render(<Breadcrumb />)
    
    expect(screen.getByText("App_web")).toBeInTheDocument()
    expect(screen.getByText("Test_page")).toBeInTheDocument()
  })

  it("should handle segment with mixed case", () => {
    mockUsePathname.mockReturnValue("/AppWeb/TestPage")
    render(<Breadcrumb />)
    
    // El código hace split("-") y capitaliza cada palabra
    // Como "AppWeb" no tiene guiones, solo capitaliza la primera letra
    expect(screen.getByText(/Appweb/i)).toBeInTheDocument()
    expect(screen.getByText(/Testpage/i)).toBeInTheDocument()
  })

  it("should handle very long pathname", () => {
    mockUsePathname.mockReturnValue("/level1/level2/level3/level4/level5")
    render(<Breadcrumb />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Level1")).toBeInTheDocument()
    expect(screen.getByText("Level5")).toBeInTheDocument()
  })

  it("should handle pathname with special characters in segment", () => {
    mockUsePathname.mockReturnValue("/test-page_123")
    render(<Breadcrumb />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Test Page_123")).toBeInTheDocument()
  })

  it("should handle separator as React element", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ]
    const CustomSeparator = () => <span data-testid="custom-sep">→</span>
    render(<Breadcrumb items={items} separator={<CustomSeparator />} />)
    
    expect(screen.getByTestId("custom-sep")).toBeInTheDocument()
  })

  it("should handle all items disabled", () => {
    const items = [
      { label: "Home", href: "/", disabled: true },
      { label: "About", href: "/about", disabled: true },
    ]
    render(<Breadcrumb items={items} />)
    
    const homeItem = screen.getByText("Home")
    const aboutItem = screen.getByText("About")
    expect(homeItem).toHaveClass("text-muted-foreground")
    expect(aboutItem).toHaveClass("pointer-events-none")
  })

  it("should handle separator as string", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ]
    render(<Breadcrumb items={items} separator=">" />)
    
    expect(screen.getByText(">")).toBeInTheDocument()
  })

  it("should handle separator as number", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ]
    render(<Breadcrumb items={items} separator={123} />)
    
    expect(screen.getByText("123")).toBeInTheDocument()
  })

  it("should not show separator for first item", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ]
    const { container } = render(<Breadcrumb items={items} separator=">" />)
    
    const separators = container.querySelectorAll('[data-slot="breadcrumb-separator"]')
    // Should have one separator (between Home and About)
    expect(separators.length).toBe(1)
  })

  it("should handle pathname with only root", () => {
    mockUsePathname.mockReturnValue("/")
    const { container } = render(<Breadcrumb />)
    
    // Should return null for root path
    expect(container.firstChild).toBeNull()
  })

  it("should handle pathname with excluded all segments", () => {
    mockUsePathname.mockReturnValue("/app-web/proyectos")
    render(<Breadcrumb excludeRoutes={["/", "/app-web", "/app-web/proyectos"]} />)
    
    // All segments excluded, should return null
    const { container } = render(<Breadcrumb excludeRoutes={["/", "/app-web", "/app-web/proyectos"]} />)
    expect(container.firstChild).toBeNull()
  })

  it("should handle disabled last item via disabledRoutes", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ]
    render(<Breadcrumb items={items} disabledRoutes={["/about"]} />)
    
    const aboutItem = screen.getByText("About")
    expect(aboutItem.tagName).toBe("SPAN")
    expect(aboutItem).toHaveClass("pointer-events-none")
  })

  it("should handle disabled root path in generateBreadcrumbsFromPath", () => {
    mockUsePathname.mockReturnValue("/app-web")
    render(<Breadcrumb disabledRoutes={["/"]} />)
    
    const inicioItem = screen.getByText("Inicio")
    // Should be disabled but still visible
    expect(inicioItem).toBeInTheDocument()
  })

  it("should handle excluded segment in generateBreadcrumbsFromPath", () => {
    mockUsePathname.mockReturnValue("/app-web/proyectos")
    render(<Breadcrumb excludeRoutes={["/app-web"]} />)
    
    expect(screen.queryByText("App Web")).not.toBeInTheDocument()
    expect(screen.getByText("Proyectos")).toBeInTheDocument()
  })

  it("should handle disabled segment in generateBreadcrumbsFromPath", () => {
    mockUsePathname.mockReturnValue("/app-web/proyectos")
    render(<Breadcrumb disabledRoutes={["/app-web"]} />)
    
    const appWebItem = screen.getByText("App Web")
    expect(appWebItem).toHaveClass("text-muted-foreground")
    expect(appWebItem).toHaveClass("pointer-events-none")
  })

  it("should handle excluded root when pathname is not root", () => {
    mockUsePathname.mockReturnValue("/app-web")
    render(<Breadcrumb excludeRoutes={["/"]} />)
    
    // Root is excluded, so "Inicio" should not appear
    expect(screen.queryByText("Inicio")).not.toBeInTheDocument()
    expect(screen.getByText("App Web")).toBeInTheDocument()
  })

  it("should handle disabled root when pathname is not root", () => {
    mockUsePathname.mockReturnValue("/app-web")
    render(<Breadcrumb disabledRoutes={["/"]} />)
    
    // Root is disabled but should still appear
    const inicioItem = screen.getByText("Inicio")
    expect(inicioItem).toBeInTheDocument()
    expect(inicioItem).toHaveClass("text-muted-foreground")
  })

  it("should handle excluded segment path in loop", () => {
    mockUsePathname.mockReturnValue("/level1/level2/level3")
    render(<Breadcrumb excludeRoutes={["/level1/level2"]} />)
    
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Level1")).toBeInTheDocument()
    expect(screen.queryByText("Level2")).not.toBeInTheDocument()
    expect(screen.getByText("Level3")).toBeInTheDocument()
  })

  it("should handle disabled segment path in loop", () => {
    mockUsePathname.mockReturnValue("/level1/level2/level3")
    render(<Breadcrumb disabledRoutes={["/level1/level2"]} />)
    
    const level2Item = screen.getByText("Level2")
    expect(level2Item).toBeInTheDocument()
    // When disabled and not last, it should be a span with disabled classes
    const span = level2Item.closest("span.text-muted-foreground")
    expect(span).toBeInTheDocument()
    expect(span).toHaveClass("pointer-events-none")
  })
})

