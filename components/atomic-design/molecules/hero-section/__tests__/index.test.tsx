import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { HeroSection } from "../index"

describe("HeroSection", () => {
  it("should render hero section with title", () => {
    render(<HeroSection title="Hero Title" />)
    const heading = screen.getByRole("heading", { name: /hero title/i })
    expect(heading).toBeInTheDocument()
  })

  it("should render hero section with title and subtitle", () => {
    render(<HeroSection title="Hero Title" subtitle="Hero Subtitle" />)
    expect(screen.getByRole("heading", { name: /hero title/i })).toBeInTheDocument()
    expect(screen.getByText("Hero Subtitle")).toBeInTheDocument()
  })

  it("should render hero section with primary button", () => {
    render(
      <HeroSection
        title="Hero Title"
        primaryButtonText="Primary Button"
      />
    )
    const button = screen.getByRole("button", { name: /primary button/i })
    expect(button).toBeInTheDocument()
  })

  it("should render hero section with secondary button", () => {
    render(
      <HeroSection
        title="Hero Title"
        secondaryButtonText="Secondary Button"
      />
    )
    const button = screen.getByRole("button", { name: /secondary button/i })
    expect(button).toBeInTheDocument()
  })

  it("should render hero section with both buttons", () => {
    render(
      <HeroSection
        title="Hero Title"
        primaryButtonText="Primary"
        secondaryButtonText="Secondary"
      />
    )
    expect(screen.getByRole("button", { name: /primary/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /secondary/i })).toBeInTheDocument()
  })

  it("should handle primary button click", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(
      <HeroSection
        title="Hero Title"
        primaryButtonText="Primary"
        onPrimaryButtonClick={handleClick}
      />
    )
    const button = screen.getByRole("button", { name: /primary/i })
    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("should handle secondary button click", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(
      <HeroSection
        title="Hero Title"
        secondaryButtonText="Secondary"
        onSecondaryButtonClick={handleClick}
      />
    )
    const button = screen.getByRole("button", { name: /secondary/i })
    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("should not render buttons section when no buttons provided", () => {
    render(<HeroSection title="Hero Title" subtitle="Subtitle" />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByText("Subtitle")).toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("should render heading with gradient variant", () => {
    render(<HeroSection title="Gradient Title" />)
    const heading = screen.getByRole("heading")
    expect(heading).toHaveClass("bg-gradient-to-r")
  })

  it("should accept custom className", () => {
    render(<HeroSection title="Hero Title" className="custom-hero" />)
    const section = screen.getByRole("heading").closest("section")
    expect(section).toHaveClass("custom-hero")
  })

  it("should render complete hero section with all props", () => {
    const handlePrimary = jest.fn()
    const handleSecondary = jest.fn()
    render(
      <HeroSection
        title="Complete Hero"
        subtitle="Complete Subtitle"
        primaryButtonText="Primary"
        secondaryButtonText="Secondary"
        onPrimaryButtonClick={handlePrimary}
        onSecondaryButtonClick={handleSecondary}
        className="custom-class"
      />
    )
    expect(screen.getByRole("heading", { name: /complete hero/i })).toBeInTheDocument()
    expect(screen.getByText("Complete Subtitle")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /primary/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /secondary/i })).toBeInTheDocument()
  })

  it("should render section element", () => {
    render(<HeroSection title="Hero Title" />)
    const section = screen.getByRole("heading").closest("section")
    expect(section).toBeInTheDocument()
    expect(section?.tagName).toBe("SECTION")
  })
})

