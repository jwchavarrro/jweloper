import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "../index"

describe("Button", () => {
  it("should render button with text", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it("should render button with default variant", () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-primary")
  })

  it("should render button with custom variant", () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-destructive")
  })

  it("should render button with outline variant", () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("border")
  })

  it("should render button with secondary variant", () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-secondary")
  })

  it("should render button with ghost variant", () => {
    render(<Button variant="ghost">Ghost Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("hover:bg-accent")
  })

  it("should render button with link variant", () => {
    render(<Button variant="link">Link Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("text-primary")
  })

  it("should render button with different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    let button = screen.getByRole("button")
    expect(button).toHaveClass("h-8")

    rerender(<Button size="lg">Large</Button>)
    button = screen.getByRole("button")
    expect(button).toHaveClass("h-10")
  })

  it("should render button with gradient custom variant", () => {
    render(<Button customVariant="gradient">Gradient Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-gradient-to-r")
    expect(button).toHaveClass("from-primary")
  })

  it("should render button with glow custom variant", () => {
    render(<Button customVariant="glow">Glow Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("shadow-lg")
    expect(button).toHaveClass("shadow-primary/50")
  })

  it("should handle click events", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole("button")
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
    expect(button).toHaveClass("disabled:opacity-50")
  })

  it("should accept custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("custom-class")
  })

  it("should combine custom variant with base variant", () => {
    render(
      <Button variant="default" customVariant="glow">
        Combined Variants
      </Button>
    )
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-primary")
    expect(button).toHaveClass("shadow-lg")
  })

  it("should render as child when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
  })

  it("should pass through additional props", () => {
    render(<Button data-testid="custom-button" aria-label="Custom label">Button</Button>)
    const button = screen.getByTestId("custom-button")
    expect(button).toHaveAttribute("aria-label", "Custom label")
  })

  it("should handle multiple clicks", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole("button")
    await user.click(button)
    await user.click(button)
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(3)
  })
})

