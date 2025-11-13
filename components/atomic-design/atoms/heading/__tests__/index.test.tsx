import { render, screen } from "@testing-library/react"
import { Heading } from "../index"

describe("Heading", () => {
  it("should render heading with text", () => {
    render(<Heading>Título</Heading>)
    const heading = screen.getByRole("heading", { name: /título/i })
    expect(heading).toBeInTheDocument()
  })

  it("should render h1 by default", () => {
    render(<Heading>Default Heading</Heading>)
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it("should render h1 when level is 1", () => {
    render(<Heading level={1}>H1 Heading</Heading>)
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe("H1")
  })

  it("should render h2 when level is 2", () => {
    render(<Heading level={2}>H2 Heading</Heading>)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe("H2")
  })

  it("should render h3 when level is 3", () => {
    render(<Heading level={3}>H3 Heading</Heading>)
    const heading = screen.getByRole("heading", { level: 3 })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe("H3")
  })

  it("should render h4 when level is 4", () => {
    render(<Heading level={4}>H4 Heading</Heading>)
    const heading = screen.getByRole("heading", { level: 4 })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe("H4")
  })

  it("should render with default variant", () => {
    render(<Heading variant="default">Default Variant</Heading>)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
  })

  it("should render with accent variant", () => {
    render(<Heading variant="accent">Accent Heading</Heading>)
    const heading = screen.getByRole("heading")
    expect(heading).toHaveClass("text-primary")
  })

  it("should render with gradient variant", () => {
    render(<Heading variant="gradient">Gradient Heading</Heading>)
    const heading = screen.getByRole("heading")
    expect(heading).toHaveClass("bg-gradient-to-r")
    expect(heading).toHaveClass("bg-clip-text")
    expect(heading).toHaveClass("text-transparent")
  })

  it("should accept custom className", () => {
    render(<Heading className="custom-class">Custom Heading</Heading>)
    const heading = screen.getByRole("heading")
    expect(heading).toHaveClass("custom-class")
  })

  it("should combine variant with custom className", () => {
    render(
      <Heading variant="accent" className="custom-class">
        Combined Heading
      </Heading>
    )
    const heading = screen.getByRole("heading")
    expect(heading).toHaveClass("text-primary")
    expect(heading).toHaveClass("custom-class")
  })

  it("should handle default case when level is invalid", () => {
    // @ts-expect-error - Testing invalid level
    render(<Heading level={99}>Invalid Level</Heading>)
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it("should pass through additional props", () => {
    render(
      <Heading data-testid="custom-heading" id="heading-1">
        Heading with Props
      </Heading>
    )
    const heading = screen.getByTestId("custom-heading")
    expect(heading).toHaveAttribute("id", "heading-1")
  })
})

